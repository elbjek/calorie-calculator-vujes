var app = new Vue({
  el: '#app',
  data: {
    info:'',
    selectedItems:[],
    show:false,
    burgers:false,
    sandwich:false,
    salad:false,
    snacks:false,
    drinks:false,
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
    totalCarbs(){
      var result = 0;
      for(var i =0; i<this.selectedItems.length; i++){
        result += parseInt(this.selectedItems[i].carb)
      };
      return result;

    },
    totalProtein(){
      var result = 0;
      for(var i =0; i<this.selectedItems.length; i++){
        result += parseInt(this.selectedItems[i].pro)
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
      this.show=true; 
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
            sgr:this.info[index].SGR,
            sfat:this.info[index].SFAT,
            tfat:this.info[index].TFAT,
            cat:this.info[index].CATEGORY
          });
          console.log(this.selectedItems)
          //delete duplicates
          this.selectedItems = this.selectedItems.from(new Set(item))
          return selectedItems;
          
        }
      }      
    },
    removeItems(item){
      console.log("radi")
      var index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index,1);
    },

    showBurgers(){   
      // this.burgers=true;
    return  this.burgers ? this.burgers = false : this.burgers = true;
    },

    showSandwich(){
    return  this.sandwich ? this.sandwich = false : this.sandwich = true;
    },
    showSalad(){
    return  this.salad ? this.salad = false : this.salad = true;
    },
    showSnack(){
    return  this.snacks ? this.snacks = false : this.snacks = true;
    },
    showDrinks(){
    return  this.drinks ? this.drinks = false : this.drinks = true;
    },
    showCafe(){
    return  this.cafe ? this.cafe = false : this.cafe = true;
    }
  }
});
