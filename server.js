require('dotenv').config()
const express = require('express'); //from documentation: express is function. express will equal the express framework
const app = express();  //create express object
const methodOverride = require('method-override');  //used for form to be able to delete

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));  //this gives you the body of the request in a 
app.use(methodOverride("_method"));

app.use((req,res,next) => {      //runs on all routes so put it at top
    // console.log(`run for all routes: ${req.method} ${req.url}`);  //simple way to do basic logging
     let logStr= `${req.method} ${req.url}`;
     if(req.body) {
         logStr += ` input data is: ${JSON.stringify(req.body)}`;
     }
     console.log(logStr);
     next();                     //will go on to other routes
 })
 app.use(methodOverride('_method'));
 
 app.get('/', (req, res) => {
     res.render('gardenIndex.ejs', {
 //        users: User
     });
 });


//start at /gardens and tell it to use the gardens controller
app.use('/gardens', require('./controllers/gardensController.js'));
app.use('/seeds', require("./controllers/seedsController.js"));

app.listen(process.env.PORT, ()=>{  //tell it to listen to port in .env
    console.log("I am listening");
});