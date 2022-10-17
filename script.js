
    var contagem = new Date('19/03/2023 11:11')
    let contagem = document.getElementById("Five");
    let hoje  = new Date();
    const dataDoCasamento = new Date('19/03/2023 11:11')
    let tempoParaOCasamento = dataDoCasamento - hoje
    let dias = Math.floor(tempoParaOCasamento/(1000 * 60 * 60 * 24))
    let horas = Math.floor(tempoParaOCasamento/(1000 * 60 * 60)) - dias * 24
    contagem.innerHTML = `${dias} dias  ${horas} horas`

    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu() {
        const nav = document.getElementById('nav'); 
        nav.classList.toggle('active');
    }

    btnMobile.addEventListener('click' , toggleMenu);