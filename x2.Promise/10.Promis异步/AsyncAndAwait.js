const fs = require('fs');
const { clearScreenDown } = require('readline');
const uitl = require('util');
const myReadfile = uitl.promisify(fs.readFile);


//使用回调方式的方法实现 - Use callback to read three files
fs.readFile('./file1.html', (err, data1) => {
    if (err) throw err;
    fs.readFile('/file2.html'), (err, data2) => {
        if (err) throw err;
        fs.readFile('./file2.html', (err, data3) => {
            if (err) throw err;
            console.log(data1 + data2 + data3);
        })
    };
})


//Use async and await 

async function main() {
    try {
        let data1 = await myReadfile('./file1.html');
        let data2 = await myReadfile('./file2.html');
        let data3 = await myReadfile('./file3.html');

        console.log(data1 + data2 + data3);
    } catch (e) {
        console.log(e);
    }

}