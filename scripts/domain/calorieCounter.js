var app = new Vue({
  el: '#app',
  data: {
    info:'',
    selectedItems:[],
    show:false,
    burgers:false,
    sandwiches:false,
    cafe:false
  },
  
  mounted () { 
    axios
    .get('http://api.myjson.com/bins/61ksm')
    .then(response => (this.info = response.data))

  },
  computed:{
    totalCalorie(){
      var result = 0;
      for(var i =0; i<this.selectedItems.length; i++){
        result += parseInt(this.selectedItems[i].cal)
      };
      return result;

    },
    totalSugar(){
      var result = 0;
      for(var i =0; i<this.selectedItems.length; i++){
        result += parseInt(this.selectedItems[i].sgr)
      };
      return result;

    }
  },
 
  methods:{
    addItems(item){
      console.log(this.info)
      //GET SELECTED ITEM 
      var index = this.info.indexOf(item);
      for( var i=0;i<this.info.length; i++){
        var clickedItem = this.info[index].ITEM;
        if(this.info[i].ITEM === clickedItem){
        // ADD ITEM TO THE SELECTED ITEMS ARRAY
          this.selectedItems.push({
            name: this.info[index].ITEM,
            cal: this.info[index].CAL,
            carb: this.info[index].CARB,
            pro: this.info[index].PRO,
            cat: this.info[index].CAT,
            sgr:this.info[index].SGR
          });
          //delete duplicates
          this.selectedItems = this.selectedItems.from(new Set(item))
          return selectedItems
        }
      }      
    },
    removeItems(item){
      console.log("radi")
      var index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index,1);
    },

    showBurgers(){   
      this.burgers=true;
    },
    showCafe(){
      this.cafe=true;
    }
    
  }
});


//api http://api.myjson.com/bins/61ksm
// [{"CAL":"740","FAT":"41","SFAT":"16","TFAT":"1.5","CHOL":"125","SALT":"1480","CARB":"51","FBR":"4","SGR":"14","PRO":"40","ITEM":"Bacon Clubhouse Burger 9.7 oz (274 g)","CATEGORY":"BURGERSANDWICH"},
// m4pk6