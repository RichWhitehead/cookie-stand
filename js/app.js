'use strict';


var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var cookieStores = [];


function CookieStore (location, minCustomers, maxCustomers, avgSale){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.totalCookies = 0;
  this.dailyCookieSales = [];
  cookieStores.push(this);
}

CookieStore.prototype.calculateCustomer = function(){
  return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
};

CookieStore.prototype.cookiesEachHour =function(){
  for(var i = 0; i < hoursOfOperation.length; i++){
    var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
    this.dailyCookieSales.push(salesPerHour);
    this.totalCookies += salesPerHour;
  }
};

CookieStore.prototype.render = function(){
  var parentEl = document.getElementById('sales');
  var liEl = document.createElement('li');
  liEl.textContent = this.location;
  parentEl.appendChild(liEl);
  for(var i = 0; i < hoursOfOperation.length; i++){
    liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
    parentEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalCookies;
  parentEl.appendChild(liEl);
};


// console.log(seattle.calculateCustomer());
// console.log(seattle.cookiesEachHour());
// seattle.render();

// this.calculateCustomer();
// this.getAvgCookiesHour();
// this.getTotalSold();



new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 3.7);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);
console.log(cookieStores);

console.log(cookieStores[0].calculateCustomer());


// var seattle = {
//   location: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   dailyCookieSales: [],
//   calculateCustomer: function(){
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
//   },
//   cookiesEachHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
//       this.dailyCookieSales.push(salesPerHour);
//       this.totalCookies += salesPerHour;
//     }
//   },
//   render: function(){
//     var parentEl = document.getElementById('sales');
//     var liEl = document.createElement('li');
//     liEl.textContent = this.location;
//     parentEl.appendChild(liEl);
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
//       parentEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookies;
//     parentEl.appendChild(liEl);
//   }
// };
// console.log(seattle.calculateCustomer());
// console.log(seattle.cookiesEachHour());
// seattle.render();

// var tokyo = {
//   location: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 3.7,
//   totalCookies: 0,
//   dailyCookieSales: [],
//   calculateCustomer: function(){
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
//   },
//   cookiesEachHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
//       this.dailyCookieSales.push(salesPerHour);
//       this.totalCookies += salesPerHour;
//     }
//   },
//   render: function(){
//     var parentEl = document.getElementById('sales');
//     var liEl = document.createElement('li');
//     liEl.textContent = this.location;
//     parentEl.appendChild(liEl);
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
//       parentEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookies;
//     parentEl.appendChild(liEl);
//   }
// };
// console.log(tokyo.calculateCustomer());
// console.log(tokyo.cookiesEachHour());
// tokyo.render();

// var dubai = {
//   location: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   totalCookies: 0,
//   dailyCookieSales: [],
//   calculateCustomer: function(){
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
//   },
//   cookiesEachHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
//       this.dailyCookieSales.push(salesPerHour);
//       this.totalCookies += salesPerHour;
//     }
//   },
//   render: function(){
//     var parentEl = document.getElementById('sales');
//     var liEl = document.createElement('li');
//     liEl.textContent = this.location;
//     parentEl.appendChild(liEl);
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
//       parentEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookies;
//     parentEl.appendChild(liEl);
//   }
// };
// console.log(dubai.calculateCustomer());
// console.log(dubai.cookiesEachHour());
// dubai.render();


// var paris = {
//   location: 'Paris',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   dailyCookieSales: [],
//   calculateCustomer: function(){
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
//   },
//   cookiesEachHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
//       this.dailyCookieSales.push(salesPerHour);
//       this.totalCookies += salesPerHour;
//     }
//   },
//   render: function(){
//     var parentEl = document.getElementById('sales');
//     var liEl = document.createElement('li');
//     liEl.textContent = this.location;
//     parentEl.appendChild(liEl);
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
//       parentEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookies;
//     parentEl.appendChild(liEl);
//   }
// };
// console.log(paris.calculateCustomer());
// console.log(paris.cookiesEachHour());
// paris.render();

// var lima = {
//   location: 'Lima',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   dailyCookieSales: [],
//   calculateCustomer: function(){
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
//   },
//   cookiesEachHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
//       this.dailyCookieSales.push(salesPerHour);
//       this.totalCookies += salesPerHour;
//     }
//   },
//   render: function(){
//     var parentEl = document.getElementById('sales');
//     var liEl = document.createElement('li');
//     liEl.textContent = this.location;
//     parentEl.appendChild(liEl);
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
//       parentEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalCookies;
//     parentEl.appendChild(liEl);
//   }
// };
// console.log(lima.calculateCustomer());
// console.log(lima.cookiesEachHour());
// lima.render();

// // console.log(cookie5.randNum());

// // Constructor function always capitalize the first letter.
// //EXAMPLE BELOW

// //prototypes
