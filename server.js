const express = require('express'); //from documentation: express is function. express will equal the express framework
const app = express();  //create express object
const methodOverride = require('method-override');  //used for form to be able to delete

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));  //this gives you the body of the request in a 

//start at /gardens and tell it to use the gardens controller
app.use('/gardens', require('./controllers/gardensController.js'));
app.use('/seeds', require("./controllers/seedsController.js"));

app.listen(3000, ()=>{  //tell it to listen to port in .env
    console.log("I am listening");
});