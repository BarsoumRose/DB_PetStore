# Setting up MySQL database

To access the database for our project, please download mySQL, community development edition. Create a database and remeber the user and password for it. 

create a schema called pet_store

Once a schema is created, you can copy and paste our PetStore.sql file into a schema worksheet and run the worksheet. This will create all our tables. 

# Installing packages 
To run our project, please install node.js This can be accessed here [https://nodejs.org/en/download]
once node.js is downloaded, our project can be openned in an IDE such as VScode. 

the following commands should be run:

`npm install react`

`npm install cors`

`npm install express`

`npm install axios`

`npm install @mui/material @emotion/react @emotion/styled`

`npm install @mui/icons-material`

# Setting Up the Datbase connection
using your database information from earlier, go to the index.js file in the BackEnd foler. 
Replace the information on lines 10-13 with your information.

# Running Our Project
Open two terminals in VScode. 
in one terminal, cd to my-react-app\src and run the following command:
`npm start`

this will start the react app. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

in the other terminal, cd to \BackEnd and run the following command:
`node index.js`

this will start the server and you should also see the followng message if the server is run correctly:
"yay, your server is running on port 3001"

# To Stop Project 
in both of the open terminals, ^C to close the react project and the server.

# Using Our Project 
After completing the above steps, you may Add, Delete, Update, and Select from our frontend react project. Changes can be viewed and verified through the MySQL application and database that you downloaded. 

Thank you! Enjoy :)

