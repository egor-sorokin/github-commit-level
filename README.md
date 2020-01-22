## How to run server
```
yarn install
yarn start
```
or 
```
npm install
npm start
```
Server will be started on 'http://localhost:8888/'

## API
`API_DOCS.md` is used for documenting API endpoints 

## To run front end
Navigate to 'frontend' directory and check out **README.md** file there. 

## Possible problems
Amount of non-authenticated requests are limited by github,
 to increase this number you need to open `src/routes/stats.js` find line with `conts oauth = ''`
  and put your credentials there, details: https://developer.github.com/v3/#oauth2-keysecret. 
