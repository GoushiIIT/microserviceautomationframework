const RequestMethodType = {

    Get: "GET",
    Post: "POST",
    Patch: "PATCH"

}

const RequestStatusCodes = {

    INFO: 200,
    REDIRECT: 302,
    ERROR: 500,
    UNAUTHORIZED: 401

}

const AuthTypeConstants = {

    BASIC: "basicAuth",
    BEARER: "bearer",
    NONE: "noAuth"
}

export default {RequestMethodType,RequestStatusCodes, AuthTypeConstants}
