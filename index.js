{
  /* <li class="main-content-item">
            <div class="main-content-item-block">
              <ul class="main-block-list">
                <li class="main-block-item"><img class="main-block-item-img" src="./img/iphone-8-plus-(8).jpg" alt=""></li>
                <li class="main-block-item">This product name</li>
                <li class="main-block-item">This is description</li>
                <li class="main-block-item">Price:1000d</li>
                <li class="main-block-item main-block-add-cart"><button>Add to Cart</button></li>
              </ul>
            </div>
          </li> */
}
var x = '<li class="main-content-item">' +
  '<div class="main-content-item-block">' +
  '<ul class="main-block-list">' +
  '<li class="main-block-item"><img class="main-block-item-img" src="./img/iphone-8-plus-(8).jpg" alt=""></li>' +
  '<li class="main-block-item">This product name</li>' +
  '<li class="main-block-item">This is description</li>' +
  '<li class="main-block-item">Price:1000d</li>' +
  '<li class="main-block-item main-block-add-cart"><button>Add to Cart</button></li>' +
  '</ul>' +
  '</div>' +
  '</li>';
for (let index = 0; index < 10; index++) {
  document.getElementById("main-content-item").innerHTML += x;
}