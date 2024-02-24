// 函式 function

function hello(name,age){
    document.write("你好" + name + "你今年" + age + "歲");
}
hello("家哲" ,"82");
document.write("<br/>");


function add(num1,num2){
    document.write(num1 + num2);
}
add(8,5);
document.write("<br/>");


function bdd(num1,num2){
    // document.write(num1+ num2);
    return num1 + num2;
}
document.write(bdd(2,5));
document.write("<br/>");
document.write("<br/>");


// 考題
function cdd(num1,num2){
    document.write(num1 + num2);
    document.write("<br/>");
    return 10;
    document.write("你好");
}

value = cdd(3,2);
document.write(value);
document.write("<br/>");
document.write(cdd(3,2));