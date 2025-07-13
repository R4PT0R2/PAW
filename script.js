if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered: ', registration);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

document.getElementById('checkDateBtn').addEventListener('click', () => {
    const dateInput = document.getElementById('dateInput').value;
    const outputMessage = document.getElementById('outputMessage');

    if (dateInput === "01.02.2006") {
        outputMessage.innerHTML = `

*****************************************************
* *
* ГЮЛЬНИСЕ, Я ЛЮБЛЮ ТЕБЯ!                  *
* *
*****************************************************


             _    _          
            ( \\--/ )         
           /       \\         
           |  O O  |         
           \\   ^   /         
            \`-----\`          
                \\             
                 V            
               _    _          
              ( \\--/ )         
             /       \\         
             |  O O  |         
             \\   ^   /         
              \`-----\`          
     _    _                     
    ( \\--/ )                   
   /       \\                   
   |  O O  |                   
   \\   ^   /                   
    \`-----\`                    

               _    _          
              ( \\--/ )         
             /       \\         
             |  O O  |         
             \\   ^   /         
              \`-----\`          
                 \\ /           
                  X            
                 / \\           
     _    _                     
    ( \\--/ )                   
   /       \\                   
   |  O O  |                   
   \\   ^   /                   
    \`-----\`                    
           (Поцелуй!)
`;
    } else {
        outputMessage.textContent = "Дата не совпадает. Попробуйте еще раз.";
    }
});