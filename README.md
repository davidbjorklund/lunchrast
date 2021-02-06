# lunchrast
David Björklund

## How To Run The App:
### 1) Install Node and npm (node packet manager)
[Node+npm Official Download](https://nodejs.org/en/download/)

### 2) Mapbox Api Token
* Go to [Mapbox](https://mapbox.com)
  * Create an account
  * Go to your accounts page
  * Create a token
* Create a file called `.env` inside the project folder
  * Add `REACT_APP_MAPBOX_KEY="your_api_token"`
  * Replace `your_api_token` with your own Mapbox Api Token.

### Run Development App
#### 2) Run `npm start` (inside your command prompt)
Go to `localhost:3001` inside your browser.

### Run Production App:

#### 3) Run `npm run build` (inside your command prompt)
Now you have the production section of the project inside the `/build` folder.

You can run the build locally using `serve -s build` inside your command prompt.
