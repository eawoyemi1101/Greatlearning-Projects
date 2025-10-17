const input = document.getElementById("input") //gets one element by its id

function reverseString(str) { //convert words into arrays of letters, reverse the array, make it into a string again then compares to the original
    "hello"
    return str.split(" ").reverse.join("")

}

function check() {
    const value = input.value;
    const reverse = reverseString(value);
    alert(reverse)

    if (value === reverse) {
        alert("It is a palindrome!");
    }  else {
        alert("It is not a palindrome!");
    }

    input.value = "" //clears value after one is checked
}
