'use strict';


var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

//Stores the min/max hourly customers, and the average cookies per customer, in object properties for Seattle.

var cookie1 = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,

  randNum: function(){
    var newArray = [];
    var totalOfCookies = 0;

    for(var i = 0; i < hours.length; i++){

      var random =  Math.floor(Math.random() * Math.floor(this.max) * this.avg);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${hours[i]} ${random} cookies`);

    }
    newArray.push(`Total: ${totalOfCookies} cookies`);
    return newArray;
  }

};

console.log(cookie1.randNum());


//Stores the min/max hourly customers, and the average cookies per customer, in object properties for Tokyo.
var cookie2 = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 3.7,

  randNum: function(){
    var newArray = [];
    var totalOfCookies = 0;

    for(var i = 0; i < hours.length; i++){

      var random =  Math.floor(Math.random() * Math.floor(this.max) * this.avg);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${hours[i]} ${random} cookies`);

    }
    newArray.push(`Total: ${totalOfCookies} cookies`);
    return newArray;
  }

};
console.log(cookie2.randNum());

//Stores the min/max hourly customers, and the average cookies per customer, in object properties for Dubai.
var cookie3 = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,

  randNum: function(){
    var newArray = [];
    var totalOfCookies = 0;

    for(var i = 0; i < hours.length; i++){

      var random =  Math.floor(Math.random() * Math.floor(this.max) * this.avg);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${hours[i]} ${random} cookies`);

    }
    newArray.push(`Total: ${totalOfCookies} cookies`);
    return newArray;
  }

};
console.log(cookie3.randNum());

//Stores the min/max hourly customers, and the average cookies per customer, in object properties for Paris
var cookie4 = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,

  randNum: function(){
    var newArray = [];
    var totalOfCookies = 0;

    for(var i = 0; i < hours.length; i++){

      var random =  Math.floor(Math.random() * Math.floor(this.max) * this.avg);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${hours[i]} ${random} cookies`);

    }
    newArray.push(`Total: ${totalOfCookies} cookies`);
    return newArray;
  }

};
console.log(cookie4.randNum());
//Stores the min/max hourly customers, and the average cookies per customer, in object properties for Lima.
var cookie5 = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,

  randNum: function(){
    var newArray = [];
    var totalOfCookies = 0;

    for(var i = 0; i < hours.length; i++){

      var random =  Math.floor(Math.random() * Math.floor(this.max) * this.avg);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${hours[i]} ${random} cookies`);

    }
    newArray.push(`Total: ${totalOfCookies} cookies`);
    return newArray;
  }

};
console.log(cookie5.randNum());
