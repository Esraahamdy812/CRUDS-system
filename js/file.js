let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productDesc = document.getElementById("productDesc");
let currentIndex = 0 ;
let button=document.getElementById('Button');
button.addEventListener('click',function()
{
    if(button.innerHTML=="Add Product")
    {
        addProduct();
    }
   else
   {
    updateProduct(); 
   
   }
   clearForm();
})
let productArray =[];
if(localStorage.getItem("productList") != null)
{
    productArray =JSON.parse(localStorage.getItem("productList"));
    displayProduct();
}else
{
    productArray =[];
}

// ========================*******************===========================//

// Create
function addProduct(){
var productObject = {
    pName: productName.value,
    prodPrice:productPrice.value,
    pCategory:productCategory.value,
    pDescription:productDesc.value
}
productArray.push(productObject);
localStorage.setItem("productList",JSON.stringify(productArray));
displayProduct();
clearForm(); 
}
//Retrieve
function displayProduct(){
    var cartoona = ``;
    for (let i = 0; i < productArray.length; i++) 
    {
    cartoona+=`
    <tr>
        <td>${i+1}</td>
        <td>${productArray[i].pName}</td>
        <td>${productArray[i].prodPrice}</td>
        <td>${productArray[i].pCategory}</td>
        <td>${productArray[i].pDescription}</td>
        <td> <button onclick="getProductinfo(${i})" class="btn btn-outline-warning">Update</button> </td>
        <td> <button  onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button> </td>
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML=cartoona;

}
//Update

function getProductinfo(index)
{ 
    currentIndex =index;
    productName.value=productArray[index].pName;
    productPrice.value=productArray[index].prodPrice;
    productCategory.value=productArray[index].pCategory;
    productDesc.value=productArray[index].pDescription;
    button.innerHTML="Update";
}
function updateProduct()
{
    let product=
    {
    pName:productName.value,
    prodPrice:productPrice.value,
    pCategory:productCategory.value,
    pDescription:productDesc.value
    }
    productArray[currentIndex]=product;
    displayProduct();
    button.innerHTML="Add Product";
    localStorage.setItem('products',JSON.stringify(productArray));
}
//Delete
function deleteProduct(index){
    productArray.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productArray));
    displayProduct();
}
//Search
function search(term){
    var cartoona=``;
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].pName.toLowerCase().includes(term.toLowerCase())) {
            cartoona+=`
            <tr>
                <td>${i+1}</td>
                <td>${productArray[i].pName}</td>
                <td>${productArray[i].prodPrice}</td>
                <td>${productArray[i].pCategory}</td>
                <td>${productArray[i].pDescription}</td>
                <td> <button class="btn text-light btn-outline-warning">Update</button> </td>
                <td> <button onclick="deleteProduct(${i})" class="btn text-light btn-outline-danger">Delete</button> </td>
            </tr>`;
            }
        }
        document.getElementById("tableBody").innerHTML=cartoona;
        
    }
// Clear
function  clearForm(){
    productName.value="";
    productCategory.value="";
    productPrice.value="";
    productDesc.value=""
}
// =========for dark/light mode====================
let lightMode=document.getElementById("sun");
lightMode.addEventListener('click',function(){
    document.body.style.cssText=`background-color:#fff !important ;color:#212529 !important` ;
    document.getElementById("myNav").style.cssText=`background-color:#fff !important ;color:#212529 !important` ;
    document.getElementById("navBrand").style.cssText=`color:#212529 !important` ;
    document.getElementById("myTable").style.cssText=`color:#212529 !important` ;
    document.getElementById("tableBody").style.cssText=`color:#212529 !important` ;
    document.getElementById("navUl").style.cssText=`border-color:#212529` ;
})
let darkMode=document.getElementById("moon");
darkMode.addEventListener('click',function(){
    document.body.style.cssText=`background-color:#212529 !important ;color:#f8f9fa !important` ;
    document.getElementById("myNav").style.cssText=`background-color:#212529 !important ;color:#f8f9fa !important` ;
    document.getElementById("navBrand").style.cssText=`color:#f8f9fa !important` ;
    document.getElementById("myTable").style.cssText=`color:#f8f9fa !important` ;
    document.getElementById("tableBody").style.cssText=`color:#f8f9fa !important` ;
})