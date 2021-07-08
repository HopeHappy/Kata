const sumLargestNumbers = data => {
    let numOfLarg;
    let numOfSecLarg;

    if (data[0] >= data[1]) {
        numOfLarg = data[0];
        numOfSecLarg = data[1];
    } else {
        numOfLarg = data[1];
        numOfSecLarg = data[0];
    }

    for (let i = 2; i < data.length; i++) {
        if (data[i] >= numOfLarg) {
            numOfSecLarg = numOfLarg;
            numOfLarg = data[i];
        } else if (data[i] >= numOfSecLarg && data[i] < numOfLarg) {
            numOfSecLarg = data[i];
        }
    }
    return (numOfLarg + numOfSecLarg);
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));