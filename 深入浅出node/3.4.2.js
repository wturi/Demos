/*process.nextTick = function(callback) {
	if (process._exiting) return;

	if (tickDepth >= process.maxTickDepth) {
		maxTickWarn();
	}

	var tock = {
		callback: callback
	};
	if (process.domain) tock.domain = process.domain;
	nextTickQueue.push(tock);
	if (nexTickQueue.length) {
		pricess._needTickCallback();
	}
};*/


function foo() {
    console.error('foo');
}
 
process.nextTick(foo);
console.error('bar');

/*运行上面的代码，你从下面终端打印的信息会看到，
"bar"的输出在“foo”的前面。这就验证了上面的说法，foo()是在下一个时间点运行的。*/