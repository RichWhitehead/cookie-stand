'use strict';


var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  dailyCookieSales: [],
  calculateCustomer: function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++){
      var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
      this.dailyCookieSales.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render: function(){
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
  }
};
console.log(seattle.calculateCustomer());
console.log(seattle.cookiesEachHour());
seattle.render();

var tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 3.7,
  totalCookies: 0,
  dailyCookieSales: [],
  calculateCustomer: function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++){
      var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
      this.dailyCookieSales.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render: function(){
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
  }
};
console.log(tokyo.calculateCustomer());
console.log(tokyo.cookiesEachHour());
tokyo.render();

var dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  dailyCookieSales: [],
  calculateCustomer: function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++){
      var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
      this.dailyCookieSales.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render: function(){
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
  }
};
console.log(dubai.calculateCustomer());
console.log(dubai.cookiesEachHour());
dubai.render();


var paris = {
  location: 'Paris',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  dailyCookieSales: [],
  calculateCustomer: function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++){
      var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
      this.dailyCookieSales.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render: function(){
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
  }
};
console.log(paris.calculateCustomer());
console.log(paris.cookiesEachHour());
paris.render();

var lima = {
  location: 'Lima',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  dailyCookieSales: [],
  calculateCustomer: function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++){
      var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
      this.dailyCookieSales.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render: function(){
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
  }
};
console.log(lima.calculateCustomer());
console.log(lima.cookiesEachHour());
lima.render();

// console.log(cookie5.randNum());

// Constructor function always capitalize the first letter.
//EXAMPLE BELOW

//prototypes
