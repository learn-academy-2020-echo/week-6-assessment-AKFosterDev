# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) This is defining the class for the controller of the BlogPosts model
class BlogPostsController < ApplicationController
  def index
    # 2) Setting an instance variable to hold all blog posts in the database
    @posts = BlogPost.all
  end

  def show
    # 3) Setting an instance variable to hold one blog post with a specific id
    @post = BlogPost.find(params[:id])
  end

  # 4) Defines method to set instance variable to hold the Active Record command for creating a new instance
  def new
    @post = Post.new
  end

  def create
    # 5) Setting an instance variable to hold the data to create a new blog post. This is being passed strong params that have been defined below to protect the data being entered into the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) This is taking the instance variable and using the update method with the strong params being passed. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) If something went wrong in deleting a blog post based on it's id(from above) this is redirecting back to the blog post being deleted 
      redirect_to blog_post_path(@post)
    end
  end

  # 8) Private is a keyword that restricts the scope of where a method can be called. These methods can only be called within the class they are defined. These methods are only meant to be used as arguments to controller methods. This way there is no way they are called from somewhere else in the program.
  private
  def blog_post_params
    # 9) The require method takes in the model name. The permit method sets which model table columns can be updated within the class.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) This is setting the relationship between the BlogPost table and the Comments table. An instance in the BlogPost table can 'have many' comments where the instance within the Comment table will only be associated with one blog post referenced with the foreign key (blog_post_id) 
  has_many :comments
end
