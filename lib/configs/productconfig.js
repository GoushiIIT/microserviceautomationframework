

    /* The code block you provided is defining a static property called `ApplicationRoutes` within the
    `ProductConfig` class. This property is an object that contains key-value pairs. */
   export const ApplicationRoutes = {

        "customer" : "CustomerDetail",
        "order" : 
        {
            "default": "OrderDetail",
            "orderStatus": "/api/v1/GetOrderStatus"
        },
        "payment" : "Payment"
    }


