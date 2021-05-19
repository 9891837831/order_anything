const Products= require('../models/products.model');


module.exports = {

    Addproducts: async (input) => {
        console.log("===",input)
        return new Promise(async (resolve) => {
            try {
                
            for(i=0;i<input.products.Addresses.length;i++){
                    var newproducts = new Products({
                        products:
                            {
                                product_name:input.products.product_name,
                                category_name:input.products.category_name,
                                Addresses:[
                                    {
                                        Loc1:input.products.Addresses[i].Loc1,
                                        Loc2:input.products.Addresses[i].Loc2
                                    }
                                ]
                            }
                        
                    });
                    newproducts.save(async (error, products) => {
                        if (error) resolve({
                            status: false,
                            message: 'failed'
                        })
                       
                        resolve({
                            status: true,
                            data: products,
                            message: 'Sucess',

                        })

                    });
                }
            } catch (error) {
                resolve({
                    status: false,
                    message: 'Please try after some time'
                });
            }
        })
    },

    
   
}