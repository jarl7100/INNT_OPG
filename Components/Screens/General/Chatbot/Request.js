const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://open-ai21.p.rapidapi.com/conversationgpt',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'bcaf8936f1msh77011aedadd187fp1a619fjsnba022f655b69',
    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: 'hello'
      }
    ],
    web_access: false
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}