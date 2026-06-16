function calcularEquilibrio(nivel) {
    const painel = document.getElementById("painel-resultado");
    const indicador = document.getElementById("indicador");
    const titulo = document.getElementById("status-titulo");
    const descricao = document.getElementById("status-descricao");

    painel.classList.remove("escondido");
    indicador.className = "indicador"; // Reseta classes de cores

    if (nivel === 'baixo') {
        indicador.style.width = "100%";
        indicador.classList.add("cor-equilibrio");
        titulo.innerText = "⚖️ Sistema em Equilíbrio!";
        descricao.innerText = "Sua pegada de consumo permite que a produção ocorra de forma sustentável. A natureza consegue repor o que você consome.";
    } 
    else if (nivel === 'moderado') {
        indicador.style.width = "60%";
        indicador.classList.add("cor-alerta");
        titulo.innerText = "⚠️ Alerta de Sobrecarga";
        descricao.innerText = "Você está na média do mercado atual. A produção precisa correr para te atender, gerando uma quantidade razoável de resíduos e poluição.";
    } 
    else if (nivel === 'alto') {
        indicador.style.width = "25%";
        indicador.classList.add("cor-perigo");
        titulo.innerText = "🚨 Balança Quebrada: Consumismo Alto";
        descricao.innerText = "A produção em massa é forçada ao limite! Isso exige extração predatória de recursos e satura o planeta com lixo e gases estufa.";
    }
}
