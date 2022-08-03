function table(){
    let table = document.getElementById("tableValue").value;
let showResult;
  document.getElementById("myTable").innerHTML = "";
  for(let index = 1; index <=10;index++){
showResult = table + " x " + index + " = " + table * index;
result =" <h1> " + showResult + " </h1> ";
document.getElementById("myTable").innerHTML += result;


  }

}