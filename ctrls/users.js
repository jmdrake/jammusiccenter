function register(userinfo, callback){
  $.post("../ctrls/php/register.php", userinfo, function (results) {        
    callback (results);
  })
}

function login(logininfo, callback) {
  $.post("../ctrls/php/login.php", logininfo, function(results) {
    callback (results);
  })
}

function logout(callback) {
  $.get ("../ctrls/php/logout.php", function(results) {
    callback (results);
  })
}

function getCurrentUserInfo(callback) {
  $.get ("../ctrls/php/getCurrentUserInfo.php", function(results) {
    callback (JSON.parse(results)[0]);
  })  
}