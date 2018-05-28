
Vue.component('tabs',{
  
  template:`
  <div class="tab">
  <ul>
  <li  v-for="tab in tabs" :class="{'is-active':tab.isActive}"> <a href="#" @click="selectTab(tab)" > {{ tab.name }} </a></li>
  </ul>
  <div>
  <slot></slot>
  </div>
  </div>
  `,
  data(){
    return {
      tabs:[]
    }
  },
  created(){
    this.tabs = this.$children;
  },
  methods:{
    selectTab(selectedTab){
      this.tabs.forEach(tab=>{
        tab.isActive = (tab.name == selectedTab.name)
      })
    }
  }
  
});

Vue.component('tab',{
  
  template:`
  
  <div v-show="isActive"><slot></slot></div>
  
  `,
  
  props:{
    name: {required:true },
    selected: {default : false}
  },
  data(){
    return {
      isActive:false
    }
  },
  mounted(){
    this.isActive = this.selected
  }
})

Vue.component('counter',{
  template:` 
  <div class="box" >
	<h2>00</h2>
  <p>CAL</p>
  </div>
  `,
  props:['cal']
})



var app = new Vue({
  el: '#app',
  data: {
    info:'',
    burgers:[],
    sandwiches:[],
    sides:[],
    breakfast:[],
    cal:[]
  },
  mounted () {
    axios
    .get('http://api.myjson.com/bins/m4pk6')
    .then(response => (this.info = response.data.mcdonalds)
    .then(this.getItem())
    
  )
},
methods:{
  getItem:function(){
    for(var i = 0; i<this.info.length; i++){
      // GET ITEMS
      if(this.info[i].CATEGORY=='BURGERSANDWICH' ){
        
        this.burgers.push(this.info[i].ITEM);
  
        
      }
      else if (this.info[i].CATEGORY=='CHICKENFISH'){
        
        this.sandwiches.push(this.info[i].ITEM)
        
      }
       else if(this.info[i].CATEGORY=='BREAKFAST' ){
        
        this.breakfast.push(this.info[i].ITEM)
        
      }else if(this.info[i].CATEGORY=='SNACKSIDE' ){
        
        this.sides.push(this.info[i].ITEM);
        
      } 
      else if(this.info[i].CAL ){
        this.cal.push(this.info[i].CAL);
      } 
    }
  },
  thisFucc(){
    alert('ay')
  }
  
}
});


//api http://api.myjson.com/bins/61ksm
// [{"CAL":"740","FAT":"41","SFAT":"16","TFAT":"1.5","CHOL":"125","SALT":"1480","CARB":"51","FBR":"4","SGR":"14","PRO":"40","ITEM":"Bacon Clubhouse Burger 9.7 oz (274 g)","CATEGORY":"BURGERSANDWICH"},
// m4pk6