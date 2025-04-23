const btnBuscar = document.getElementById('buscar');
const selectGrupo = document.getElementById('grupoMuscular');
const tabla = document.getElementById('tablaEjercicios');

const rutinas = JSON.parse(localStorage.getItem('rutinas')) || [];
const ejerciciosGuardados = JSON.parse(localStorage.getItem('ejercicios')) || [];

btnBuscar.addEventListener('click', () => {
  const grupoSeleccionado = selectGrupo.value;
  tabla.innerHTML = '';

  if (!grupoSeleccionado) {
    alert('Por favor, selecciona un grupo muscular');
    return;
  }

  // Actualizar texto del grupo seleccionado
  const nombreGrupo = selectGrupo.selectedOptions[0].text;
  tituloGrupo.textContent = `Grupo seleccionado: ${nombreGrupo}`;

  // Recorrer las rutinas para buscar las que coincidan
  rutinas.forEach((rutina, index) => {
    if (rutina.musculo === grupoSeleccionado) {
      const bloqueEjercicios = ejerciciosGuardados.find(e => e.rutinaIndex === index);

      if (bloqueEjercicios) {
        bloqueEjercicios.ejercicios.forEach((ejercicio, i) => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${i + 1}</td>
            <td>${ejercicio.nombre}</td>
            <td>${ejercicio.series}</td>
            <td>${ejercicio.repeticiones}</td>
            <td>${ejercicio.peso}</td>
            <td><input type="checkbox" class="form-check-input cumplimiento-check"></td>
          `;
          tabla.appendChild(fila);
        });
      }
    }
  });
});


//porcentajes
const btnGuardarCumplimiento = document.getElementById('guardarCumplimiento');
const barraProgreso = document.getElementById('barraProgreso');

btnGuardarCumplimiento.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.cumplimiento-check');

  if (checkboxes.length === 0) {
    alert("Primero buscá una rutina para marcar.");
    return;
  }

  let cumplidos = 0;

  checkboxes.forEach(chk => {
    if (chk.checked) {
      cumplidos++;
    }
  });

  const total = checkboxes.length;
  const porcentaje = Math.round((cumplidos / total) * 100);

  // Mostrar el porcentaje en la barra
  barraProgreso.style.width = `${porcentaje}%`;
  barraProgreso.innerText = `${porcentaje}%`;
  barraProgreso.setAttribute('aria-valuenow', porcentaje);

  alert(`Guardado ✅ Completaste el ${porcentaje}% de tus ejercicios`);
});

const btnReiniciar = document.getElementById("reiniciar");

btnReiniciar.addEventListener("click", () => {
  if (confirm("¿Estás seguro de que quieres borrar todos tus datos?")) {
    localStorage.clear();
    alert("Todos los datos han sido eliminados. La página se va a recargar.");
    location.reload(); 
  };
});
