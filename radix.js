/**
 * 
 * Did this for fun before starting the exercise so I didn't know that it was a further study question.
 * 
 * It works but not broken down like the instructions say to do so it doesn't pass the tests.
 */

const radixSort = (arr)=>{
    const bucket = {
        '0': [],
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': [],
        '9': [],
    }
    for(let i = 0; i< arr.length; i++){
        arr[i]= arr[i].toString()
    }

    let sorted = false;
    let charIdx = 1;
    while(!sorted){
        console.log('***** ITERATION',charIdx)
        sorted = true;
        while(arr.length > 0){
            const current = arr[arr.length - 1]
            if(current.length - charIdx < 0){
                bucket['0'].push(arr.pop())
            }else{
                bucket[current[current.length -charIdx]].push(arr.pop())
                sorted = false;
            }
        }
        for(let b in bucket){
            while(bucket[b].length > 0){
                arr.push(bucket[b].pop())
            }
            bucket[b].length =0;
        }
        charIdx++;
    }   
    return arr;
}

module.exports = radixSort;