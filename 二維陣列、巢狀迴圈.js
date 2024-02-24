// 二維陣列

var number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];

document.write(number[0][0]);
document.write("<br/>");
document.write(number[0][2]);
document.write("<br/>");


// 巢狀迴圈

for(var i=0; i<4; i++){
    for(var j=0; j<3; j++){
        document.write("i:" + i + ",j:" + j);
        document.write("<br/>");
    }
}

// 用巢狀迴圈印出二維陣列

for(var a=0; a<number.length; a++){
    for(var b=0; b<number[a].length; b++){
        document.write(number[a][b]);
    }
    document.write("<br/>");
}