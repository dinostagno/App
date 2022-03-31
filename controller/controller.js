function getValues() {
  fetch('https://dinostagno-dev-ed.my.salesforce.com/services/apexrest/Accounts/0012E00002e4HURQA2', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 00D2E000000mpVn!ARIAQLsE6bWjWJUgOs1PxuXaj3CUZsh6wXj2tEZ_VLZ0ime7lHkhf7FXunOoDwV0CTSRR5aEPWxUDl31iQVFNcfgKuk9ST2r'
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
