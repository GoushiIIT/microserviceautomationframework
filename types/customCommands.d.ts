declare namespace Cypress {
    interface Chainable<Subject> {

        /**
         * @description This command helps to execute API Requests
         * @param requestMethodType Any RequestMethodType Constants
         * @param route Route of the Request
         * @param requestBody Body of the Request
         * @param failonstatuscode true/ false
         * @param authType Any AuthType Constants
         * @param authObject if Basic AuthType, {username: <username>, password: <password>}. If Bearer { token: <bearer token>}
         */
        executeAPIRequest(requestMethodType: any, route: any, requestBody: any, failonstatuscode?: boolean, authType?: any, authObject?: any): Chainable<any>
        
        /**
         * @description This command helps to spy on any redirection
         * @param routetToIntercept Route to Intercept
         * @param routetoRedirect Route to redirect the response
         * @param interceptAlias simple name to identify the intercept call
         */
        spyRequestOnRedirect(routetToIntercept: any, routetoRedirect: any, interceptAlias?: string): Chainable<any>

        /**
         * @description This command helps to get data from a .enc file 
         * @param filePath path of the file
         */
        getData(filePath: any): Chainable<any>

        /**
         * @description This command helps to get the data of all the customers
         */
        getAllCustomerDetails(): Chainable<any>

        /**
         * @description This command helps to get the data of a specific customer
         * @param customerId id of the customer
         */
        getCustomerById(customerId: any): Chainable<any>

        /**
         * @description This command helps to create a customer
         * @param customerName name of the customer
         * @param customerAddress address of the customer
         */
        createCustomerViaAPI(customerName: any, customerAddress: any): Chainable<any>

        /**
         * @description This command helps to create an order
         * @param customerId id of the customer
         * @param datePlaced date in yyyy-mm-dd format of when the order was placed
         */
        createOrderViaAPI(customerId: any, datePlaced?: string): Chainable<any>

        /**
         * @description This command helps to get the order based on customer id
         * @param customerId id of the customer
         */
        getOrderByCustomerId(customerId: any): Chainable<any>
  }
}