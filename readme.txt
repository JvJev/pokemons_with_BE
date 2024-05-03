Main features:
1. Time planner module calculates time required for task to complete.
2. See previous time calculations after login.
3. Register and login feature.
4. get and post data to mongo database via api.

    Note: I created this application from my previous code. This was faster apprach because I had very limited. You will see in commits that I have deleted unused code. Here is link to original project if you are interested: https://github.com/JvJev/eshop_react_node .
    Note: tools used: vs code, chrome, react, node.express, npm, mongoDB, chatGPT, youtube, google, github, 


Here are steps how to use application:

1. Download code from https://github.com/JvJev/tietovery

2. Open code in your code editor.
    Note: I used VS code, bash for terminal, NPM. So further instructions 
    will be based on mentioned tools.

3. Open two terminal windows. In first type in "cd frontend" to reach frontend directory, 
in second "cd backend" to reach backend directory. 

4. In each terminal run "npm install" command. Wait until dependencies are being installed.
    4.1. You also have to add   "proxy": "http://localhost:5000", in your frontend package.json folder. 
    In the begining of the file after line "name". It should look like this:
    
    {
  "name": "frontend",
  "proxy": "http://localhost:5000",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.6",
    "bootstrap": "^5.2.3",
    "formik": "^2.4.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.4",
    "react-datepicker": "^4.12.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^1.3.0",
    "react-router-bootstrap": "^0.26.2",
    "react-router-dom": "^6.10.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3",
    "web-vitals": "^2.1.4"
  },

5. Now you need to connect MongoDB to project's backend.
    5.1. Create your mongodb account. Here is a link: https://www.mongodb.com/ (it's free)
    5.2. Now you need to create database, user and set it up. (check 5.4. video)
    5.3. Now you need to connect mongo database to backend by using MONGO_URI.
    in backend folder create file named ".env" and create "MONGODB_URI" variable and link.
    5.4.It should work now. Here are some videos to hel you:
    Simple video: https://www.youtube.com/watch?v=aygw0wjW5bA&t=314s
    More detailed approach: https://www.youtube.com/watch?v=bhiEJW5poHU
    I also added few screenshots
    Note: do not share your URI with others, because it woul'd mean you give full access to your database to someone.

6. Create JWT token secret in same ".env" file. This will encrypt your password.
I also added a screenshot how it should look like. Also code in .env have to look like this:

JWT_SECRET=somethingsecret

MONGODB_URI="and following mongo link here that you created"

7. At this point you get back to your frontend and backend terminals and in each run command "npm start".
    7.1. application fronend is reachable in your browser (chrome recommended). Link is: http://localhost:3000/
    7.2. aplication backend is reachable in http://localhost:5000/api/seed .
    You should open new tab and launch this link to load up dumy data for application to work.

8. Now you will be able to use application, to see all changes in the database and access it.
    For your convenience I created an account for you, logins are:
    login email: info@tietoevry.com
    password: Tieto123

    Also you can create new account if you want.


