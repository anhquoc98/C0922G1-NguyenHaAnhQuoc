function addtion() {
         let first = parseInt(document.getElementById("nhap1").value);
         let second = parseInt(document.getElementById("nhap2").value) ;
         let result ;
         result = first + second;
         document.getElementById("result").innerHTML =result;
 }
 function subtraction() {
     let first = parseInt(document.getElementById("nhap1").value);
     let second = parseInt(document.getElementById("nhap2").value) ;
     let result = first - second;
    document.getElementById("result").innerHTML = "subtraction result is: " + result;
}
 function multiplication() {
    let first = parseInt(document.getElementById("nhap1").value);
     let second = parseInt(document.getElementById("nhap2").value) ;
     let result = first * second;
     document.getElementById("result").innerHTML = "multiplication result is: " + result;
 }
 function division() {
     let first = parseInt(document.getElementById("nhap1").value);
     let second = parseInt(document.getElementById("nhap2").value) ;
     let result = first / second;
     document.getElementById("result").innerHTML = "division result is: " + result;

 }
