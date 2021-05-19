const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const secret = 'hdaiu$$^%67777siojvIIUfbvheiruejwrkekdmfvdnahsrfw8urewriwjUTYt$@#@R^ewuu'





//Routes for the API
const UserRouter = require('./routes/user.routes')
const ProductRouter = require('./routes/products.routes')
const OrderRouter = require('./routes/order.routes')


//DATABASE CREDENTIALS
const connectionString ="mongodb+srv://testconnection:shubham810@cluster0.0qjbt.mongodb.net/OrderDatabase?retryWrites=true&w=majority" ;
mongoose.Promise = global.Promise;
mongoose
    .connect(
        connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,

        }
    )
    .then(
        () => {
            console.log("Mongodb is connected");
        },
        err => {
            console.log("Cannot connect to the mongodb" + err);
        }
    );


app.use(express.json({
    limit: '100mb'
}));



app.use(express.urlencoded({
    extended: false,
    limit: '100mb',
}));


app.use('/user', UserRouter);
app.use('/product', ProductRouter);
app.use('/cart', OrderRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});


app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send(err.message);
});



app.listen(4000, () => {
    console.log(`Express app listening on 4000`);
});