document.addEventListener("DOMContentLoaded", function() {
  const conteinerForm = document.querySelector(".conteiner");
  if (conteinerForm) {
    setTimeout(function() {
      conteinerForm.classList.add("mostrar");
    }, 200);
  }
});

function getParameters() {

    var params    = new Array();
    var paramsRet = new Array();
    var url = window.location.href;     // Obtém a URL
    var paramsStart = url.indexOf("?"); // Procura ? na URL
 
    if (paramsStart !== -1) {
      var paramString = url.substring(paramsStart + 1);
      paramString = decodeURIComponent(paramString);
      var params = paramString.split("&");
  
      for (var i = 0; i < params.length; i++) {
        var pairArray = params[i].split("=");
        if (pairArray.length === 2) {
          var key = pairArray[0];
          var value = pairArray[1];
  
          if (key !== "agree-term") {
            paramsRet[key] = value;
          }
        }
      }
  
      return paramsRet;
    }
  
    return null;
 }