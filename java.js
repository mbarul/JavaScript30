 //Slider - value
 let sliderV = document.getElementById("rangeBlur");
 console.log("sliderV");

 //Image
 /*let imageBlur = document.getElementById("surf").style.filter = "blur(0px)";

 function changed() {
      let obj = document.getElementById('surf').style.filter = 'blur(${blur}px)';
      obj.style = "blur(" + document.getElementById("rangeBlur").value + "px)";
  }
imageBlur.innerHTML = blur;
  blur.oninput = function changeBlur() {
      imageBlur.innerHTML = this.value;
  }
  document.getElementById("rangeBlur").addEventListener('input', changeBlur);