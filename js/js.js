let bolillasElegidas = [91];

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
        if (element !== bolElegida) {
          let bolUnica = bolElegida;
          bolillasElegidas.push(bolUnica);
          $('#' + bolUnica).addClass('elegida');
        }else{
          elegirBolilla();
        }
      });
    }
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
  );

