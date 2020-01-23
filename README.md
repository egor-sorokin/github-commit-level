## Description
Based on GitHub username the app shows his/her "Commit level". In general, it counts all commits across all user's repos.
 If there is no such user or an error occurred, the error will be shown.
 
## How to run the app
```
yarn install
cd src/static
yarn install
yarn build-prod
cd ..
yarn start
```
or 
```
npm install
cd src/static
npm install
npm build-prod
cd ..
npm start
```
The second `yarn/npm install` and `yarn/npm build-prod` is related to front end, so there is no need to run it every time.

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
