// app.js
const loadEnv = require('./loadEnv');

if (process.env.NODE_ENV === 'local') {
  loadEnv('local');
} else if (process.env.NODE_ENV === 'development') {
  loadEnv('dev');
} else if (process.env.NODE_ENV === 'production') {
  loadEnv('prod');
}

console.log(process.env.API_URL);
