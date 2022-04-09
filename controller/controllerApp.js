function gettoken()
{
    var param = {
      grant_type: "password",
      client_id : "3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn",
      client_secret : "5CC14D5C61AB61C49E16DE550455A03AFB12B578F88B32D548BD5585F5707E54",
      username:"dpaolostagno@gmail.com",
      password:"ArchBash@2022e4P0ast5TIaxNmQgo5r1hO0Mh"};
$.ajax({
    url: 'https://login.salesforce.com/services/oauth2/token',
    type: 'POST',
    data: param,
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
    success: function (data) {
        alert(data);
    }

});
}