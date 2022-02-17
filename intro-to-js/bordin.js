function askMyName() {
    const name = prompt("Please enter your name");
 
    if (name != null) {
       document.getElementById("text-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("text-name").innerHTML
    alert(h1message + '  ไม่มีหรอกครับจ่า ผมโยนเข้าป่าหมดแล้ว');
 }