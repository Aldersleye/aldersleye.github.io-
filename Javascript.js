window.onload = rotate;

var theAd = 0;
var adImages = new Array("images/phd-epidemiology-hero-1900x500.jpg","images/School-yard-Banner-image-1900-x-500.png","images/Core-value-2-1900x500.jpg");

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 5 * 1000);
}
