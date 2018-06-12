let bolillasElegidas = [91];
let unica = false;

//Creo la grilla de bolillas
  for (let x = 1; x <= 90; x++) {
    let bolilla = document.createElement('div');
    bolilla.className = 'bolilla';
    bolilla.id = x;    
    bolilla.innerText = x; 
    document.getElementById('container').appendChild(bolilla);
  }

//al clickear en tómbola se elige una ficha al azar 
  $('.tombola').click(
    function elegirBolilla () {
      let bolElegida = Math.floor(Math.random() * 90);
      console.log('random' + bolElegida);
      bolillasElegidas.forEach(element => {
        if (element === bolElegida) {
          elegirBolilla();
          unica = false;          
        }else{
          esRepetida = true;
        }
      });
      if (esRepetida) {
        bolillasElegidas.push(bolElegida);
       $('#' + bolElegida).addClass('elegida');
     }
    }
);
    
    // function elegirBolilla () {
    //   let bolElegida = Math.floor(Math.random() * 90);
    //   console.log('random' + bolElegida);
    //   bolillasElegidas.forEach(element => {
    //     if (element === bolElegida) {
    //      elegirBolilla();
    //     }else{
    //       let bolUnica = bolElegida;
    //       bolillasElegidas.push(bolUnica);
    //       $('#' + bolUnica).addClass('elegida');
    //     }
    //   });
    // }

