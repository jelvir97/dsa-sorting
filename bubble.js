function bubbleSort(arr) {
    let swapped = true;
    let sortedIdx = 0;
    while(swapped){
        swapped = false;
        for(let i = 0; i< arr.length - sortedIdx; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] =temp;
                swapped = true;
            }
        }
        sortedIdx++;
    }
    return arr;
}

module.exports = bubbleSort;