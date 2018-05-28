'use strict';

Vue.component('tabs', {

  template: '\n  <div class="tab">\n  <ul>\n  <li  v-for="tab in tabs" :class="{\'is-active\':tab.isActive}"> <a href="#" @click="selectTab(tab)" > {{ tab.name }} </a></li>\n  </ul>\n  <div>\n  <slot></slot>\n  </div>\n  </div>\n  ',
  data: function data() {
    return {
      tabs: []
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab: function selectTab(selectedTab) {
      this.tabs.forEach(function (tab) {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }

});

Vue.component('tab', {

  template: '\n  \n  <div v-show="isActive"><slot></slot></div>\n  \n  ',

  props: {
    name: { required: true },
    selected: { default: false }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  mounted: function mounted() {
    this.isActive = this.selected;
  }
});

Vue.component('counter', {
  template: ' \n  <div class="box" >\n\t<h2>00</h2>\n  <p>CAL</p>\n  </div>\n  ',
  props: ['cal']
});

var app = new Vue({
  el: '#app',
  data: {
    info: '',
    burgers: [],
    sandwiches: [],
    sides: [],
    breakfast: [],
    cal: []
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('http://api.myjson.com/bins/m4pk6').then(function (response) {
      return (_this.info = response.data.mcdonalds).then(_this.getItem());
    });
  },

  methods: {
    getItem: function getItem() {
      for (var i = 0; i < this.info.length; i++) {
        // GET ITEMS
        if (this.info[i].CATEGORY == 'BURGERSANDWICH') {

          this.burgers.push(this.info[i].ITEM);
        } else if (this.info[i].CATEGORY == 'CHICKENFISH') {

          this.sandwiches.push(this.info[i].ITEM);
        } else if (this.info[i].CATEGORY == 'BREAKFAST') {

          this.breakfast.push(this.info[i].ITEM);
        } else if (this.info[i].CATEGORY == 'SNACKSIDE') {

          this.sides.push(this.info[i].ITEM);
        } else if (this.info[i].CAL) {
          this.cal.push(this.info[i].CAL);
        }
      }
    },
    thisFucc: function thisFucc() {
      alert('ay');
    }
  }
});

//api http://api.myjson.com/bins/61ksm
// [{"CAL":"740","FAT":"41","SFAT":"16","TFAT":"1.5","CHOL":"125","SALT":"1480","CARB":"51","FBR":"4","SGR":"14","PRO":"40","ITEM":"Bacon Clubhouse Burger 9.7 oz (274 g)","CATEGORY":"BURGERSANDWICH"},
// m4pk6