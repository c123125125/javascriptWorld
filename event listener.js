// event listener

// 第一種方式(寫在HTML)
// // 在html裡寫 onclick="handle_click"
// function handle_click(element){
//     // alert("很會按欸");
//     console.log(element);
//     element.innerText = "按屁啊";
//     element.style.color = "red";
// }



// 第二種方式(寫在JS)
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert("很會按欸");
    this.innerText = "按屁啊";
    this.style.color = "red";
})


var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.width="500";
    this.src = "cat2.jpeg";
})
img.addEventListener("mouseout", function(){
    this.width="300";
    this.src = "cat1.jpg";
})