const arr = [98,5,7,12,96,2,82,56,21,99,23,97]


function secondLargest(arr) {
 let firstLargest = -Infinity;
 let secondLargest = - Infinity;

 for(let i = 0 ; i<arr.length;i++){
    if(arr[i] > firstLargest){
        secondLargest = firstLargest;
        firstLargest = arr[i];
    }else if(arr[i] > secondLargest){
        secondLargest = arr[i];
    }
 }
 return secondLargest;
}


console.log(secondLargest(arr))