    let contagem = document.getElementById("#Five");
    let hoje  = new Date();
    const dataDoCasamento = new Date('22 december 2022')
    let tempoParaOCasamento = dataDoCasamento - hoje
    let dias = Math.floor(tempoParaOCasamento/(1000 * 60 * 60 * 24))
    let horas = Math.floor(tempoParaOCasamento/(1000 * 60 * 60)) - dias * 24
    contagem.innerHTML = `${dias} dias  ${horas} horas`

    setTimeout (function(){
        alert('Não se esqueça de dar uma olhada na lista de presentes ;)');

    },400);

    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault()
        const nav = document.getElementById('nav'); 
        nav.classList.toggle('active');
    }

    btnMobile.addEventListener('click' , toggleMenu);
    btnMobile.addEventListener('touchstart' , toggleMenu);