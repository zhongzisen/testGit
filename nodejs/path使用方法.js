let path = require('path')

console.log(path.resolve(__dirname,'src'))
console.log(path.basename('webpackVue/dist/bundle.js'))

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test/', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径，注意
console.log('resolve : ' + path.resolve('./','bundle.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));

console.log(path.resolve('/foo/bar', '/tmp/file/','main.html'));
console.log(path.resolve('/wwwroot', 'static_files/png/', '/gif/image.gif'));

console.log(path.relative('webpackVue/dist/', 'webpackVue'))
console.log(path.parse(path.resolve('main.js')))