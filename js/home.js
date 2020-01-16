var listProduct = [{
    idProduct: "1",
    imgProduct: "img1.jpg",
    nameProduct: "Vsmart Active 3 (6GB/64GB)",
    priceProduct: "4590000"
  },
  {
    idProduct: "2",
    imgProduct: "img2.jpg",
    nameProduct: "Vsmart Active 3 (4GB/64GB)",
    priceProduct: "4190000"
  },
  {
    idProduct: "3",
    imgProduct: "img3.jpg",
    nameProduct: "Vsmart Live (6GB/64GB)",
    priceProduct: "3790000"
  },
  {
    idProduct: "4",
    imgProduct: "img4.jpg",
    nameProduct: "Vsmart Live (4GB/64GB)",
    priceProduct: "3490000"
  },
  {
    idProduct: "5",
    imgProduct: "img5.jpg",
    nameProduct: "Vsmart Joy 2+ (2GB/32GB)",
    priceProduct: "2190000"
  },
  {
    idProduct: "6",
    imgProduct: "img6.jpg",
    nameProduct: "Vsmart Star",
    priceProduct: "1390000"
  },
  {
    idProduct: "7",
    imgProduct: "img7.jpg",
    nameProduct: "Vsmart Bee 3",
    priceProduct: "1390000"
  },
  {
    idProduct: "8",
    imgProduct: "img8.jpg",
    nameProduct: "Vsmart Bee",
    priceProduct: "990000"
  },
];

var elementListProduct = document.getElementById("main-content-item");
var elementString = "";
var imgProduct;
var nameProduct;
var priceProduct;
var listCart = JSON.parse(localStorage.getItem("listCart")) != null ? JSON.parse(localStorage.getItem("listCart")) : [];
var elementClickProduct = [];

function showListProduct(listProduct) {
  for (let index = 0; index < 8; index++) {
    idProduct = listProduct[index].idProduct;
    imgProduct = listProduct[index].imgProduct;
    nameProduct = listProduct[index].nameProduct;
    priceProduct = listProduct[index].priceProduct;
    elementString += '<li class="main-content-item">' +
      '<div class="main-content-item-block">' +
      '<ul class="main-block-list">' +
      '<li class="main-block-item"><img class="main-block-item-img" src="../img/' + imgProduct + '" alt=""></li>' +
      '<li class="main-block-item">' + nameProduct + '</li>' +
      '<li class="main-block-item">' + priceProduct + 'đ</li>' +
      '<li class="main-block-item">' +
      '<button class=" main-block-add-cart" id="' + idProduct + '">Add to Cart</button>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</li>';
  }
  elementListProduct.innerHTML = elementString;
}

function listenListProduct(listProduct) {

  for (var index = 0; index < listProduct.length; index++) {
    const element = listProduct[index];
    idProduct = element.idProduct;
    elementClickProduct.push(document.getElementById(idProduct));
    elementClickProduct[index].addEventListener("click", function() {
      var idElement = this.id;
      var i = idElement.charAt(idElement.length - 1) - 1;
      elementClickProduct[i].disabled = true;
      elementClickProduct[i].style.backgroundColor = "rgb(184, 137, 216)";
      idProductCart = elementClickProduct[i].id;
      listCart.push(getProductCart(idProductCart));
      localStorage.setItem("listCart", JSON.stringify(listCart));
      document.getElementById("number-cart").innerHTML = listCart.length;
    });
  }
}

function getProductCart(idProductCart) {
  for (let index = 0; index < listProduct.length; index++) {
    const element = listProduct[index];
    if (element.idProduct === idProductCart) {
      return element;
    }
  }
}

function handelDisabledProduct(listCart) {
  for (let index = 0; index < listCart.length; index++) {
    const idProduct = listCart[index].idProduct;
    elementClickProduct[idProduct - 1].style.backgroundColor = "rgb(184, 137, 216)";
    elementClickProduct[idProduct - 1].disabled = true;
  }
}

showListProduct(listProduct);
listenListProduct(listProduct);
handelDisabledProduct(listCart);
document.getElementById("number-cart").innerHTML = listCart.length;