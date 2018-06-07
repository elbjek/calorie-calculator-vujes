'use strict';

var app = new Vue({
  el: '#app',
  data: {
    info: '',
    selectedItems: [],
    show: false,
    burgers: false,
    sandwich: false,
    salad: false,
    snacks: false,
    drinks: false,
    cafe: false
  },

  mounted: function mounted() {
    var _this = this;

    axios.get('http://api.myjson.com/bins/61ksm').then(function (response) {
      return _this.info = response.data;
    });
  },

  computed: {
    totalCalorie: function totalCalorie() {
      var result = 0;
      for (var i = 0; i < this.selectedItems.length; i++) {
        result += parseInt(this.selectedItems[i].cal);
      };
      return result;
    },
    totalCarbs: function totalCarbs() {
      var result = 0;
      for (var i = 0; i < this.selectedItems.length; i++) {
        result += parseInt(this.selectedItems[i].carb);
      };
      return result;
    },
    totalProtein: function totalProtein() {
      var result = 0;
      for (var i = 0; i < this.selectedItems.length; i++) {
        result += parseInt(this.selectedItems[i].pro);
      };
      return result;
    },
    totalSugar: function totalSugar() {
      var result = 0;
      for (var i = 0; i < this.selectedItems.length; i++) {
        result += parseInt(this.selectedItems[i].sgr);
      };
      return result;
    }
  },

  methods: {
    addItems: function addItems(item) {
      console.log(this.info);
      //GET SELECTED ITEM
      this.show = true;
      var index = this.info.indexOf(item);
      for (var i = 0; i < this.info.length; i++) {
        var clickedItem = this.info[index].ITEM;
        if (this.info[i].ITEM === clickedItem) {
          // ADD ITEM TO THE SELECTED ITEMS ARRAY
          this.selectedItems.push({
            name: this.info[index].ITEM,
            cal: this.info[index].CAL,
            carb: this.info[index].CARB,
            pro: this.info[index].PRO,
            sgr: this.info[index].SGR,
            sfat: this.info[index].SFAT,
            tfat: this.info[index].TFAT,
            cat: this.info[index].CATEGORY
          });
          console.log(this.selectedItems);
          //delete duplicates
          this.selectedItems = this.selectedItems.from(new Set(item));
          return selectedItems;
        }
      }
    },
    removeItems: function removeItems(item) {
      console.log("radi");
      var index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index, 1);
    },
    showBurgers: function showBurgers() {
      // this.burgers=true;
      return this.burgers ? this.burgers = false : this.burgers = true;
    },
    showSandwich: function showSandwich() {
      return this.sandwich ? this.sandwich = false : this.sandwich = true;
    },
    showSalad: function showSalad() {
      return this.salad ? this.salad = false : this.salad = true;
    },
    showSnack: function showSnack() {
      return this.snacks ? this.snacks = false : this.snacks = true;
    },
    showDrinks: function showDrinks() {
      return this.drinks ? this.drinks = false : this.drinks = true;
    },
    showCafe: function showCafe() {
      return this.cafe ? this.cafe = false : this.cafe = true;
    }
  }
});