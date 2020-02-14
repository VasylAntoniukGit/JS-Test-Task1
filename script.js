/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function result()
{
  
  var suma = document.getElementById('suma').value;
  var price = document.getElementById('price').value;
  if( suma > price ){
      
     var sub = suma-price;
     var res = sub.toFixed(2);
     //ціла частина числа
     var dollar = Math.floor(res);
     var stringres = res.toString();
     //дробова частина числа
     var cent = stringres.substring(stringres.length-2);     
     alert("Ваша решта "+dollar+" доларів і "+cent+" центів");
     
  }
  else alert("Сума повинна бути більшою за ціну");
  
      
}
