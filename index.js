//Bài 1 : Tính tiền lương nhân viên
function BT1() {
  //lấy giá trị người dùng nhập vào input
  var salaryPerDay = document.getElementById("txtNum1").value;
  var workingDays = document.getElementById("txtNum2").value;
  //tính lương
  a = salaryPerDay * workingDays;
  var totalSalary = (document.getElementById("resultBT1").innerHTML = a);
}
BT1();

//Bài 2 : Tính Trung bình 5 số
//Lấy giá trị từ người dùng nhập 5 số
function BT2() {
  var realNumber1 = +document.getElementById("txtNum1BT2").value;
  var realNumber2 = +document.getElementById("txtNum2BT2").value;
  var realNumber3 = +document.getElementById("txtNum3").value;
  var realNumber4 = +document.getElementById("txtNum4").value;
  var realNumber5 = +document.getElementById("txtNum5").value;
  //Tính tổng 5 số
  a = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;

  var averageValue = (document.getElementById("resultBT2").innerHTML = a);
}
BT2();

//Bài 3 : Quy đổi tiền
//Lấy giá trị từ người dùng nhập số USD
function BT3() {
  var moneyUSD = +document.getElementById("txtNum1BT3").value;
  a = new Intl.NumberFormat("vn-VN").format(moneyUSD * 23500) + " " + "VNĐ";
  var exchangeUSD = (document.getElementById("resultBT3").innerHTML = a);
}
BT3();

//Bài 4 : tính chu vi và diện tích hình chữ nhật
function BT4() {
  //Lấy giá trị từ người dùng nhập chiều dài và chiều rộng
  var width = +document.getElementById("txtNumCD").value;
  var length = +document.getElementById("txtNumCR").value;
  //tính chu vi và diện tích
  perimeterHCN = (width + length) * 2;
  areaHCN = length * width;
  var result = (document.getElementById(
    "resultBT4"
  ).innerHTML = `\n        Diện tích: ${areaHCN};\n        Chu vi: ${perimeterHCN}\n    `);
}
BT4();

//Bài 5 : Tính tổng 2 ký số
function BT5() {
  //Lấy giá trị từ người dùng nhập 1 số có 2 chữ số
  var number = document.getElementById("txtNum1BT5").value;
  num1 = number % 10;
  num2 = Math.floor(number / 10);
  total = num1 + num2;
  var result = (document.getElementById("resultBT5").innerHTML = total);
}
BT5();
