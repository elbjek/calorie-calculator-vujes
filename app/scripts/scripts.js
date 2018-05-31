'use strict';

var app = new Vue({
  el: '#app',
  data: {
    info: '',
    selectedItems: []

  },

  mounted: function mounted() {
    var _this = this;

    axios.get('http://api.myjson.com/bins/61ksm').then(function (response) {
      return _this.info = response.data;
    }).then(this.loadItems());
  },


  methods: {
    loadItems: function loadItems() {
      console.log("this info sucks");
      console.log(this.info.length);
    },
    addItems: function addItems(item) {
      //GET SELECTED ITEM 
      var index = this.info.indexOf(item);
      for (var i = 0; i < this.info.length; i++) {
        var clickedItem = this.info[index].ITEM;
        if (this.info[i].ITEM === clickedItem) {
          //  console.log(this.info[index].ITEM)
          this.selectedItems.push({
            name: this.info[index].ITEM,
            cal: this.info[index].CAL,
            carb: this.info[index].CARB,
            pro: this.info[index].PRO,
            cat: this.info[index].CAT,
            sgr: this.info[index].SGR
          });
          //delete duplicates
          this.selectedItems = this.selectedItems.from(new Set(item));
          return selectedItems;
        }
      }
    }
  }
});

//api http://api.myjson.com/bins/61ksm
// [{"CAL":"740","FAT":"41","SFAT":"16","TFAT":"1.5","CHOL":"125","SALT":"1480","CARB":"51","FBR":"4","SGR":"14","PRO":"40","ITEM":"Bacon Clubhouse Burger 9.7 oz (274 g)","CATEGORY":"BURGERSANDWICH"},
// m4pk6