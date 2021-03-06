Overview
--------
This project provides an Incident Response Map. The project took about 8 hours and it is functional. More enrichment data could be added, and there are various TODO items in the code to improve.

Screenshots
-----------

![IncidentResponse1](https://github.com/axs221/incident-enrichment/blob/master/public/IncidentResponse1.png)
![IncidentResponse2](https://github.com/axs221/incident-enrichment/blob/master/public/IncidentResponse2.png)

Future Enhancements
-------------------
* Implement SearchBox.
* Use MarkerClusterer to group incidents when zoomed out.
* Show vehicles (apparatus) on map for selected incident.
* Show directions with DirectionsRenderer for vehicles to incident.

TODOs and Minor Improvements
------------
* Don't fetch enrichment data until after a marker is clicked.
* Set zoom level on start based on incidents available, make sure all are visible.
* Add vehicle response information.
* Add more weather information and weather icons.
* Use MarkerWithLabel or other overlays to put most important information on map.
* Handle bad data and large datasets.
* Improve styling and branding.
* Limit CORS settings.
* Filtering.
* Unit testing.
* Clean up code. Fix inconsistent file naming conventions.
* Other TODOs found in the code.

Installation
------------
* Create both config.json files below.
* Ensure ports 3000 (web/src) and 8000 (api) are open
* `yarn install` in the api folder
* `yarn start` in the api folder
* `yarn install` in the src folder
* `yarn start` in the src folder
* Open http://localhost:3000/

src/config/config.json
----------------------

```
{
  "api": {
    "uri": "localhost",
    "port": "8000"
  }
}
```

api/config/config.json
----------------------

```
{
  "darkSkySecretAccessKey": "yourDarkSkySecretAccessKey"
}
```
