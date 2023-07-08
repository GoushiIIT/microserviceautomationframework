import { EnvironmentConfig } from "../configs";
import { RequestMethodType, AuthTypeConstants } from "../constants";

Cypress.Commands.add('executeAPIRequest', (requestMethodType, route, requestBody, failonstatuscode = true, authType = AuthTypeConstants.NONE, authObject = null) => {

    let authHeaders = {};

    //Create the Authorization Header Based on the AuthType
    if (authType == AuthTypeConstants.BASIC) {

        authHeaders = {
            'Authorization': 'Basic ' + btoa(authObject.username + ":" + authObject.password)
        };

    }
    else if (authType == AuthTypeConstants.BEARER) {

        authHeaders = {
            'Authorization': 'Bearer ' + authType.token
        };

    }

    if (authHeaders != "") {

        return cy.request
            (
                {
                    method: requestMethodType,
                    url: EnvironmentConfig.getBaseUrl() + route,
                    body: requestBody,
                    headers: authHeaders,
                    failOnStatusCode: failonstatuscode
                });
    }
    else {
        return cy.request
            (
                {
                    method: requestMethodType,
                    url: EnvironmentConfig.getBaseUrl() + route,
                    body: requestBody,
                    failOnStatusCode: failonstatuscode
                });
    }

});

Cypress.Commands.add("spyRequestOnRedirect", (routetToIntercept, routetoRedirect, interceptAlias = "interceptalias") => {

    //Intercept the request and redirect to the configured URL
    cy.intercept(RequestMethodType.Get, EnvironmentConfig.getBaseUrl() + routetToIntercept
        , (req) => {
            req.continue(res => {
                res.headers.location = EnvironmentConfig.getBaseUrl() + routetoRedirect
            })
        }).as(interceptAlias);
})


Cypress.Commands.add("getData", filePath => {

    const decryptPath = filePath.replace("enc", "json")

    //Get the file decrypted using private key
    cy.exec("openssl pkeyutl -decrypt -inkey mykey.pem -in " + filePath + "> " + decryptPath);

    //return the decrypted file
    cy.readFile(decryptPath).then(fixtureData => {

        return fixtureData;
    })
})