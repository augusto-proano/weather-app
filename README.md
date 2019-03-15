# Weather App
### Retrieve the most updated weather forecast, just enter your city or your zipcode
## How to run App
### macOS
1. Click the clone or download and copy the link below
2. In your command line type git clone https://github.com/augusto-proano/weather-app.git
3. Type cd weather-app
4. Type npm i   //to install all dependencies
5. Type npm run start   //to build the client bundle files and start the server
6. Finally go to http://localhost:3000

### Windows
If you are using windows follow this extra step

5. Type npm run build-client   //to build the client bundle files
6. Type npm run start-server   //to start the server
7. Finally go to http://localhost:3000

# Architecture
## Front-End
- **React:** was used to build the UI
- **React-Router-Dom:** it has a collection of navigational components that helped create a SPA and dynamic routing
- **React Context and React Hooks:** a nice state management library like redux could have been used to create a store but since weather-app is a small app with few components, that was accomplished using this tools
- **SASS**: for styling a sassy app something like SASS is needed which is a Imperative CSS precompiler
- **Webpack:** was used to bundled and compiled our client 
- **Babel:** compiled .js and jsx files
- **css-loader, style-loader and sass-loader:** was used to compiled .scss files
- **mini-css-extract-plugin:** was used to extract and create a dedicated css file after compiling
- **axios:** for making AJAX requests this promise based HTTP client for the browser and node.js was used
- **history:** for managing session history
