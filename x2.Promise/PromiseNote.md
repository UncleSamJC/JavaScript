# Promise 笔记 


## Promise构造函数 
Promise（excutor）{  }
 执行器(resolve,reject)=>{ }


## Promise.prototype.then
(onResolved,onRejected) => { }
成功 onResolved , (value)=>{ }
失败 onRejected, (reason)=>{ }


## Promise.prototype.catch

(onRejected)=>{ } 
只能做失败的回调不能做成功的回调
是一个特殊的封装，内部也是then方法实现的 


## Promise API 
resolve
reject 
all - 只有所有的都成功才成功；有一个失败了 就是直接失败; 成功的所有果实全保留，失败了只是失败的那个结果
race - 看谁块，第一个完成的就是最终的结果


## 改变Promise状态
1. resolve函数   resolve('ok') --- >  从pending 到resolve
2. reject函数  reject('error') ---->  从pending 到reject
3. throw “出问题了” ---->  从pending 到reject

## 指定多个回调都会执行吗？
如果Resolve ------>  都会
p.then(value=>{
    console.log(value);
})
p.then(value=>{
    alert(value);
})


## 改变状态和指定回调函数谁先谁后
如果是同步函数，先改状态，再then
如果是异步，先then，再改状态 

改变状态的时候，再

