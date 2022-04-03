/*function getValues() {
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
}*/
/*function getValues() {
    fetch('https://login.salesforce.com/services/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: '3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn',
                client_secret: '5CC14D5C61AB61C49E16DE550455A03AFB12B578F88B32D548BD5585F5707E54',
                username: 'dpaolostagno@gmail.com',
                password: 'ArchBash@2022e4P0ast5TIaxNmQgo5r1hO0Mh'
            }),

        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}*/
const getValues = () => {
     return new Promise((resolve, reject) => {
     const queryString = window.location.assign('https://login.salesforce.com/services/oauth2/authorize?client_id=3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn&response_type=code&redirect_uri=https://dinostagno.github.io/App/'); 
     resolve(queryString);
     })
     //console.log(anuncioParam);
     //logUrl(); 
}
getValues().then((queryString) => console.log(queryString))
function logUrl() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var anuncioParam = urlParams.get('code');
  console.log(anuncioParam);
}
//getValues().then((urlReplace) => console.log(urlReplace))

