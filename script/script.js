
var myImage = document.getElementById("mainImage");
var x = document.getElementById('endtext');
var button = document.getElementById('button1')
var imageArray = ["png/2.png", "png/3.png", "png/4.png", "png/5.png", "png/6.png", "png/7.png", "png/8.png", "png/9.png", "png/10.png", "png/11.png", "png/12.png", "png/13.png", "png/14.png", "png/15.png", "png/16.png", "png/17.png", "png/18.png", "png/19.png", "png/20.png", "png/21.png", "png/22.png"]
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    button.innerHTML="Move";

        if (imageIndex >= imageArray.length) {
        document.getElementById('button1').innerHTML="Start again";
        imageIndex = 0;
        }
}
