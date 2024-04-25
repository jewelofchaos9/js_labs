const axios = require('axios');

axios.get('https://vk.com')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There has been a problem with your axios operation:', error);
});
