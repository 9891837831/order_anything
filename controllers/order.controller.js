const Products= require('../models/products.model');
const Orders= require('../models/order.model');
const User= require('../models/users.models');

var mongoose = require('mongoose');

module.exports = {

    CreateOrder: async (input) => {
        console.log("===",input)
        return new Promise(async (resolve) => {
            try {

                Products.findOne({
                    _id: input._id
                }, async (err, data) => {

                    if (err) resolve({
                        status: false,
                        message: 'failed'
                    })
   
                    var newOrders = new Orders({
                      items:[
                          {
                              product_name:data.products.product_name,
                              quantity:input.quantity
                          }
                      ],
                      customerId:new mongoose.Types.ObjectId(),
                      PickupLocation:data.products.Addresses[0].Loc1
                    });
                    newOrders.save(async (error, orders) => {
                        if (error) resolve({
                            status: false,
                            message: 'failed'
                        })
                       
                        resolve({
                            status: true,
                            data: orders,
                            message: 'Sucess',

                        })
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

    //view all orders
    ViewOrders: async () => {
        return new Promise(async (resolve) => {
            try {
                Orders.find(async (err, Data) => {
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
    AssignOrder: async (input) => {
        console.log("===",input)
        return new Promise(async (resolve) => {
            try {

                Orders.findOne({
                   _id: input._id
                }, async (err, data) => {

                    if (err) resolve({
                        status: false,
                        message: 'failed'
                    })
             data.Delivery_person_id=input.Delivery_person_id
                   
                    data.save(async (error, order) => {
                        if (error) resolve({
                            status: false,
                            message: 'failed'
                        })
                       
                        resolve({
                            status: true,
                            data: order,
                            message: 'Sucess',

                        })
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

    UpdateOrderStatus: async (input) => {
        console.log("===",input)
        return new Promise(async (resolve) => {
            try {

                Orders.findOne({
                   _id: input._id
                }, async (err, data) => {

                    if (err) resolve({
                        status: false,
                        message: 'failed'
                    })
             data.order_status=input.order_status
                   
                    data.save(async (error, order) => {
                        console.log("++",error)
                        if (error) resolve({
                            status: false,
                            message: 'failed'
                        })
                       
                        resolve({
                            status: true,
                            data: order,
                            message: 'Sucess',

                        })
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
    
}