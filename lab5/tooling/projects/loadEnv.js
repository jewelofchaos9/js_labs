const dotenv = require('dotenv');
const path = require('path');

const loadEnv = (env) => {
  const envPath = path.resolve(process.cwd(), `${env}.env`);
  const result = dotenv.config({ path: envPath });

  if (result.error) {
    throw result.error;
  }
};

module.exports = loadEnv;
