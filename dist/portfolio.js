window.onload = function (){
    const images =
    document.getElementsByTagName("img");
    for(var x=1; x < images.length; x++) {
        images[x].addEventListener('click', function(){
            let loc = this.src;

            document.getElementById('featureImg').src = loc;
        });
    }
}
