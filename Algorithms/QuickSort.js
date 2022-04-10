let QuickSort = (items) => {
    QuickSortR(items, 0, items.length - 1);
}

let QuickSortR = (items, left, right) => {
    if(left >= right) return;

    let pivot = items[Math.floor((left + right) / 2)];

    let index = partition(items, left, right, pivot);
    QuickSortR(items, left, index - 1);
    QuickSortR(items, index, right);
}

let partition = (items, left, right, pivot) => {
    while(left <= right) {
        while(items[left] < pivot) {
            left++;
        }

        while(items[right] > pivot) {
            right--;
        }

        if(left <= right) {
            swap(items, left, right);
            left++;
            right--;
        }    
    }
    return left;
}

let swap = (items, left, right) => {
    let tmp = items[left];
    items[left] = items[right];
    items[right] = tmp;
}

let items = [];
for(let i = 0; i < 100; i++) {
    items[i] = Math.round(Math.random() * 100);
}

console.log(items);

QuickSort(items);

console.log(items);

