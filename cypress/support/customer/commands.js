import { EnvironmentConfig, ProductConfig } from "../../configs";
import { RequestMethodType, RequestStatusCodes, AuthTypeConstants } from "../../constants";

//Custom Command file for Customer Helper Functions
/// <reference types="cypress" /> 

Cypress.Commands.add('getAllCustomerDetails', () => {

    cy.executeAPIRequest(
        RequestMethodType.Get,
        ProductConfig.ApplicationRoutes.customer,
        null,
        true,
        AuthTypeConstants.BASIC,
        {username: EnvironmentConfig.getUsername(),
        password: EnvironmentConfig.getPassword()}
    ).then(response => {

        expect(response.status).to.eq(RequestStatusCodes.INFO);
        return response;
    });

});

Cypress.Commands.add('getCustomerById', (customerId) => {

    cy.executeAPIRequest(
        RequestMethodType.Get,
        ProductConfig.ApplicationRoutes.customer + "/" + customerId,
        null,
        true,
        AuthTypeConstants.BASIC,
        {username: EnvironmentConfig.getUsername(),
        password: EnvironmentConfig.getPassword()}
    ).then(response => {
        
        expect(response.status).to.eq(RequestStatusCodes.INFO);
        return response;
    });

});

Cypress.Commands.add('createCustomerViaAPI', (customerName, customerAddress) => {

    return cy.executeAPIRequest(
        RequestMethodType.Post,
        ProductConfig.ApplicationRoutes.customer,
        {
                "customerName": customerName,
                "customerAddress": customerAddress
        },
        false,
        AuthTypeConstants.BASIC,
        {username: EnvironmentConfig.getUsername(),
        password: EnvironmentConfig.getPassword()}
    );

});