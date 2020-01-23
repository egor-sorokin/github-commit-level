## How to run the app
```
yarn install
yarn start
```
or 
```
npm install
npm start
```
App will be started on http://localhost:8888/.

## API
`API_DOCS.md` is used for documenting API endpoints.

## To run front end separately
Navigate to 'frontend' directory and check out **README.md** file there. 

## Possible problems
The amount of non-authenticated requests are limited by GitHub,
 to increase this number you need to open `src/routes/stats.js` find line with `conts oauth = ''`
  and put your credentials there, details: https://developer.github.com/v3/#oauth2-keysecret 
  or use other approaches described there.
