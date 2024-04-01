let global = {
    IMAGE_COUNT:5, //aantal figuren
    IMAGE_SIZE:48, //grootte van de figuur
    IMAGE_PATH_PREFIX:"images/", //map van de figuren
    IMAGE_PATH_SUFFIX:".png", //extensie van de figuren

    MOVE_DELAY:3000, //aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, //aantal hits
    timeoutid:0 //id van de timeout timer, zodat we die kunnen annuleren
}


const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click",start);

    let img = document.getElementById("bomb");
    img.addEventListener("click", geklikteImg);
};

const start = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.className = "hide";
    veranderImg();
    moveImage();
    setInterval(()=>console.log("new image"),1000);
}

const moveImage = () => {
    let img = document.getElementById("bomb");
    let playfield=document.getElementById("playField");
    let maxLeft=playfield.clientWidth - global.IMAGE_SIZE;
    let maxHeight=playfield.clientHeight - global.IMAGE_SIZE;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    img.style.left=left+"px";
    img.style.top=top+"px";

    img.removeEventListener("click", geklikteImg);
    img.addEventListener("click", geklikteImg);

    clearTimeout(global.timeoutid);
    global.timeoutid = setTimeout(veranderImg,global.MOVE_DELAY);
}

const veranderImg = () =>{
    let img = document.getElementById("bomb");
    let randomImage = Math.floor(Math.random()*global.IMAGE_COUNT);
    img.src = global.IMAGE_PATH_PREFIX + randomImage + global.IMAGE_PATH_SUFFIX;
}
const geklikteImg = () => {
    let output = document.getElementById("output");
    let img = document.getElementById("bomb");

    let source = img.src;
    let naamImg = source.substring(source.lastIndexOf("/") + 1);

   if(naamImg === "0.png"){
       stop();
    }else{
       global.score++;
       output.textContent = global.score;
       veranderImg();
       moveImage();
   }
}

const stop = () => {
    clearTimeout(global.timeoutid);
    window.alert("Game over! jouw score is: " + global.score);
}



window.addEventListener("load", setup);


