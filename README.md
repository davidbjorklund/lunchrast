# Lunchrast V5
Lunchrast is a web application made for the students of the Stockholm high school Värmdö Gymnasium. It is essentially a custom map that displays all the possible restaurants where they can eat their free lunch.

The app in it's current version is deployed and hosted at [lunchrast.nu](https://lunchrast.nu).

## For Developers
Project requires a mapbox accesstoken to run. This token should be placed in a dotenv file in the /src/ folder named ".env". Inside you need to set the environment variable REACT_APP_MAPBOX_KEY to the value of the mapbox api key.

To run the app you need node and npm installed and the following command from the terminal will start the application locally: "npm start".