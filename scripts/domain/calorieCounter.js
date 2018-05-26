
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    info:''
  },
  mounted () {
    axios
      .get('http://api.myjson.com/bins/m4pk6')
      .then(response => (this.info = response.data.mcdonalds))
  }
  
});


//api http://api.myjson.com/bins/61ksm
// [{"CAL":"740","FAT":"41","SFAT":"16","TFAT":"1.5","CHOL":"125","SALT":"1480","CARB":"51","FBR":"4","SGR":"14","PRO":"40","ITEM":"Bacon Clubhouse Burger 9.7 oz (274 g)","CATEGORY":"BURGERSANDWICH"},
// m4pk6