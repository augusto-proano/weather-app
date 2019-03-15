# Weather App
### Retrieve the most updated weather forecast, just enter your city or your zipcode
## How to run App
### macOS
1. Click the clone or download and copy the link below
2. In your command line type git clone https://github.com/augusto-proano/weather-app.git
3. Type cd weather-app
4. Type npm i   //install all dependencies
5. Type npm run start   //build client and start server
6. Finally go to http://localhost:3000

### Windows
If you are using windows follow this extra step

5. Type npm run build-client   //build client
6. Type npm run start-server   //start server
7. Finally go to http://localhost:3000

# Architecture
## Front-End
- **react:** framkework to build the UI
- **react-router-rom:** it has a collection of navigational components that creates a SPA and dynamic routing
- **react Context & react Hooks:** a nice state management library like redux could have been used to create a store but since weather-app is a small app with few components, that was accomplished using this tools
- **SASS**: for styling a sassy app something like SASS is needed which is a Imperative CSS precompiler
- **webpack:** bundles and compiles our client 
- **babel:** compiles .js and jsx files
- **css-loader, style-loader & sass-loader:** compiles .scss files
- **mini-css-extract-plugin:** extracts and creates a dedicated css file after compiling
- **axios:** a promise based HTTP client for the browser and node.js for making AJAX requests
- **history:** manages session history

## Back-End
- **node.js & express:** server
- **morgan:** creates logging middleware
- **body-parser:** creates bodyParser middleware
- **jsonwebtoken:** used for authentification
- **zipcodes:** gets a city's name with a given zipcode
- **request-json:** handles HTTP request client for weather API

# Trade-offs
Due to time constraints these are some of the tasks that were left for future improvements
- Even though weather-app is a mobile friendly app, it has a limited screen sizes it can scale to
- weather-app has a lack of unit tests that are planned to be implemented in the near future
