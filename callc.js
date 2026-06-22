function add(){
    let a= parseFloat(document.getElementById("num1").value);
    let b= parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent="النتيجة"+(a+b);
}
function cut(){
    let a= parseFloat(document.getElementById("num1").value);
    let b= parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent="النتيجة"+(a-b);
}
function xx(){
    let a= parseFloat(document.getElementById("num1").value);
    let b= parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent="النتيجة"+(a*b);
}
function yy(){
    let a= parseFloat(document.getElementById("num1").value);
    let b= parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent=" النتيجة" +(a/b);
}