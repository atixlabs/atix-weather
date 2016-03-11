# Atix Weather

## Goal

To create a JSON REST endpoint at /weather that receives a location code and returns true if the location's temperature will increase or not. 

## API Services

http://openweathermap.org/forecast5

## Endpoint example

http://localhost:8080/weather?loc=Buenos+Aires,AR

Re response should be like: `{ result: false }`

## Scripts

- `npm start`: runs the application
- `npm test`: runs test.js tests

## Tips

- NPM npmjs.org
- Superagent
- Restify
- Add as many as tests as you think
