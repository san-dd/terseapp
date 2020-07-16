var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


var indexRouter = require('./routes/index');
var walletroute = require('./routes/walletroute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//login api
app.use('/', indexRouter);
app.use('/', walletroute);
// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// router.get('/', function(req, res, next) {
//     if (req.body.username == "admin" && req.body.password == "Admin") {
//         res.render('home', { username: req.body.username });
//     } else {
//         res.redirect('/', { msg: 'Invalid credentials' });
//     }
// });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000, () => {
    console.log("listening on 3000")
})