function getValues() {
  fetch('https://dinostagno-dev-ed.my.salesforce.com/services/apexrest/Accounts/0012E00002e4HURQA2', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 00D2E000000mpVn!ARIAQIBNvPOAxQMeDu6yC_ovxUjqYMkli_h34KOfuoJ69Nbxmctyh5orgmF4UhUK9yqHJjFsnrrvJFZWVFRjsJXjUpPfQQ7t'
    },

  })
    .then(function(response) {
    console.log('response =', response);
    return response.json();
  })
    .then(function(data) {
    console.log('data = ', data);
  })
    .catch(function(err) {
    console.error(err);
  });
}
