// for 迴圈

var i = 0;
while(i<10){
    document.write(i);
    document.write("<br/>");
    i++;
}

// 以下為for寫法
for(var i = 0; i<10; i++){
    document.write(i);
    document.write("<br/>");
}




var q = 0;
var friends = ["小黑","小黃","小綠"];
while(q<friends.length){
    document.write(friends[q]);
    document.write("<br/>");
    q++;
}

// 以下為for寫法
var friends = ["小黑","小黃","小綠"];
for(var q = 0; q<friends.length; q++){
    document.write(friends[q]);
    document.write("<br/>");
}
