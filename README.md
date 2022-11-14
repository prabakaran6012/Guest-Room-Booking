# Guest-Room-Booking
-> MERN- MongoDb,Express,React,Node + google fires store
-> Many to Many End to End Full stack project
# Run Locally
# Backend
1. download main branch code and extract it 
2. inside the backend code =>  run the following command => npm run start
Note : I forgot to add .gitignore on Backend, Kindly Add the .gitignore file and write /node_modules
# AdminEnd and UserEnd
1. inside the AdminEnd or UserEnd folder ( Note: Both React Apps are running the same Port 3000, so test one by one)
2. Run The following command => 1. npm i
                                2. npm run start

Admin Login Details: ( You can Create a New admin As well)
1. email=> Admin32@gmail.com  password=> Admin32
2. email=> Admin33@gmail.com  password=> Admin33

User Login Details: ( You can Create a New User As well)
1. email=> Suresh@gmail.com password=> Suresh
2. email=> Ramesh@gmail.com password=> Ramesh


# BackEnd Deployment using Heroku CLI
1. create account with heroku
2. install heroku cli
3. create app in heroku using heroku site
4. inside the backend folder -> open terminal & type following commands 
5. heroku login
6. git init
7. heroku git:remote -a YourAppNameDeclaredAsHerokuSite
8. git add .
9. git commit -am "description"
10. git push heroku master
If any Changes With Code execute last 3 commands to Deploy Updated One

Once Backend Deployed you got a Base Url => Copy the url and Replace the All http://localhost:8080/ In The Both FrontEnd REACT Apps

# FrontEnd Deployment using Heroku CLI
Follow the same first 7 steps On BackEnd Deployment and then,
8. heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs
9. git add .
10. git commit -am "your command"
11. git checkout -b main
12. git push heroku main

                                
