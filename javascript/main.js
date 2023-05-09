

var productnameinput = document.getElementById("productname");
var productpriceinput = document.getElementById("productprice");
var productcatinput = document.getElementById("productcat");
var productdesinput = document.getElementById("productdes");
//console.log(productnameinput,productpriceinput ,productcatinput,productdesinput);
var productcontainer =[];
if(localStorage.getItem("products") != null){

productcontainer=JSON.parse(localStorage.getItem("products"))
displayproduct();

}
function addproduct(){
var product={name:productnameinput.value,
    price:productpriceinput.value ,
    cat:productcatinput.value,
    des: productdesinput.value}
productcontainer .push(product);

localStorage.setItem("products",JSON.stringify(productcontainer));

console.log(product);
displayproduct();
//clearpproduct();
}
function clearpproduct(){
    productnameinput.value="";
    productpriceinput.value="";
    productcatinput.value="";
    productdesinput.value="";
}
function displayproduct(){

    var cartoona =``
    for(var i=0;i<productcontainer.length;i++){
      cartoona +=`  <tr>
      <td>${i}</td>
      <td>${productcontainer[i].name}</td>
      <td> ${productcontainer[i].price}</td>
      <td>${productcontainer[i].cat}</td>
      <td> ${productcontainer[i].des}</td>
      
      <td><button onclick="deleteproduct(${i})" class="btn btn-outline-danger">Delete </button></td>
    </tr>`
    
    }
    document.getElementById("tableBody").innerHTML=cartoona;
    console.log("test")
}


function deleteproduct(index){
productcontainer.splice(index,1);
localStorage.setItem("products",JSON.stringify(productcontainer));
displayproduct();

}
function searchproduct(term){
    var cartoona =``
   
    for(var i=0;i<productcontainer.length;i++){
     if(productcontainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
      cartoona +=`  <tr>
      <td>${i}</td>
      <td>${productcontainer[i].name}</td>
      <td> ${productcontainer[i].price}</td>
      <td>${productcontainer[i].cat}</td>
      <td> ${productcontainer[i].des}</td>
      
      <td><button onclick="deleteproduct(${i})" class="btn btn-outline-danger">Delete </button></td>
    </tr>`
  
    }}
    document.getElementById("tableBody").innerHTML=cartoona;
}
