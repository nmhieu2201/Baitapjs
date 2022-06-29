//Bai 1: Tinh luong
/*
    -Input: Nhap luong 1 ngay va so ngay lam viec ;
    -Process:
        1.Lay Input
        2.Tong luong = Luong 1 ngay * so ngay lam viec;
        3.Log luong ra man hinh
    -Output: Tong luong
*/
var salaryPerDay = 300000;
var workingDay = 25;
var totalSalary = salaryPerDay * workingDay;
console.log ("Tong luong trong 1 thang la: ", totalSalary);
//Bai 2:Tinh gia tri trung binh cua 5 so thuc:
/**
 *  -Input: Nhap vao 5 so thuc 
 *  -Process: 
 *      1: Lay input
 *      2: Gia tri TB = (Tong cua 5 so )/5
 *      3: Log ra man hinh gia tri trung binh.
 *  -Output: Gia tri trung binh
 */
var num1 = 54;
var num2 = 514;
var num3 = 542;
var num4 = 1454;
var num5 = 154;
var averageOfTotal = (num1 + num2 + num3 + num4 +num5) / 5;
console.log ("Gia tri trung binh cua 5 so la:", averageOfTotal)
//Bai 3:
/**
 * -Input: Nhập vào tỉ giá và số USD cần đổi sang tiền VND
 * -Process:
 *      1.Lấy Input.
 *      2.Sổ tiền sau khi quy đổi là = Số USD * Tỉ giá
 *      3.Log ra màn hình số tiền sau khi quy đổi sang VND từ USD
 * -Output:Số tiền sau khi quy đổi
 */
var exchangeRateUsd = 23500;
var cashUsd = 4500;
var totalCashVnd = exchangeRateUsd * cashUsd ;
console.log ("Số tiền sau khi quy đổi từ USD sang VND là:",totalCashVnd);
//Bài 4: 
/**
 *  -Input: Nhập vào chiều dài và chiều rộng của hình chữ nhật
 *  -Process:
 *      1.Lấy input.
 *      2. Chu vi = (Chiều dài + Chiều rộng) * 
 *         Diện tích = Chiều dài * Chiều rộng
 *      3.Log ra màn hình chu vi và diện tích của hình chữ nhật
 *  -Output: Chu vi và diện tích của HCN
 *              
 */
var lengthOfRectangle = 45 ;
var widthOfRectangle = 48;
var perimeterOfRectangle = 2 * (lengthOfRectangle + widthOfRectangle) ;
var areaOfRectangle = lengthOfRectangle * widthOfRectangle ;
console.log ("Chu vi của hình chữ nhật là: ", perimeterOfRectangle);
console.log ("Diện tích của hình chữ nhật là", areaOfRectangle);
//Bài 5
/**
 * -Input:  Nhập vào số n có 2 chữ số 
 * -Process: 
 *      1.Lấy input
 *      2.Hàng đơn vị = n % 10;
 *        Hàng chục = Math.floor (n / 10);
 *        Tổng 2 ký số
 *      3.Log ra màn hình tổng 2 kí số 
 * -Output: Tổng 2 kí số
 */
var num = 67 ;
var tensOfNum =Math.floor(num / 10);
var unitsOfNum = num % 10 ;
var totalOfNum = unitsOfNum + tensOfNum;
console.log("Tổng 2 kí số là: ", totalOfNum);