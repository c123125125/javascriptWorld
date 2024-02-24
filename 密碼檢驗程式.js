// 密碼檢驗程式

var password = 123456;
var input;
var times = 1;
while(password!=input && times<=3){
    times++;
    input=prompt("請輸入密碼");
}
if(password==input){
    alert("登入成功");
}
else{
    alert("超出輸入次數");
}

// 以下也可以
// var password = 123456;
// var input;
// var entry_count = 0;
// var entry_limit = 3;
// var out_of_limit = false;

// while(password!=input && !out_of_limit){
//     entry_count++;
//     if(entry_count<=entry_limit){
//         input=prompt("請輸入密碼");
//     }
//     else{
//         out_of_limit = true
//     }
// }
// if(password==input){
//     alert("登入成功");
// }
// else{
//     alert("超出輸入次數");
// }
