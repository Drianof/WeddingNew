function postToGoogle() {
    let field1 = $("#nome").val();
    let field2 = $("#telefone").val();
    let field3 = $("#sozinho").val();
    let field4 = $("#familia").val();
    
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScqz-eEUvvCAJHLhP40kmwAsLPKxUzdytU3ipt51BMtxEi19g/formResponse",
        
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
            "entry.118463827": field1,
            "entry.1020687886": field2,
            "entry.2020850747": field3,
            "entry.2020850747": field4
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
        $('#Four').trigger('reset');
         alert("Informações enviadas com sucesso!");
        },
        error: function (x, y, z) {
        $('#contact').trigger('reset');
        }
    });
    return false;
    }
    
    
    
    let contagem = document.getElementById("Five");
    let hoje  = new Date();
    const dataDoCasamento = new Date('12/09/2022 11:11')
    let tempoParaOCasamento = dataDoCasamento - hoje
    let dias = Math.floor(tempoParaOCasamento/(1000 * 60 * 60 * 24))
    let horas = Math.floor(tempoParaOCasamento/(1000 * 60 * 60)) - dias * 24
    contagem.innerHTML = `${dias} dias  ${horas} horas`