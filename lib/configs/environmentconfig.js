export class EnvironmentConfig{


    /**
     * The function returns the base URL from the Cypress environment variables.
     * @returns The value of the "baseUrl" environment variable.
     */
    static getBaseUrl(){

        return Cypress.env("baseUrl");
    }

    /**
     * The function `getUsername` returns the value of the `username` environment variable in Cypress.
     * @returns The value of the "username" environment variable.
     */
    static getUsername(){

        return Cypress.env("username");
    }

    /**
     * The function `getPassword` returns the password stored in the Cypress environment variables.
     * @returns The password value stored in the Cypress environment variables.
     */
    static getPassword(){

        return Cypress.env("password");
    }
}