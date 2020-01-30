'use strict';



//Stores the min/max hourly customers, and the average cookies per customer, in object properties for Seattle.

var cookie1 = {
  name: 'Seattle',
  min: 23, //
  max: 65,
  avg: 6.3,

  randNum: function(){
    //return this.min + this.max;
    return Math.floor(Math.random() * Math.floor(this.max));

 

    // function calculate(array) {
    //   var sum = 0;
    //   for (var i = 0; i < array.length; i++) {
    //     sum = sum + array[i];
    //   }
    //   return sum;
    // }
    // document.write(calculate([23, 65,]));

  }

};
console.log(cookie1.randNum(cookie1.max));
// console.log(cookie1.(cookie1.avg));


// //Stores the min/max hourly customers, and the average cookies per customer, in object properties for Tokyo.
// var cookie2 = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 3.7,

//   randNum: function(){
//     //return this.min + this.max;
//     return Math.floor(Math.random() * Math.floor(this.max));
//   }

// };
// console.log(cookie2.randNum(cookie2.max));

// //Stores the min/max hourly customers, and the average cookies per customer, in object properties for Dubai.
// var cookie3 = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,

//   randNum: function(){
//     //return this.min + this.max;
//     return Math.floor(Math.random() * Math.floor(this.max));
//   }
// };
// console.log(cookie3.randNum(cookie3.max));

// //Stores the min/max hourly customers, and the average cookies per customer, in object properties for Paris
// var cookie4 = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,

//   randNum: function(){
//     //return this.min + this.max;
//     return Math.floor(Math.random() * Math.floor(this.max));
//   }

// };
// console.log(cookie4.randNum(cookie4.max));
// //Stores the min/max hourly customers, and the average cookies per customer, in object properties for Lima.
// var cookie5 = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,

//   randNum: function(){
//     //return this.min + this.max;
//     return Math.floor(Math.random() * Math.floor(this.max));
//   }
// };
// console.log(cookie5.randNum(cookie5.max));
