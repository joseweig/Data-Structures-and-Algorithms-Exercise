const MergeSort = (array) => {
    MergeSortR(array, new Array(array.length), 0, array.length - 1);
}

const MergeSortR = (array, temp, leftStart, rightEnd) => {
    if(leftStart >= rightEnd) return;

    let middle = Math.floor((leftStart + rightEnd) / 2);
    MergeSortR(array, temp, leftStart, middle);
    MergeSortR(array, temp, middle + 1, rightEnd);
    mergeHalves(array, temp, leftStart, rightEnd);
}

const mergeHalves = (array, temp, leftStart, rightEnd) => {
    let leftEnd = Math.floor((rightEnd + leftStart) / 2);
    let rightStart = leftEnd + 1;
    let size = rightEnd - leftStart + 1;

    let left = leftStart;
    let right = rightStart;
    let index = leftStart;

    while(left <= leftEnd && right <= rightEnd) {
        if(array[left] <= array[right]) {
            temp[index] = array[left];
            left++;
        } else {
            temp[index] = array[right];
            right++;
        }
        index++;
    }

    arraycopy(array, left, temp, index, leftEnd - left + 1);
    arraycopy(array, right, temp, index, rightEnd - right + 1);
    arraycopy(temp, leftStart, array, leftStart, size);
}

let arraycopy = (src, srcPos, dst, dstPos, length) => {
    while (length--) dst[dstPos++] = src[srcPos++]; return dst;
}

let items = [];
for(let i = 0; i < 100; i++) {
    items[i] = Math.round(Math.random() * 100);
}

console.log(items);

MergeSort(items);

console.log(items);
