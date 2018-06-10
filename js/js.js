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
    () => {
      let bolElegida = Math.floor(Math.random() * 90);
      console.log(bolElegida);
    }
  );