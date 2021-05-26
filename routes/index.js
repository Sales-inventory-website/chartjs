var express = require('express');
var router = express.Router();
const salesInfo = require('./data') // Data from API/Controller

// Dashboard
router.get('/', function (req, res, next) {
  x_axisArray = [];
  var salesArray = [];
  maxmonth = 0;
  maxyear = 0;

  // get max year and month
  for (i = 0; i < salesInfo.length; i++){
    if(salesInfo[i].date.getFullYear() > maxyear ){
      maxyear = salesInfo[i].date.getFullYear();
    }

    if(salesInfo[i].date.getFullYear() === maxyear ){
      month = salesInfo[i].date.getMonth();
      if(month > maxmonth){
        maxmonth = salesInfo[i].date.getMonth() + 1;
      } 
    }
  }

  // get the last seven sales info with the assumption that there will be atleast a sale every month
  for(i = 0; i < 7; i++){
    x_axis = '';
    if(maxmonth < 1){
      maxyear = maxyear - 1;
      maxmonth = 12;
      x_axis = maxmonth + "/" + maxyear;
      x_axisArray.push(x_axis);
    }
    else{
      x_axis = maxmonth + "/" + maxyear;
      x_axisArray.push(x_axis);
    }
    maxmonth = maxmonth - 1;
  }

  x_axisArray = x_axisArray.reverse();

// get total sales for each month
  for(i = 0; i < x_axisArray.length; i++){
    var sumsales = 0;
    let splitDate = x_axisArray[i].split('/');
    for(k = 0; k < salesInfo.length; k++){
      if(salesInfo[k].date.getFullYear() == splitDate[1] && salesInfo[k].date.getMonth()+1 == splitDate[0] ){
        sumsales = salesInfo[k].paid + sumsales
      }
    }
    salesArray.push(sumsales);
  }
  res.render('dashboard', {salesArray:salesArray, x_axisArray:x_axisArray})
});


module.exports = router;
