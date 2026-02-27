function trocarPagina(id){

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(p => p.classList.remove("ativa"));

    document.getElementById(id).classList.add("ativa");

    chuvaDeCoracoes();
}

/* animação ao trocar de página */
function chuvaDeCoracoes(){

    for(let i=0;i<25;i++){

        const h = document.createElement("div");
        h.className = "heart-fall";

        const emojis = ["💖","💗","💘","💕","💞","💓"];
        h.innerText = emojis[Math.floor(Math.random()*emojis.length)];

        h.style.left = Math.random() * window.innerWidth + "px";
        h.style.animationDuration = (1.5 + Math.random()*1.5) + "s";

        document.body.appendChild(h);

        setTimeout(()=>{
            h.remove();
        },3000);
    }

}


/* contador com meses */

const inicio = new Date(2025,8,21,0,0,0);

function atualizarTempo(){

    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if(dias < 0){
        meses--;
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    if(meses < 0){
        anos--;
        meses += 12;
    }

    const totalMeses = anos * 12 + meses;

    let diff = agora - inicio;
    if(diff < 0) diff = 0;

    const totalSeg = Math.floor(diff / 1000);

    const horas = Math.floor((totalSeg % (60*60*24)) / 3600);
    const minutos = Math.floor((totalSeg % 3600) / 60);
    const segundos = totalSeg % 60;

    document.getElementById("meses").innerText = totalMeses;
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

setInterval(atualizarTempo,1000);
atualizarTempo();


const audio = document.getElementById("audio");

function tocarMusica(){
    audio.play();
}

function pausarMusica(){
    audio.pause();
}