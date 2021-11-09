const fs = require('fs');

//回调函数的形式读取
// fs.readFile('../json/people.json',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

//Promise 读取

const p = new Promise((resolve, reject) => {
    fs.readFile('../json/people.json', (err, data) => {
        if (err) reject(err);
        resolve(data.toString());
    })

})

p.then((value) => {
    console.log("use promise");
    console.log(value);

}, (reason) => {
    console.log(reason);
})
