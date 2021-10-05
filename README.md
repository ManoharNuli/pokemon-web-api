# node-api to retrieve Shakespearean description

A node js api for finding Shakespearean description of a pokemon.

## Note

# Third Party APIs used

PokeAPI: [https://pokeapi.co/api/v2/pokemon-species](https://pokeapi.co/api/v2/pokemon-species)
Shakespearean description: [https://funtranslations.com/api/shakespeare](https://funtranslations.com/api/shakespeare)

# Steps to download & build locally

## 1) Clone the repository, install node packages and verify routes locally

```
//on local
git clone https://github.com/ManoharNuli/pokemon-web-api.git
cd pokemon-web
npm install
npm start
```

Open your local browser and verify the sample-node-api is working by accessing:  
`http://localhost:5000/`

`http://localhost:5000/pokemon/charizard`

## Get the Shakespearean description

### Request

`GET /pokemon/:name`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:5000/pokemon/charizard

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 127
    ETag: W/"7f-V7gIlQkwdgjLAxDgDXFbXdVWl1c"
    Date: Tue, 05 Oct 2021 21:08:59 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    { "name": "charizard", "description": "Spits fire yond is hot enow to melt boulders. Known to cause forest fires unintentionally."}

# Server

![Screenshot](/screenshots/PokemonDescriptionAPIServer.PNG)

![Screenshot](/screenshots/PokemonDescriptionAPI.PNG)
