function changed() {
    //getting image which one is to modify
    let img = document.getElementById('surf');
    //indication of the style that we want to change and showing a value which will change blur of picture
    img.style.filter = "blur(" + document.getElementById("rangeBlur").value + "px)";
}