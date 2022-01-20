# training-auth-api
 An user authentication and authorization API, made using nodeJS, express, mongoDB, and JWT
 
 # instructions

- Rename the file "example.env" to ".env"
- Create an account or login in MongoDB Atlas https://www.mongodb.com/atlas/database
- Create a Cluster
- Connect to your cluster using the "Connect your application" option
- Go to "Database Access" and create a user and password for your cluster
- Go to "Network Access" and allow your current ip address
- In the ".env" file, paste: mongodb+srv://{username}:{password}@users.o9xmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
- Change {username} to your cluster's username and {password} to your cluster's password \
Example: mongodb+srv://myclusterusername:myclusterpassword@users.o9xmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
- In the terminal, run "node app.js" and wait until the connection to DB is finished
- You can use postman, insomnia or any other API test software to make requests
- You can first try to do a GET request to http://localhost:3333/posts, you must be logged to get success on this request
- To register an user, make a POST request to http://localhost:3333/users/register, the request body should contain a JSON in the following structure:
{
        "name": "Example Example",
        "email": "example@eg.com",
        "password": "123456eg" ,
        "cep": "12345678",
        "uf": "EG",
        "city": "Example City",
        "street": "Example"
} \
(the fields cep and uf are commonly used in some south america countries for geography location purposes, cep can be filled with 8 numbers and uf with 2 letters) \
Now this user should be registred in your DB
- To login, make a POST request to http://localhost:3333/users/login, the request body should contain a JSON with a registred user informations in the following structure:
{
        "email": "example@eg.com",
        "password": "123456eg"
} \
You should recive a cookie with your auth token, now you can make a GET request to http://localhost:3333/posts
