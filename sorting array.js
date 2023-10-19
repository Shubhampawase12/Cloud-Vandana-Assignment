function sortDescending(inputArray) {
    return inputArray.sort(function(a, b) {
        return b - a;
    });
}
var userInput = prompt("Enter numbers separated by commas:");
var inputArray = userInput.split(',').map(function(item) {
    return parseFloat(item);
});
if (inputArray.some(isNaN)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    var sortedArray = sortDescending(inputArray);
    console.log("Original Array: " + inputArray.join(', '));
    console.log("Sorted Array (Descending Order): " + sortedArray.join(', '));
}
