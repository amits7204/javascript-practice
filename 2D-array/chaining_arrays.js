var example = '5 10 100 2 10'
example = example.split(' ').map(function(val){
    return parseInt(val)
})

console.log(example);
//[ 5, 10, 100, 2, 10 ]
// All the values have been converted from string to integers in this case
