# Atix Weather

## Goal

To create a JSON REST endpoint at /weather that receives a location code and
returns true if the location's temperature will increase or not.

To do so you can GET the data from a public weather API service. Then, you should
calculate the linear regression and if the gradient is > 0 the temperature we can
say that temperatures are increasing.

## API Services

http://openweathermap.org/forecast5

## Endpoint example

http://localhost:8080/weather?loc=Buenos+Aires,AR

Re response should be like: `{ result: false }`

## Scripts

- `npm start`: runs the application
- `npm test`: runs test.js tests

## Tips

- NVM
- NPM npmjs.org
- Superagent
- Restify
- Linear Regression ( https://github.com/Tom-Alexander/regression-js )
- Add as many as tests as you think
