const cronometro = document.getElementById('cronometro');
const inicioPausa = document.getElementById('boton-inicio-pausa');
const reiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.textContent = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0'+ unidadDeTiempo : unidadDeTiempo;
}

inicioPausa.addEventListener('click', () => {
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = setInterval(actualizarCronometro, 1000);
    inicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    inicioPausa.classList.remove('iniciar');
    inicioPausa.classList.add('pausar');
    estadoCronometro = 'iniciado';
}
  else {
    clearInterval(intervaloDeTiempo);
    inicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    inicioPausa.classList.remove('pausar');
    inicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

reiniciar.addEventListener('click', () => {
  clearInterval(intervaloDeTiempo);
  [horas, minutos, segundos] = [0, 0, 0];
  cronometro.textContent = '00:00:00';
  inicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  inicioPausa.classList.remove('pausar');
  inicioPausa.classList.add('iniciar');
  estadoCronometro = 'pausado';
});
