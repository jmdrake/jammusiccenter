function btnRegister(){
  var userinfo = inputs2json($("#frmRegister"));
  register(userinfo, function(results){
    if(results=="ok") {
      clearform($("#frmRegister"));
      window.location = "index.html";
    } else {
      console.log(results);
      alert(results);
    }
  })
}