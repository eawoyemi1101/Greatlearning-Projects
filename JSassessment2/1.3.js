var numbersArray = [1, 2, 3];

function incrementArrayByTwo(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 2;
    }
}

incrementArrayByTwo(numbersArray);

console.log(numbersArray);
