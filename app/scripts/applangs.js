/*!
 This file is part of DecSoft App Builder.
 Visit our website for license information.
 Copyright ©2020 DecSoft. All rights reserved.
 Visit our website at: https://www.davidesperalta.com
 */

window.appLangs = [];

window.appLangs["es"] = {

  language: {
    name: "Spanish"
  },

  resources: {
    vermas: function(id){
if(id=="mas"){
document.getElementById("desplegar").style.display="block";
document.getElementById("mas").style.display="none";
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
}
  },
  sidebar: {
    items: []
  }
};
// End of window.appLangs["es"] = {
