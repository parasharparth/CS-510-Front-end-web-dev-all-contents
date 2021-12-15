function displayOnConsole(){

    let inputs = document.getElementById("form").elements;
  
  console.group("========= Form Submission =========");
  
    console.log("Name: "+inputs["userName"].value);
  
    console.log("email: "+inputs["email"].value);
  
    console.log("Class Registration: "+ document.getElementById("reg-status").value);
  
    let class_sec = inputs["class-section"].value;
    class_sec ? console.log("Class Section: " + class_sec) : console.log("Class Section: no selection");
  
    let arr = [];
    let check_ele = document.getElementsByName("other_course");
    for(let i=0; i<check_ele.length; i++){
      if(check_ele[i].checked){
        arr.push(check_ele[i].value);
      }
    }
    if(arr.length == 0)
      console.log("Courses Taken: none of the courses");
    else
      console.log("Courses Taken: "+ arr);
  
    let feed = inputs["feedback"].value;
    if(feed.trim() == "")
      console.log("Feedback: no feedback")
    else
      console.log("Feedback: " + feed.trim())
  
  console.groupEnd();
  return false;
  }