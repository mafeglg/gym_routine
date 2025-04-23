const btnregistrar=document.getElementById("registrar");
const btnguardar=document.getElementById("guardar");

// Obtener las rutinas y ejercicios  guardadas en el localStorage
let rutinas = localStorage.getItem('rutinas');
let rutina = rutinas ? JSON.parse(rutinas) : [];

let ejercicio = localStorage.getItem('ejercicios');
let ejercicios = ejercicio ? JSON.parse(ejercicio) : [];

btnregistrar.addEventListener('click', (e)=>{
    e.preventDefault();
    let dia=document.getElementById("dia").value;
    let musculo=document.getElementById("musculo").value;
    let cantidad=document.getElementById("cantidad").value;

    let registro={
        dia,
        musculo,
        cantidad
    };
    rutina.push(registro);
    localStorage.setItem('rutinas', JSON.stringify(rutina));
    imprimirRutina();
});

function imprimirRutina() {
    const tbody = document.getElementById('rutina');
    tbody.innerHTML = ''; // Limpia la tabla antes de agregar nuevas filas

    // Obtenemos el último registro
    const ultimoRegistro = rutina[rutina.length - 1];

    for (let i = 1; i <= parseInt(ultimoRegistro.cantidad); i++) {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <th scope="row">${i}</th>
            <td><input type="text" class="form-control" placeholder="Nombre del ejercicio ${i}"></td>
            <td><input type="number" class="form-control" placeholder="Series"></td>
            <td><input type="number" class="form-control" placeholder="Repeticiones"></td>
            <td><input type="number" class="form-control" placeholder="Peso en kilos"></td>

        `;

        tbody.appendChild(fila);
    };
};

btnguardar.addEventListener('click', () => {
    const filas = document.querySelectorAll('#rutina tr');

    // Creamos un array temporal para los ejercicios actuales
    let ejerciciosTemp = [];

    filas.forEach((fila, index) => {
        const inputs = fila.querySelectorAll('input');
        const nombre = inputs[0].value;
        const series = inputs[1].value;
        const repeticiones = inputs[2].value;
        const peso= inputs[3].value;

        if (!nombre || !series || !repeticiones || !peso ) {
            alert(`Por favor completa todos los campos del ejercicio ${index + 1}`);
            return;
        };

        let ejercicio = {
            nombre,
            series,
            repeticiones,
            peso
        };

        ejerciciosTemp.push(ejercicio);
    });

    // Guardamos en el array general
    ejercicios.push({
        rutinaIndex: rutina.length - 1, // Vinculamos los ejercicios con la última rutina creada
        ejercicios: ejerciciosTemp
    });

    localStorage.setItem('ejercicios', JSON.stringify(ejercicios));

    alert('Ejercicios guardados correctamente ✅');
});

