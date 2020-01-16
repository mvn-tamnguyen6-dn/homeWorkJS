//main-conten-list-product
var elementCartProduct = document.getElementById("main-conten-list-product");
var elementString = "";
var listCart = JSON.parse(localStorage.getItem("listCart"));

var listElementClickNumber = [];
var listElementRemove = [];
var listElementSubTotal = [];
var listElementQuantity = [];

function showListCart(listCart) {
  elementString += '<table id="tableListCart">' +
    '<tr>' +
    '<th>#</th>' +
    '<th>Name</th>' +
    '<th>Quantity</th>' +
    '<th>Price</th>' +
    '<th>Sub Total</th>' +
    '<th></th>' +
    '</tr>';
  for (var index = 0; index < listCart.length; index++) {
    var quantity = 1;
    var element = listCart[index];
    idProduct = element.idProduct;
    imgProduct = element.imgProduct;
    nameProduct = element.nameProduct;
    priceProduct = element.priceProduct;
    elementString += '<tr id="cart' + (index + 1) + '">' +
      '<td>' + (index + 1) + '</td>' +
      '<td>' + nameProduct + '</td>' +
      '<td>' +
      '<input id="quantity' + (index + 1) + '" type="number" name="quantity" value="1" min="1" max="100">' +
      '<button id="clickNumber' + (index + 1) + '">OK</button>' +
      '</td>' +
      '<td>' + priceProduct + 'đ</td>' +
      '<td id="subTotal' + (index + 1) + '">' + (quantity * parseInt(priceProduct, 10)) + 'đ</td>' +
      '<td><button id="clickRemove' + (index + 1) + '" class="btn"><i class="fa fa-trash fa-lg"></i></button></td>' +
      '</tr>';
  }
  elementString += '<tr>' +
    '<td></td>' +
    '<td></td>' +
    '<td></td>' +
    '<td></td>' +
    '<td id="TotalProduct"></td>' +
    '<td></td>' +
    '</tr>';
  elementString += '</table>';
  elementCartProduct.innerHTML = elementString;

}
showListCart(listCart);
creatListener(listCart);
handelClickNumber(listElementClickNumber);
handelClickRemove(listElementRemove);

// function totalPriceAllProduct(listCart) {
//   for (let index = 0; index < listCart.length; index++) {
//     const element = listCart[index];
//     listElementSubTotal[index].
//     return 
//   }
// }

function creatListener(listCart) {
  for (var index = 0; index < listCart.length; index++) {
    var element = listCart[index];
    listElementClickNumber.push(document.getElementById("clickNumber" + (index + 1)));
    listElementRemove.push(document.getElementById("clickRemove" + (index + 1)));
    listElementSubTotal.push(document.getElementById("subTotal" + (index + 1)));
    listElementQuantity.push(document.getElementById("quantity" + (index + 1)));
  }
}

function handelClickNumber(listElementClickNumber) {
  for (let index = 0; index < listElementClickNumber.length; index++) {
    var element = listElementClickNumber[index];
    element.addEventListener("click", function() {
      listElementSubTotal[index].innerHTML = getSuTotal(index) + "đ";
    });
  }
}

function getSuTotal(index) {
  return listCart[index].priceProduct * listElementQuantity[index].value;
}

function handelClickRemove(listElementRemove) {
  for (let index = 0; index < listElementRemove.length; index++) {
    var element = listElementRemove[index];
    var temp = 0;
    element.addEventListener("click", function() {
      listCart.splice(index - temp, 1);
      document.getElementById("cart" + (index + 1)).remove();
      localStorage.setItem("listCart", JSON.stringify(listCart));
      temp++;
    });
  }
}