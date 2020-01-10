/*
1.What are the differences between a variable that is: `null`, `undefined`?
-null : là một đối tượng rỗng giá trị hoặc giá trị không tồn tại
-undefined : có nghĩa là không xác định . khi bạn khai báo một biến mà chưa gán giá trị cho nó
2.What is `use strict`? what are the advantages and disadvantages to using it?
-Khi khai báo use strict thì các đoạn lệnh javascript phía dưới nó sẽ được quản lý nghiêm ngặt hơn về cú pháp 
-Các loại nghiêm ngoặc của javascript:
  +Gán giá trị cho biến chưa được khai báo
  +Báo lỗi khi sử dụng devare 
  +Các tham số của hàm không được trùng nhau
  +Không cho phép khai báo biến dưới dạng hệ nhị phân
  +Không được phép ghi đè lên thuộc tính chỉ được phép đọc
  +Không được sử dụng with
  +Không được phép khai báo biến trong eval
  +Không chấp nhận khai báo các keyWord
3.What are the differences between `==` and `===`? Write an example for each case (if any)?
==:Chỉ so sánh giá trị
===:so sánh giá trị và so sánh luôn cả kiểu dữ liệu.
4.What is different between declaration: `var`, `const` and `var`?
-VAR: +biến var sẽ có scope là global scope 
      +và có hoisting nghĩa là dù khai báo thì biến đều được đem lên đầu scope
5.FALSE group
null
undefined
''
0
false

TRUE group
[]
{}
'abc'
'0'
123
*/
function sumTriple(x, y) {
  if (x === y) {
    return 3 * (x + y);
  }
  return x + y;
}
console.log("Answer 1");
console.log(sumTriple(5, 10));
console.log(sumTriple(5, 5));

function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
  }
  return (n - 19) * 3;
}
console.log("Answer 2");
console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));

//cau 3

var input = '1*96';

function asterisk() {
  var position = asteriskPosition(input);
  var sumDigits = sumOfDigits();
  var numberAdd = numberToAdd(sumDigits);
  return handle(position, numberAdd);
}

console.log(asterisk());

function asteriskPosition(input) {
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "*") {
      return i;
    }
  }
}

function sumOfDigits() {
  var result = 0;
  for (var i = 0; i < input.length; i++) {
    var inputChatAt = input.charAt(i);
    if (!(inputChatAt === "*")) {
      var integer = parseInt(inputChatAt, 10);
      result += integer;
    }
  }
  return result;
}

function numberToAdd(sumDigits) {
  var result = "";
  if (sumDigits % 3 === 0) {
    for (var i = 0; i <= 9; i += 3) {
      result += i + "";
    }
  } else {
    temp = (3 - (sumDigits % 3));
    for (var i = temp; i <= 9; i += 3) {
      result += i + "";
    }
  }
  return result;
}

function handle(position, numberAdd) {
  var result = [];
  if (numberAdd === 0) {
    return input.replace("*", numberAdd);
  } else {
    for (var i = 0; i < numberAdd.length; i++) {
      result.push(input.replace("*", numberAdd.charAt(i)));
    }
  }
  return result;
}
//cau 4:

function divSix() {
  var input = asterisk();
  var result = [];
  for (var index = 0; index < input.length; index++) {
    const element = input[index];
    if (element % 2 == 0) {
      result.push(element);
    }
  }
  return result;
}
console.log(divSix());