var util = require('util');
var events = require('events');

var Anythin = function (name) {
    this.name = name;
}

util.inherits(Anythin, events.EventEmitter);

//创建一只猫
var cat = new Anythin('黑猫');
//绑定事件
cat.on("activity", function (activity) {
    console.log(this.name + activity);
});

//创建一只老鼠
var mouse = new Anythin('老鼠');
//绑定事件
mouse.on("activity", function (activity) {
    console.log(this.name + activity);
});

//创建屋子的主人
var people = new Anythin('主人');
//绑定事件
people.on("activity", function (activity) {
    console.log(this.name + activity);
});

//创建主人的孩子
var child = new Anythin('婴儿');
//绑定事件
child.on("activity", function (activity) {
    console.log(this.name + activity);
});

console.log('静静的夜晚,主人一家正在酣睡......');
console.log('黑猫紧盯着黑暗的角落.....');

setTimeout(function(){
    console.log('黑猫再也坚持不住了......');
    cat.emit("activity",'睡着了');
    mouse.emit("activity",'爬出洞口');
    people.emit("activity",'闻声而起');
    child.emit("activity",'开始哭哭啼啼');
},1000);