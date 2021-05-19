var express = require('express');
var router = express.Router();
var UserHandler = require('../controllers/users.controllers');

router.post('/register', async (req, res, next) => {
    let Userregister = await UserHandler.Signup(req.body);

    if (!Userregister.status) return res.status(400).json(Userregister);

    res.status(200).json(Userregister)
});

//login
router.post('/login', async (req, res, next) => {
    let isLogin = await UserHandler.login(req.body.phone, req.body.password);

    if (!isLogin.status) return res.status(400).json(isLogin);

    res.status(200).json(isLogin)
});
//view delivery person
router.get('/view', async (req, res, next) => {
    let ViewDeliveryPerson = await UserHandler.ViewDeliveryperson();

    if (!ViewDeliveryPerson.status) return res.status(400).json(ViewDeliveryPerson);

    res.status(200).json(ViewDeliveryPerson)
});


       module.exports = router;