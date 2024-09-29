function bubbleSort(arr) {
    const n = arr.length;
    // Traverse through all array elements
    for (let i = 0; i < n; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Example usage
const sampleArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", sampleArray);
bubbleSort(sampleArray);
console.log("Sorted array:", sampleArray);