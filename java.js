let colorInput = document.getElementById('color');
let hexInput = document.getElementById('hex');

colorInput.addEventListener('input', function changedColor() {
    let color = colorInput.value;
    hexInput.value = color;
    document.getElementById("myDiv").style.backgroundColor = color;
})

function changed() {
    //getting image which one is to modify
    let img = document.getElementById('surf');
    let slider = document.getElementById("rangeBlur").value;
    //indication of the style that we want to change and showing a value which will change blur of picture
    img.style.filter = "blur(" + slider + "px)";
}
let slider = document.getElementById("rangeBlur").value;
console.log(slider);