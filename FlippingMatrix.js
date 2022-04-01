// Flipping the Matrix
// Reverse the rows or columns any number of times so that the
// sum of the elements of the upper left quadrant is maximal

const flippingMatrix = (matrix) => {

    let sum = 0;
        
    //Divide size by 2 to get quadrant size
    let quadSize = matrix.length/2;

    //Now for each cell in the upper quadrant, get the max value that could be flipped into that cell
    //
    //Iterate all rows in quadrant
    for(let r = 0; r < quadSize; r++)
    {
        //Iterate all columns in quadrant
        for(let c = 0; c < quadSize; c++)
        {
            //Grab the 4 possible values that could wind up in this location of the upper quadrant
            let p1 = matrix[r][(2*quadSize) - c - 1];
            let p2 = matrix[r][c];
            let p3 = matrix[(2*quadSize) - r - 1][c];
            let p4 = matrix[(2*quadSize) - r - 1][(2*quadSize) - c - 1];

            //Get the highest value possible in this cell
            sum += Math.max(p1, Math.max(p2, Math.max(p3, p4)));
        }
    }

    return sum;
}

const matrix1 = [[1, 2],
                [3, 4]];

const matrix2 = [[112, 42, 83, 119],
                [56, 125, 56, 49],
                [15, 78, 101, 43],
                [62, 98, 114, 108]];
                
const sum = flippingMatrix(matrix2);

// console.log(matrix2);
console.log(sum);