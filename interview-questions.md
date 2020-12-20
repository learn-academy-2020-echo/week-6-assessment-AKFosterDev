# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer: The foreign key would be animal_id and this would be in the Sightings model.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Update and Delete. These routes need a specific id that is to be acted upon.

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: model (used to create the model table for the database), controller (used to create the controller class for a given model), migration (used to make changes to the model <ie add columns, rename columns>)

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /users Index (Show all users)

method="GET" /users/1 Show (Show one user by id)

method="GET" /users/new New (Connects form to model)

method="GET" /users/edit/1 Edit (Connects form to model to edit by an id)

method="POST" /users/ Create (Submits new data from form to create a new user in database)

method="PUT" /users/1 Update (Submits data from edit form to update user in database)

method="DELETE" /users/1 Destroy (Deletes one user based on an id)

5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.
