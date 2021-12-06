Setup:
Run these to install dependencies and set up the database:

For the backend: 

bundle install ~ to install the Sinatra gem from the Gemfile. 
bundle exec rake server ~ to start the server.
rake db:seed ~ to load the data from db/seeds.rb.

For the frontend:
	
	npm install ~ this command installs a package and it’s dependencies. A .json file is downloaded and a node_modules folder should install. 
	npm start ~ this script is used to execute the defined file in it without typing its execution command. 

Further Instructions:
	Open a browser and load: http://localhost:3000/
	Or if wanting to see the backend, load: http://localhost:9292/paintings 

In this app, the user is able to:
	- Click one of four buttons on the home page. 
	- Upon clicking the “Show All Artists” button, the user will see a list of all the current student artists, along with their ID and Art Style. 
	- If the button is to be clicked again, the list disappears. 

	- Upon clicking the “Show All Paintings” button, the user will see a list of all paintings, along with their titles, year created, the artist ID number, and a delete button. 
	- If the instructor or artists wish to remove the listing from their portfolio, they can click the delete button and it is removed from the list. 
	- If the button is to be clicked again, the list disappears. 

	- Upon clicking the “Show Add Form”, the user will see a form with three input fields to fill in and an add button. 
	- If “add button” is clicked, the information from the form will be appended to the list of paintings. 
	- If the “Show Add Form” button is clicked again the list disappears. 

	- Upon clicking “Update List”, the user will see a list of the paintings with a button that reads “Press to Update”
    - If “Press to Update” is clicked, a form with three input fields will be shown to the user, along with an update button. 
    - If “update” button is clicked, the information from the fields will be submitted and the painting will be updated with inputted information. 
    - If "Update List" is clicked again, the list will disappear. 

In this app, the developer is able to:

	run: rake console 
	
	With this command, the developer is able to interact with the database, using Active Record, by performing queries via the terminal. 