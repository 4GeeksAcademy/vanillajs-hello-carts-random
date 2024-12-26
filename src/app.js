
window.onload = function() {
  
  let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q','K'];
  let pools = ['<i class="fas fa-heart" style="font-size:70px;color:red;"></i>', '<img src="diamante.jpg" alt="Trulli" width="70" height="70">', '&#9824', '&#9827'];

  let numerosaleatorios = Math.floor(Math.random() * numeros.length);
  let poolaleatorio = Math.floor(Math.random()*pools.length);

  let pool_aleatorio = pools[poolaleatorio];
  let numero_aleatorio = numeros[numerosaleatorios];

  console.log(pool_aleatorio);

  document.querySelector("#numero").innerHTML = numero_aleatorio;
  document.querySelector("#pool").innerHTML = pool_aleatorio;
  document.querySelector("#pool2").innerHTML = pool_aleatorio;
  
}



