import { ApplicationRoutes } from "../../configs";
import { RequestMethodType, RequestStatusCodes } from "../../constants";

Cypress.Commands.add('createOrderViaAPI', (customerId, datePlaced = "2023-01-01") => {

    return cy.executeAPIRequest(
        RequestMethodType.Post,
        ApplicationRoutes.order.default,
        {
            "customerId": customerId,
            "datePlaced": datePlaced
        },
        false
    );

});

Cypress.Commands.add('getOrderByCustomerId', (customerId) => {

    cy.executeAPIRequest(
        RequestMethodType.Get,
        ApplicationRoutes.order.default + "/" + customerId,
        null
    ).then(response => {

        expect(response.status).to.eq(RequestStatusCodes.INFO);
        return response;
    });

});
