var express = require('express');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').load();

require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
 
app.use(session({
    secret: 'process.env.SESSION_SECRET',
    store: new MongoStore({ 
      mongooseConnection: mongoose.connection
    }),
  	resave: false,
  	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

require('./routes/static')(app);
require('./routes/api')(app);
require('./routes/auth')(app, passport);

app.use(express.static('build'));

app.use((req, res) => res.redirect('/'));

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server listening at", process.env.IP + ":" + process.env.PORT);
});
