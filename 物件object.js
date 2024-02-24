// 物件 object

// key  value
//  鍵     值

var person = {
    name:"家哲",
    age:26,
    is_male:true,
    print_name:function(){
        document.write(this.name);
    }
};

document.write(person.name);
document.write("<br/>");
document.write(person.age);
document.write("<br/>");
document.write(person.is_male);
document.write("<br/>");
person.print_name();
document.write("<br/>");


// 真實世界物件

var movie = {
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"陳昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true
        }
    ]
};
document.write(movie.title);
document.write("<br/>");
document.write(movie.maker);
document.write("<br/>");
document.write(movie.duration);
document.write("<br/>");
document.write(movie.actors[0].name);
document.write("<br/>");
document.write(movie.actors[1].age);