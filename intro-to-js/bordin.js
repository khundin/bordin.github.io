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

function calAge() {
   const birthyear = prompt("Please enter your Birth year");
   alert ("ยินดีด้วย นายอยู่ประเทศนี้มา " + (new Date().getFullYear()-birthyear) + " ปีแล้ว");
}

function loadProfile() {
   const name = "Bordin Tharwee In"
   const province = "Surin, Thailand"
   document.getElementById("my-name").innerHTML = name;
   document.getElementById("my-province").innerHTML = province;
}
