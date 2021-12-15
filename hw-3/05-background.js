// Enter your code here
let timer;
let ut = document.getElementById("interval").value;
timer = setInterval(function() {
  change_bg_color();
}, ut*1000);

function btnClick(){

  let btn = document.getElementById("changeBtn");

  if(btn.value === "Stop"){
    btn.value = "Start";
    btn.className = "btn btn-primary";
    document.getElementById("interval").disabled = false;
    clearInterval(timer);
  }

  else if(btn.value === "Start"){
    btn.value = "Stop";
    btn.className = "btn btn-danger";
    document.getElementById("interval").disabled = true;
    let user_time = document.getElementById("interval").value;
    timer = setInterval(function() {
      change_bg_color();
    }, user_time*1000);
  }
 
  return false;
}

function change_bg_color(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
}