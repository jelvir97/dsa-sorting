function merge(arr1, arr2) {
    const newArr = [];
    let p1 = 0
    let p2 = 0
    while(arr1.length > p1 && arr2.length > p2){
        if(arr1[p1] > arr2[p2]){
            newArr.push(arr2[p2])
            p2++;
        }else{
            newArr.push(arr1[p1])
            p1++;
        }
    }

    while(arr1.length > p1){
        newArr.push(arr1[p1])
        p1++;
    }

    while(arr2.length > p2){
        newArr.push(arr2[p2])
        p2++;
    }

    return newArr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = arr.length/2
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

module.exports = { merge, mergeSort};