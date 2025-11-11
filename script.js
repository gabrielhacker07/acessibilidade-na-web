// ... Lógica de Acessibilidade ...
document.addEventListener('DOMContentLoaded', function(){
    // ... Código da acessibilidade (aumentar/diminuir fonte, contraste) ...

    // --- CÓDIGO DO CONTADOR REGRESSIVO ---
    const dataDoFestival = new Date('Dec 20, 2026 18:00:00').getTime(); // Defina sua data real
    
    const contadorRegressivo = setInterval(function() {
        // ... Lógica de cálculo (dias, horas, minutos, segundos) ...
        
        // Exibe o resultado no elemento com ID "contador"
        const elementoContador = document.getElementById("contador");
        
        // ... (resto da lógica de atualização do innerHTML) ...
        
        // ... (lógica de parada do clearInterval) ...
    }, 1000); 

});
 
// --- ScrollReveal com IDs atualizados ---
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#sobre-festival', { delay: 500 }); // Antigo #tropicalia
ScrollReveal().reveal('#programacao', { delay: 500 });  // Antigo #galeria
ScrollReveal().reveal('#contato', { delay: 500 });