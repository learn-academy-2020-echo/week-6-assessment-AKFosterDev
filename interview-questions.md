# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer: The foreign key would be animal_id and this would be in the Sightings model.

Researched answer: Using custom association names in Rails can be a great way of increasing understanding throughout an application. For example, it can allow for using a column called owner_id that references a User record.

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Update and Delete. These routes need a specific id that is to be acted upon.

Researched answer: REST APIs have several types of parameters: Header parameters: Parameters included in the request header, usually related to authorization. Path parameters: Parameters within the path of the endpoint, before the query string ( ? ). These are usually set off within curly braces.

3. Name three rails generator commands. What is created by each?

Your answer: model (used to create the model table for the database), controller (used to create the controller class for a given model), migration (used to make changes to the model <ie add columns, rename columns>)

Researched answer: Others are rspec (creates new spec file for the model), resource (If you are building an API, using a front end MVC framework, or simply want to manually create your views, the resource generator is a great option for creating the code.), scaffold (Is a full set of model, database migration for that model, controller to manipulate it, views to view and manipulate the data, and a test suite for each of the above.)

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /users Index (Show all users)

method="GET" /users/1 Show (Show one specific user by id)

method="GET" /users/new New (Returns HTML form for creating a new user)

method="GET" /users/edit/1 Edit (Returns HTML form for editing a specific user by an id)

method="POST" /users/ Create (Submits new data from form to create a new user in database)

method="PUT" /users/1 Update (Submits data from edit form to update user in database)

method="DELETE" /users/1 Destroy (Deletes one specific user based on an id)

5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.

Story #1 - As a user when I open the app, I see a heading that says "Todo List"
Story #2 - As a new user, I see a welcome message that says "What's Your Plan for Today?"
Story #3 - As a user, I see an input field that says "Add a todo" as placeholder text
Story #4 - As a user, I see a button next to the input field that says "Add Todo"
Story #5 - As a user, when I click the "Add Todo" button, my entered todo is shown on the page
Story #6 - As a user, I see a checkbox before the todo item text
Story #7 - As a user, I see a X button on the far right of the todo item text
Story #8 - As a user, when I click the checkbox the todo item text becomes lined through
Story #9 - As a user, when I click the X button the todo item is removed from the page
Story #10 - As a user, when all todo items have been completed I see a message "Well done! It looks like someone was productive today! Keep up the good work!"
