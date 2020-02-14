'use strict';

// Array of business hours.

var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//// Variable storing array of location objects + variable for table.

var cookieStores = [];



// Constructor function for stores.

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

CookieStore.prototype.cookiesEachHour = function(){
  for(var i = 0; i < hoursOfOperation.length; i++){
    var salesPerHour = Math.round(this.avgSale * this.calculateCustomer());
    this.dailyCookieSales.push(salesPerHour);
    this.totalCookies += salesPerHour;
    // console.log(salesPerHour);
  }
};

CookieStore.prototype.render = function(){
  var parentEl = document.getElementById('sales');
  var liEl = document.createElement('tr');
  liEl.textContent = this.location;
  parentEl.appendChild(liEl);
  for(var i = 0; i < hoursOfOperation.length; i++){
    liEl = document.createElement('td');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
    parentEl.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = 'Total: ' + this.totalCookies;
  parentEl.appendChild(liEl);
};



//Creating new instances of the object.

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 3.7);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);
// console.log(cookieStores);

cookieStores[0].calculateCustomer();
cookieStores[0].cookiesEachHour();
cookieStores[0].render();

cookieStores[1].calculateCustomer();
cookieStores[1].cookiesEachHour();
cookieStores[1].render();

cookieStores[2].calculateCustomer();
cookieStores[2].cookiesEachHour();
cookieStores[2].render();

cookieStores[3].calculateCustomer();
cookieStores[3].cookiesEachHour();
cookieStores[3].render();

cookieStores[4].calculateCustomer();
cookieStores[4].cookiesEachHour();
cookieStores[4].render();

// var allTotal = 0;

var foot = document.getElementById('sales');
var feetRow = document.createElement('tr');
var footTD = document.createElement('td');
footTD.textContent = 'total';
feetRow.appendChild(footTD);
foot.appendChild(feetRow);
for(var i = 0; i < hoursOfOperation.length; i++){
  var hourlyTotal = 0;
  for(var j = 0; j < cookieStores.length; j++){
    hourlyTotal += cookieStores[j].dailyCookieSales[i];
  }
  renderFooter(hourlyTotal);
  console.log(hourlyTotal);
}
// Notice we have dailyTotals as an argument for this function
function renderFooter(dailyTotals) {
  // create the element
  // add the content to your element
  // append the element to your child
  // Using what you have above your loop
  // you already have your parent element from: var foot = document.getElementById('sales');
  // you also have the table row deflined and in the footer you only have 1 row so we will use: var feetRow = document.createElement('tr'); from above
  var footTD = document.createElement('td');
  footTD.textContent = dailyTotals;
  foot.appendChild(footTD);
}






