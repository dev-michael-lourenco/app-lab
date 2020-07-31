# BACKEND
### API BASED ON OMNISTACK 11 OF ROCKETSEAT BR

# REST API example application

This is a bare-bones example of a DEALERSHIP application providing a REST
API to a DataMapper-backed model.


# REST API

The REST API to the example app is described below.

## Get list of USERS

### Request

`GET /users/`

    http://localhost:3333/users/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Users

### Request

`POST /users/`

    {
        "name":"Mario Lourenco",
        "email":"mil@gmail.com",
        "whatsapp":"1595325788",
        "city":"SAQUAREMA",
        "uf":"RJ"	
    }

    http://localhost:3333/users

### Response

    HTTP/1.1 201 Created
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /users/1
    Content-Length: 36

    {"id": "048dea6e"}

## Get a specific Users

### Request

`GET /users/id`

    http://localhost:3333/users/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {
        "id": "048dea6e",
        "name":"Mario Lourenco",
        "email":"mil@gmail.com",
        "whatsapp":"1595325788",
        "city":"SAQUAREMA",
        "uf":"RJ"	
    }

## Get a non-existent Users

### Request

`GET /users/id`

    http://localhost:3333/users/9999

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {
        "name":"Miriam Lourenco",
        "email":"mom@gmail.com",
        "whatsapp":"1595325788",
        "city":"SAQUAREMA",
        "uf":"RJ"	
    }

## Create another new Users

### Request

`POST /users/`

    http://localhost:3333/users

### Response

    HTTP/1.1 201 Created
    Date: Thu, 31 Jul 2020 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /users/2
    Content-Length: 35

    {"id": "838dea5b"}

## Get list of Userss again

### Request

`GET /users/`

    http://localhost:3333/users/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 31 Jul 2020 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [
        {
            "id": "048dea6e",
            "name":"Mario Lourenco",
            "email":"mil@gmail.com",
            "whatsapp":"1595325788",
            "city":"SAQUAREMA",
            "uf":"RJ"	
        },{
            "id": "838dea5b",
            "name":"Miriam Lourenco",
            "email":"mom@gmail.com",
            "whatsapp":"1595325788",
            "city":"SAQUAREMA",
            "uf":"RJ"	
        }
    ]



## Delete a User

### Request

`DELETE /users/id`

    http://localhost:3333/users/1/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 31 Jul 2020 12:36:32 GMT
    Status: 204 No Content
    Connection: close


## Try to delete same Users again

### Request

`DELETE /users/id`

    http://localhost:3333/users/1/

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 31 Jul 2020 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Get deleted Users

### Request

`GET /users/1`

    http://localhost:3333/users/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 31 Jul 2020 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}



