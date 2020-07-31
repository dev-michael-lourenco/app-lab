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




## Get list of DEALERSHIPS

### Request

`GET /dealerships/`

    http://localhost:3333/dealerships/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Dealerships

### Request

`POST /dealerships/`

{
	"name":"BASE SOROCABA",
	"phoneNumber":"21557777",
	"email":"saquabase@gmail.com",
	"latitude":"26.330",
	"longitude":"46.4458", 
	"country":"Brasil", 
	"countryCode":"055",
	"city":"SOROCABA",
	"zipcode":"21800250",
	"streetName":"Rua Olimpio da Silva",
	"streetNumber":"28"
}

    http://localhost:3333/dealerships

### Response

    HTTP/1.1 201 Created
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /dealerships/1
    Content-Length: 36

    {"id": "1"}

## Get a specific Dealerships

### Request

`GET /dealerships/id`

    http://localhost:3333/dealerships/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    [
    {
        "id": 2,
        "name": "Mario Lourenco",
        "email": "mil@gmail.com",
        "phoneNumber": "21557777",
        "latitude": "26.330",
        "longitude": "46.4458",
        "country": "Brasil",
        "countryCode": "055",
        "city": "SAQUAREMA",
        "zipcode": "21800250",
        "streetName": "Rua Olimpio da Silva",
        "streetNumber": "28",
        "user_id": "048dea6e",
        "whatsapp": "1595325788",
        "uf": "RJ"
    }
    ]

## Get a non-existent Dealerships

### Request

`GET /dealerships/id`

    http://localhost:3333/dealerships/9999

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 31 Jul 2020 16:40:30 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35
{
	"name":"BASE SAQUAREMA",
	"phoneNumber":"22155766",
	"email":"saquabase@gmail.com",
	"latitude":"26.330",
	"longitude":"46.4458", 
	"country":"Brasil", 
	"countryCode":"055",
	"city":"SAQUAREMA",
	"zipcode":"22180050",
	"streetName":"Rua JOSE Olimpio da Silva",
	"streetNumber":"58"
}

## Create another new Dealerships

### Request

`POST /dealerships/`

    http://localhost:3333/dealerships

### Response

    HTTP/1.1 201 Created
    Date: Thu, 31 Jul 2020 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /dealerships/2
    Content-Length: 35

    {"id": "2"}

## Get list of Dealershipss again

### Request

`GET /dealerships/`

    http://localhost:3333/dealerships/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 31 Jul 2020 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [
        {
        "id": 1,
        "name": "Mario Lourenco",
        "email": "mil@gmail.com",
        "phoneNumber": "21557777",
        "latitude": "26.330",
        "longitude": "46.4458",
        "country": "Brasil",
        "countryCode": "055",
        "city": "SAQUAREMA",
        "zipcode": "21800250",
        "streetName": "Rua Olimpio da Silva",
        "streetNumber": "28",
        "user_id": "048dea6e",
        "whatsapp": "1595325788",
        "uf": "RJ"
        },{
        "id":2,
        "name":"BASE SAQUAREMA",
        "phoneNumber":"22155766",
        "email":"saquabase@gmail.com",
        "latitude":"26.330",
        "longitude":"46.4458", 
        "country":"Brasil", 
        "countryCode":"055",
        "city":"SAQUAREMA",
        "zipcode":"22180050",
        "streetName":"Rua JOSE Olimpio da Silva",
        "streetNumber":"58"
        }
    ]



## Delete a Dealership

### Request

`DELETE /dealerships/id`

    http://localhost:3333/dealerships/1/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 31 Jul 2020 12:36:32 GMT
    Status: 204 No Content
    Connection: close


## Try to delete same Dealerships again

### Request

`DELETE /dealerships/id`

    http://localhost:3333/dealerships/1/

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 31 Jul 2020 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Get deleted Dealerships

### Request

`GET /dealerships/1`

    http://localhost:3333/dealerships/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 31 Jul 2020 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}



