

var app = new Vue({
  el: '#app',
  data: {
    info:'',
    selectedItems:[],
    
  },
  mounted () {
    
    axios
    .get('http://api.myjson.com/bins/61ksm')
    .then(response => (this.info = response.data))
    
    
    
  },
  methods:{
    getItem(item){

      //SOME STACKOVERFLOW FUNCTION I DONT UNDERSTAND
      function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
      }
      
      var ul = document.getElementById('burger');
      ul.onclick = function(event) {
        var target = getEventTarget(event);
        alert(target.innerHTML);
      };
    }
  }
});


//api http://api.myjson.com/bins/61ksm
// [{"CAL":"740","FAT":"41","SFAT":"16","TFAT":"1.5","CHOL":"125","SALT":"1480","CARB":"51","FBR":"4","SGR":"14","PRO":"40","ITEM":"Bacon Clubhouse Burger 9.7 oz (274 g)","CATEGORY":"BURGERSANDWICH"},
// m4pk6