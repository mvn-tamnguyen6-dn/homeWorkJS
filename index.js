var elementComment = document.getElementById("comment");
var elementAddComment = document.getElementById("comment-add");
var elementCommentContent = document.getElementById("comment-content");

var listComment = [{
    imgComment: "avatar1.jpg",
    nameUser: "Nguyen Van A",
    content: "Lorem ipsum dolor sit amet consectetur ipisicing elit." +
      "Nihil quam sunt optio nobis quae omnis cupiditate,dolorum nam quis eligendiiure" +
      "ut officiis quia blanditiis architecto commodi "
  },
  {
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
    imgComment = listComment[index].imgComment;
    nameUser = listComment[index].nameUser;
    content = listComment[index].content;
    result += '<div class="main-comment-item">' +
      '<img class="main-comment-avatar-img" src="img/' + imgComment + '" alt="">' +
      '<h4>' + nameUser + '</h4>' +
      '<p>' + content + '</p>' +
      '</div>';
  }
  return result;
}

function showListComment(listComment) {
  elementComment.innerHTML = convertListCommentToString(listComment);
}

function addCommentToListComment(listComment) {
  if (elementCommentContent.value != "") {
    newComment = {
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

showListComment(listComment);
listentAddComment();