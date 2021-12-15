// Enter your code here

console.log('Enter your code here');
var div_ele = document.createElement("div");
div_ele.setAttribute("id", "result");
div_ele.setAttribute("class", "bg-light border rounded w-50 mx-auto mt-5 p-3");
div_ele.style.visibility = "hidden";
document.body.appendChild(div_ele);

function submitURL(){

  let ele = document.getElementById("comments").value.trim();
  let sub_ele_index = ele.indexOf("?");
  let url_regex = /^((http|https):\/\/(www\.))[a-zA-Z0-9-@:\/\_]+\.[a-zA-Z0-9\/\_\-]+\.?[a-zA-Z0-9]*/;
  let href_str = "";
  let param_str = "";
  let p=1;
  let u=1;

  if(sub_ele_index == -1 )                      // if no ?
    href_str = ele;

  else if(sub_ele_index == ele.length-1)        // if ? and no para after
    href_str = ele.substring(0, sub_ele_index);

  else{                                         // if ? and param are there
    href_str = ele.substring(0, sub_ele_index);
    param_str = decodeURIComponent(ele.substring(sub_ele_index+1, ele.length));
    p=0;
  }

  if(! url_regex.test(href_str)){                // if href url did not match regex
    window.alert("Enter valid URL");
    u=0;
  }
  else if(p)                                    // if valid href
    createElement(href_str);
 
  if(param_str && u){                           // if query parameters are present + valid url
   
    p_values = search_param(param_str);

    if(p_values){
      createElement(href_str);
      createElement_para(p_values);
    }
    else{
      document.getElementById("result").style.visibility = "hidden";
    }
   
  }
  return false;
}

function search_param(param_str){
  let p_value = [];
  let param_arr=[];
  let param_obj = new Object();
  let all_para_arr = param_str.split('&');
 
  for(let i=0; i<all_para_arr.length; i++){
    let one_para = all_para_arr[i].split("=");
    param_obj[one_para[0]] = one_para[1];
  }

  for(let entry of Object.keys(param_obj)) {
    if(typeof param_obj[entry] == "undefined" || param_obj[entry].length == 0){
      param_arr.push(entry);
    }
    p_value.push(`${entry} : ${param_obj[entry]}`);
  }
 
  if(param_arr.length != 0)  {                   // if incomplete parameter values
   
    if(param_arr.includes("")){
      window.alert(`seems like something is missing. Please enter complete and valid URL.`)
    }
    else{
      window.alert(`value missing for "${param_arr}". Please enter complete valid URL.`);
    }
  }
  else{                                         // every thing ok with param
      return p_value;
    }
  return 0;
}

function createElement(href_str){
  let div_ele = document.getElementById("result");
  div_ele.innerHTML = "";
  div_ele.style.visibility = "visible";

  let h1_ele = document.createElement("h1");
  h1_ele.setAttribute("class", "mt-2 mb-4");
  h1_ele.textContent = "Results";
  div_ele.appendChild(h1_ele);

  let h5_ele = document.createElement("h5");
  h5_ele.style.fontWeight = "bold";
  h5_ele.textContent = "URL";
  div_ele.appendChild(h5_ele);

  let p_ele = document.createElement("p");
  p_ele.textContent = href_str;
  div_ele.appendChild(p_ele);

}

function createElement_para(p_values){
  let div_ele = document.getElementById("result");

  let h5_eleq = document.createElement("h5");
  h5_eleq.style.fontWeight = "bold";
  h5_eleq.textContent = "Query Parameter";
  div_ele.appendChild(h5_eleq);

  let ul_ele = document.createElement("ul");
  ul_ele.style.listStyle="none";
  ul_ele.style.padding="0";
  div_ele.appendChild(ul_ele);

  for(val in p_values){
    let li_ele = document.createElement('li');
    li_ele.setAttribute("class", "para");
    li_ele.appendChild(document.createTextNode(`${p_values[val]}`));
    ul_ele.appendChild(li_ele);
  }

}

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
