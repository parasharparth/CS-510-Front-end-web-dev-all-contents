// Enter your code here

const input = document.querySelector('input');
const result = document.getElementById("result");

input.addEventListener('input', updateValue);

function updateValue(e) {
  let input_val = input.value;
  let deci_point = (input_val - Math.floor(input_val)) !== 0;
 
  if(typeof input_val[input_val.length-1] === "undefined" || parseInt(input_val)<=0 || deci_point){
    result.innerHTML = "Please enter valid positive number (>0)";
  }
  else if(isPalindrom(input_val))
    result.innerHTML = `<span style="color:green;">Yes, This is a palindrome!</span>`;
  else
    result.innerHTML = `<span style="color:red;">No, Try again.</span>`;
}

function isPalindrom(in_str){
  let reverse_in_str = in_str.split("").reverse().join("");
  return in_str === reverse_in_str;
}