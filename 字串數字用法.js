//如何使用字串
var phrase = "hello\" Mr.tetsu";
var text = "哈哈";
document.write(phrase + text);
document.write("<br/>");
document.write(phrase.length);
document.write("<br/>");
document.write(phrase.toUpperCase()); // 全部大寫
document.write("<br/>");
document.write(phrase.toLowerCase()); // 全部小寫
document.write("<br/>");
document.write(phrase.charAt(1)); // 找位置是哪個字元
document.write("<br/>");
document.write(phrase.indexOf("M")); // 找字元在第幾位(-1無此字元)
document.write("<br/>");
document.write(phrase.substring(0,5)); // 回傳第0到5位的字元
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


//如何使用數字

var number = -6;
document.write(6.2);
document.write("<br/>");
document.write((2+3)*number);
document.write("<br/>");
document.write(8%3); // 取餘數
document.write("<br/>");
document.write(Math.abs(number)); // 取絕對值
document.write("<br/>");
document.write(Math.max(5,6,20,88,100)); // 取最大值
document.write("<br/>");
document.write(Math.min(5,6,20,88,100)); // 取最小值
document.write("<br/>");
document.write(Math.round(5.6)); // 取四捨五入
document.write("<br/>");
document.write(Math.pow(2,5)); // 做次方
document.write("<br/>");
document.write(Math.sqrt(36)); // 做開根號
document.write("<br/>");
document.write(Math.random()); // 取0-1隨機一個數
document.write("<br/>");
document.write(Math.round(Math.random() * 10)); // 取0-10隨機一個數
