function create2DArray( rowSize, colSize ){
    var arr = [];

    // logic process and create a 2-D array
    for( var i=0; i<rowSize; i++ ){
        arr[i] = []
        for( var j=0; j<colSize; j++ ){
            arr[i][j] = i + " " + j
        }
    }

    return arr
}


var res = create2DArray( 4, 2 )

console.log(res)