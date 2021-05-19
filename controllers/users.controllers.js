const User = require('../models/users.models');
const PasswordHandler = require('../utils/password.handler');
const JWTHandler = require('../utils/jwt.handler');
const EncryptPassword = require('../utils/password.handler');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const secret = 'hdaiu$$^%67777siojvIIUfbvheiruejwrkekdmfvdnahsrfw8urewriwjUTYt$@#@R^ewuu'


module.exports = {

    //Signup new user
    Signup: async (userInfo) => {
        return new Promise(async (resolve) => {
            try {
                let encryptedPassword = await EncryptPassword.encryptPassword(userInfo.password)
                if (!encryptedPassword) {
                    resolve({
                        status: false,
                        message: 'Please try after some time'
                    })
                }
                User.findOne({
                    phone: userInfo.phone
                }, async (err, data) => {
                    if (err) resolve({
                        status: false,
                        message: 'failed'
                    })
                    if (data) resolve({
                        status: false,
                        message: 'Email is already used'
                    })
                    var newUser = new User({
                        fname: userInfo.fname,
                        lname: userInfo.lname,
                        phone: userInfo.phone,
                        password: encryptedPassword,
                        Usertype: userInfo.Usertype
                    });
                    newUser.save(async (error, user) => {
                        if (error) resolve({
                            status: false,
                            message: 'Please try after some time'
                        })
                       
                        resolve({
                            status: true,
                            data: user,
                            message: 'You are registered',

                        })

                    });
                });
            } catch (error) {
                resolve({
                    status: false,
                    message: 'Please try after some time'
                });
            }
        })
    },

    //login
    login: async (phone, password) => {
        return new Promise(async (resolve) => {
            try {
                User.findOne({
                    phone: phone
                }, async (err, data) => {
                    console.log(err)
                    console.log(data)
                    if (err) resolve({
                        status: false,
                        message: 'Please try after some time'
                    });
                    if (!data) resolve({
                        status: false,
                        message: 'You are not registered!',
                    })
                    let isValidPassword = await PasswordHandler.checkPassword(password, data.password);
                    if (!isValidPassword) resolve({
                        status: false,
                        message: 'Wrong password!'
                    })
                    let token = await JWTHandler.signToken(data);
                    resolve({
                        status: true,
                        message: 'Success!',
                        data: data,
                        token: token
                    })
                });
            } catch (error) {
                resolve({
                    status: false,
                    message: 'Please try after some time'
                });
            }
        })
    },
   //view all delivery person
   ViewDeliveryperson: async () => {
    return new Promise(async (resolve) => {
        try {
            User.find({Usertype:"DeliveryPerson"} ,async (err, Data) => {
                if (err) resolve({
                    status: false,
                    message: 'Please try again'
                })
                resolve({
                    status: true,
                    message: 'success',
                    data: Data
                })
            }).sort('-createdAt')
        } catch (error) {
             resolve({
                status: false,
                message: 'Please try after some time'
            });
        }
    })
},

}