// 实现按照分数划分等级
let a = 1000;

// if(a < 60) {
// 	console.log('还需努力啊');
// }else if(a < 70) {
// 	console.log('马马虎虎');
// }else if(a < 80) {
// 	console.log('继续努力');
// }else if(a < 90) {
// 	console.log('还可以吧');
// }else{
// 	console.log('优秀');
// }
// 
var evaluationStandard = [
	{
		maxValue: 60,
		exec: function() {console.log('还需努力啊')}
	},{
		maxValue: 70,
		exec: function(){console.log('马马虎虎')}
	},{
		maxValue: 80,
		exec: function() {console.log('继续努力')}
	},{
		maxValue: 90,
		exec: function() {console.log('还可以吧')}
	},{
		maxValue: 101,
		exec: function() {console.log('优秀')}
	}
]
function defaultFunction(){
	console.log('please enter again!');
}
// find找到第一个符合条件的元素并返回，否则返回null
evaluationStandard.find(item => a < item.maxValue) ? evaluationStandard.find(item => a < item.maxValue).exec() : defaultFunction();