function sum(x, y, callback){
    var total = x + y;
    callback(total);
}

var print = function(toPrint){
    console.log(toPrint);
}

sum(4, 5, print)