'use strict';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
alert("halp");
'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}