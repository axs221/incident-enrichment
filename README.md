Installation
------------
* Create both config.json files below.
* Ensure ports 3000 (web/src) and 8000 (api) are open
* `yarn install` in the api folder
* `yarn start` in the api folder
* `yarn install` in the src folder
* `yarn start` in the src folder
* Open http://localhost:3000/

`src/config/config.json`
{
  "api": {
    "uri": "localhost",
    "port": "8000"
  }
}

`api/config/config.json`
{
  "darkSkySecretAccessKey": "yourDarkSkySecretAccessKey"
}
