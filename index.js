var elementComment = document.getElementById("comment");
var elementAddComment = document.getElementById("comment-add");
var elementCommentContent = document.getElementById("comment-content");
var elementDeleteComments = [];

var listComment = [{
    id: 1,
    imgComment: "avatar1.jpg",
    nameUser: "Nguyen Van A",
    content: "Lorem ipsum dolor sit amet consectetur ipisicing elit." +
      "Nihil quam sunt optio nobis quae omnis cupiditate,dolorum nam quis eligendiiure" +
      "ut officiis quia blanditiis architecto commodi "
  },
  {
    id: 2,
    imgComment: "avatar2.jpg",
    nameUser: "Nguyen Van B",
    content: "Lorem ipsum dolor sit amet consectetur ipisicing elit." +
      "Nihil quam sunt optio nobis quae omnis cupiditate,dolorum nam quis eligendiiure" +
      "ut officiis quia blanditiis architecto commodi "
  }
];
var stringListComment = convertListCommentToString(listComment);


function convertListCommentToString(listComment) {
  var result = "";
  var imgComment;
  var nameUser;
  var content;
  for (var index = 0; index < listComment.length; index++) {
    id = listComment[index].id;
    imgComment = listComment[index].imgComment;
    nameUser = listComment[index].nameUser;
    content = listComment[index].content;
    result += '<div class="main-comment-item">' +
      '<img class="main-comment-avatar-img" src="img/' + imgComment + '" alt="">' +
      '<h4>' + nameUser + '</h4>' +
      '<p>' + content + '</p>' +
      '<span class="main-comment-minus-icon" id="' + id + '"><i class="fa fa-minus-circle"></i></span>' +
      '</div>';
  }
  return result;
}

function showListComment(listComment) {
  elementComment.innerHTML = convertListCommentToString(listComment);
  createListenerElementDeteleComment(listComment);
}

function createListenerElementDeteleComment(listComment) {
  elementDeleteComments = [];
  for (let index = 0; index < listComment.length; index++) {
    id = listComment[index].id;
    elementDeleteComments.push(document.getElementById(id));
  }

  for (let index = 0; index < listComment.length; index++) {
    elementDeleteComments[index].addEventListener("click", function() {
      //alert("Hello! I am an alesfsfrt box!" + elementDeleteComments[index].id);
      var remoIndex = elementDeleteComments[index].id - 1;
      listComment.splice(remoIndex, 1);
      showListComment(listComment);
    });
  }

}

function addCommentToListComment(listComment) {
  var idNewComment;
  if (listComment.length == 0) {
    idNewComment = 1;
  } else {
    idNewComment = listComment[listComment.length - 1].id + 1;
  }

  if (elementCommentContent.value != "") {
    newComment = {
      id: idNewComment,
      imgComment: "avatar1.jpg",
      nameUser: "Nguyen Van C",
      content: elementCommentContent.value,
    };
    listComment.push(newComment);
    console.log(listComment);
  }
}

function listentAddComment() {
  elementAddComment.addEventListener("click", addComment);
}


function addComment() {
  addCommentToListComment(listComment);
  showListComment(listComment);
}

// function listentDeleteComment() {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//   }
// }

function deleteComment() {
  deleteCommentInListComment();
  showListComment(listComment);
}

function deleteCommentInListComment(listComment, indexDelete) {
  listComment.splice(indexDelete);
  console.log(indexDelete + "sffffff" + listComment);
}

showListComment(listComment);
listentAddComment();
//listentDeleteComment();