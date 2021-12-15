// Enter your code here

console.log('Enter your code here');
let original_data = document.getElementById('intro').innerHTML;

function highlight(ele) {

  if(event.key === 'Enter') {
    let highlight_val = ele.value;

    let data = original_data;
    let highlight_regex = new RegExp("\\b" + highlight_val + "\\b", "ig");

    let result = data.replace(highlight_regex, (match) => {
      return `<span style="background-color:yellow;">${match}</span>`;
    });
    document.getElementById("intro").innerHTML = result;

    return false;
  }
}