
    const divMinLength = 40;
    const divMaxLength = 195;
    const animationDurMin = 10;
    const animationDurMax = 30;

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    
    randomTop = getRandomNumber(divMinLength, winHeight - divMaxLength);
    randomLeft = getRandomNumber(divMinLength, winWidth - divMaxLength);
    animationdur = getRandomNumber(animationDurMin, animationDurMax);

    document.getElementById("randiv1").style.top = randomTop +"px";
    document.getElementById("randiv1").style.left = randomLeft +"px";
    document.getElementById("randiv1").style.animationDuration = animationdur +"s";


    randomTop = getRandomNumber(divMinLength, winHeight - divMaxLength);
    randomLeft = getRandomNumber(divMinLength, winWidth - divMaxLength);
    animationdur = getRandomNumber(animationDurMin, animationDurMax);

    document.getElementById("randiv2").style.top = randomTop +"px";
    document.getElementById("randiv2").style.left = randomLeft +"px";
    document.getElementById("randiv2").style.animationDuration = animationdur +"s";

    randomTop = getRandomNumber(divMinLength, winHeight - divMaxLength);
    randomLeft = getRandomNumber(divMinLength, winWidth - divMaxLength);
    animationdur = getRandomNumber(animationDurMin, animationDurMax);

    document.getElementById("randiv3").style.top = randomTop +"px";
    document.getElementById("randiv3").style.left = randomLeft +"px";
    document.getElementById("randiv3").style.animationDuration = animationdur +"s";


    randomTop = getRandomNumber(divMinLength, winHeight - divMaxLength);
    randomLeft = getRandomNumber(divMinLength, winWidth - divMaxLength);
    animationdur = getRandomNumber(animationDurMin, animationDurMax);

    document.getElementById("randiv4").style.top = randomTop +"px";
    document.getElementById("randiv4").style.left = randomLeft +"px";
    document.getElementById("randiv4").style.animationDuration = animationdur +"s";


    randomTop = getRandomNumber(divMinLength, winHeight - divMaxLength);
    randomLeft = getRandomNumber(divMinLength, winWidth - divMaxLength);
    animationdur = getRandomNumber(animationDurMin, animationDurMax);

    document.getElementById("randiv5").style.top = randomTop +"px";
    document.getElementById("randiv5").style.left = randomLeft +"px";
    document.getElementById("randiv5").style.animationDuration = animationdur +"s";

    randomTop = getRandomNumber(divMinLength, winHeight - divMaxLength);
    randomLeft = getRandomNumber(divMinLength, winWidth - divMaxLength);
    animationdur = getRandomNumber(animationDurMin, animationDurMax);

    document.getElementById("randiv6").style.top = randomTop +"px";
    document.getElementById("randiv6").style.left = randomLeft +"px";
    document.getElementById("randiv6").style.animationDuration = animationdur +"s";
    


    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min; 
    }