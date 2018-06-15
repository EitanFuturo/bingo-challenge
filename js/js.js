let bolillas = [];

//Creo la grilla de bolillas
for (let x = 1; x <= 90; x++) {
  let bolilla = document.createElement('div');
  bolilla.className = 'bolilla';
  bolilla.id = x;    
  bolilla.innerText = x; 
  document.getElementById('container').appendChild(bolilla);
  bolillas.push(x);

}
//al clickear en tómbola se elige una ficha al azar 
  $('.tombola').click(
    function elegir () {
      let bolElegida = Math.floor(Math.random() * bolillas.length);
      $('#container').children().removeClass('ultima')      
      $('#' + bolillas[bolElegida]).addClass('elegida');
      $('#' + bolillas[bolElegida]).addClass('ultima');   
      bolillas.splice(bolElegida, 1);
    }
  );

document.addEventListener('keydown', (e) => {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
  reiniciar();
});

function reiniciar () {
  $('#container').children().removeClass('elegida');        
  $('#container').children().removeClass('ultima');
  bolillas = [];          
  for (let x = 1; x <= 90; x++) {
    bolillas.push(x);
  }
}