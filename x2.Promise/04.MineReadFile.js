/*
Make a mineReadFile module

*/

function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}


mineReadFile('./xxx')
    .then((value) => {
        console.log(value);
    }, (reason) => {
        console.log(reason);
    })



//##########################util.promisefy

const util = require('util');
const fs = require('fs');

let m2ReadFile = util.promisify(fs.readFile);

m2ReadFile.then((value)=>{
console.log(value);
},(reason)=>{

})