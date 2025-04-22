const container = document.getElementById("contenedor");
const contenedorCartas = document.getElementById("contenedor-cartas");

const frases = [
  "¡No te rindas! Cada repetición cuenta 💥",
  "Hoy es un buen día para superarte 🏋️‍♂️",
  "No estás cansado, estás más fuerte 💪",
  "Entrena como si fuera tu última vez 🔥",
  "El dolor es temporal, el orgullo es para siempre 🙌",
  "Con cada gota de sudor, te acercás más a tu meta 💯",
  "Disciplina > Motivación 🔁",
  "Transformá tu cuerpo, cambiá tu vida 🧠"
];

function mostrarFrase() {
    container.textContent = "Cargando frase motivacional...";

    // Promesa que simula el tiempo de espera para mostrar una frase
    const frasePromesa = new Promise((resolve) => {
      const tiempo = Math.floor(Math.random() * 3000);  // Simula un retardo aleatorio
      setTimeout(() => {
        const frase = frases[Math.floor(Math.random() * frases.length)];
        resolve(frase);  // Resolvemos la promesa con la frase seleccionada
      }, tiempo);
    });
  
    // Utilizando .then() para manejar la promesa
    frasePromesa.then((frase) => {
      container.textContent = frase;
    }).catch((error) => {
      container.textContent = "Hubo un problema al cargar la frase.";
      console.error(error);
    });
};

container.addEventListener("click", mostrarFrase);

let maquinasgym=[
    {
        nombre: "Máquina profesional prensa de pierna y sentadilla inclinada",
        descripcion: "Máquina profesional para realizar doble ejercicio de prensa de pierna y sentadilla inclinada.",
        img: "https://www.bodytone.eu/wp-content/uploads/2023/05/SG59_01.jpg"
    },
    {
        nombre: "Prensa Horizontal ",
        descripcion: "La prensa horizontal ofrece un doble ejercicio en una sola máquina, con asientos antibacterianos y antisudor, y poleas ultra silenciosas para una experiencia de entrenamiento efectiva y cómoda. Ideal para fortalecer la musculatura con un diseño de calidad.",
        img: "https://www.bodytone.eu/wp-content/uploads/importedmedia/FD06_02.jpg"
    },
    {
        nombre: "Máquina profesional extensiones de cuádriceps",
        descripcion: "Máquina profesional para realizar extensiones de cuádriceps aislados.",
        img: "https://www.bodytone.eu/wp-content/uploads/2023/05/SG52_01.jpg"
    },
    {
        nombre: "Femoral-Extensiones",
        descripcion: "Las Femoral-Extensiones son máquinas de peso con función de doble ejercicio. Cuentan con asientos antibacterianos y antisudor, así como poleas ultra silenciosas para una experiencia cómoda y efectiva de entrenamiento.",
        img: "https://www.bodytone.eu/wp-content/uploads/importedmedia/FD05_02.jpg"
    },
    {
        nombre: "Máquina profesional tríceps y bíceps con agarre cerrado",
        descripcion: "Máquina profesional para realizar tríceps y bíceps con agarre cerrado.",
        img: "https://www.bodytone.eu/wp-content/uploads/2023/05/SG32_01.jpg"
    },
    {
        nombre: "Biceps-Triceps",
        descripcion: "La máquina Biceps-Triceps 80 kg de Forza Dual ofrece un doble ejercicio para fortalecer brazos. Con asientos antibacterianos, poleas ultra silenciosas y capacidad de 80 kg.",
        img: "https://www.bodytone.eu/wp-content/uploads/importedmedia/FD03_03.jpg"
    },
    {
        nombre: "Dorsales-Remo Medio 80 kg",
        descripcion: "El producto Dorsales-Remo Medio 80 kg de Forza Dual es ideal para fortalecer la espalda y brazos. Con asientos antibacterianos, poleas ultra silenciosas y capacidad de doble ejercicio, es perfecto para un entrenamiento efectivo.",
        img: "https://www.bodytone.eu/wp-content/uploads/importedmedia/FD04_02.jpg"
    },
    {
        nombre: "Multipress 80 kg",
        descripcion: "La Multipress 80 kg de Forza Dual es una máquina de peso que ofrece la posibilidad de realizar dos ejercicios en un solo equipo. Con asientos antibacterianos y antisudor, junto con poleas ultra silenciosas, brinda comodidad y eficiencia en cada entrenamiento. Ideal para un entrenamiento completo y variado.",
        img: "https://www.bodytone.eu/wp-content/uploads/importedmedia/FD01_02.jpg"
    },
    {
        nombre: "Máquina Smith FBC01",
        descripcion: "La FBC01 es una máquina Smith indicada para realizar ejercicios de tren superior e inferior guiados. Gracias a su funcional diseño podrás realizar ejercicios como preses con barra, hombro o sentadillas de forma controlada y eficiente, sacandole el máximo partido a tus entrenamientos.",
        img: "https://www.bodytone.eu/wp-content/uploads/2022/11/FBC01_02.jpg"
    },
    {
        nombre: "EX2 Bicicleta Indoor Pro",
        descripcion: "Inspirada en el movimiento del ciclismo de carretera y del triatlón, la EX2 es una bicicleta indoor de gran rendimiento para deportistas profesionales y junto con el display M18 de BODYTONE un entrenador de potencia estimulante para todo tipo de atletas.",
        img: "https://www.bodytone.eu/wp-content/uploads/2022/11/EX2_01.png"
    },
    {
        nombre: "Elíptica profesional EVOE+",
        descripcion: "La elíptica EVOE+ es una máquina ideal para aquellas personas que quieran practicar deporte sin lastimar sus articulaciones. Gracias a su sistema libre de impactos, podrás realizar un entrenamiento cardiovascular intenso sin que tus articulaciones se resientan.",
        img: "https://www.bodytone.eu/wp-content/uploads/importedmedia/EVOE2_02.jpg"
    },
    {
        nombre: "Bicicleta Vertical Profesional EVOUTS+",
        descripcion: "Esta bicicleta estática cuenta con un diseño que libera a las rodillas de sobrecargas de peso, por lo que su uso es recomendable para aquellas personas que padezcan de dolores articulares o tengan lesiones en sus rodillas.",
        img: "https://www.bodytone.eu/wp-content/uploads/2022/11/EVOU_1_01.png"
    }
];

function mostrarMaquinas() {
    contenedorCartas.classList.add("row");

    maquinasgym.forEach(maquina => {
        const col = document.createElement("div");
        col.className = "col-sm-12 col-md-6 col-lg-4 mb-4";

        const body = document.createElement("div");
        body.className = "card-body";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm";
        card.style.cursor = "pointer";

        const img = document.createElement("img");
        img.src = maquina.img;
        img.alt = maquina.nombre;
        img.className = "card-img-top";

        const nombre = document.createElement("h5");
        nombre.className = "card-title";
        nombre.style.color = "blue";
        nombre.textContent = maquina.nombre;

        // Agregamos contenido al body
        body.appendChild(nombre);
        card.appendChild(img);
        card.appendChild(body);
        col.appendChild(card);
        contenedorCartas.appendChild(col);

        // Evento click: solo agrega la descripción si no fue agregada aún
        card.addEventListener("click", () => {
            const yaTieneDescripcion = body.querySelector("p");
            if (!yaTieneDescripcion) {
                const descripcion = document.createElement("p");
                descripcion.className = "card-text mt-2";
                descripcion.textContent = maquina.descripcion;
                body.appendChild(descripcion);
            };
        });
    });
};

mostrarMaquinas();