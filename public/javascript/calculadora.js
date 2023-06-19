let funcionPredeterminada = () => {
    const formulario =document.getElementById('formulario')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valorPorHora=parseFloat(document.getElementById('valorPorHora').value)
        let interfazHoras=parseFloat(document.getElementById('interfazHoras').value)
        let experienciaUsuarioHoras=parseFloat(document.getElementById('experienciaUsuarioHoras').value)
        let htmlHoras=parseFloat(document.getElementById('htmlHoras').value)
        let cssHoras=parseFloat(document.getElementById('cssHoras').value)
        let javaScriptHoras=parseFloat(document.getElementById('javaScriptHoras').value)

        let resultado=valorPorHora*(interfazHoras+experienciaUsuarioHoras+htmlHoras+cssHoras+javaScriptHoras);
        document.getElementById('valorTotal').value="$"+resultado
      })
}

funcionPredeterminada();