export const /* `RequestMethodType` is an object that defines different types of HTTP request methods. It
includes methods such as GET, POST, and PATCH. */
RequestMethodType = {

    Get: "GET",
    Post: "POST",
    Patch: "PATCH"

}

export const /* `RequestStatusCodes` is an object that defines different status codes that can be returned in
a HTTP response. It includes status codes such as INFO (200), REDIRECT (302), ERROR (500), and
UNAUTHORIZED (401). */
RequestStatusCodes = {

    INFO: 200,
    REDIRECT: 302,
    ERROR: 500,
    UNAUTHORIZED: 401

}

export const /* `AuthTypeConstants` is an object that defines different types of authentication methods that
can be used in a HTTP request. It includes constants such as `BASIC`, `BEARER`, and `NONE`.
These constants can be used to specify the type of authentication required for a particular
request. */
AuthTypeConstants = {

    BASIC: "basicAuth",
    BEARER: "bearer",
    NONE: "noAuth"
}

export default {RequestMethodType, RequestStatusCodes, AuthTypeConstants}
