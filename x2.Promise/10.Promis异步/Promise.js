function Promise(executor) {
    //执行器函数是同步调用的

    this.PromiseState = 'pending';
    this.PromiseResult = null;

    const self = this;
    //为了解决指向window的问题 

    function resolve(data) {
        //Set status
        self.PromiseState = 'fulfilled';
        //Set Data
        self.PromiseResult = data;
    }

    function reject(data) {
        //Set status
        self.PromiseState = 'rejected';
        //Set Data
        self.PromiseResult = data;

    }

    try {
       executor(resolve, reject) 
    } catch (e) {
        reject(e);
    }
    

}

Promise.prototype.then = function (onResolved, onRejected) {


}