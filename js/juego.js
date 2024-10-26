//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"Historia",
        titulo:"¿Cuál fue la cultura preincaica que destacó por sus líneas y geoglifos en el desierto?",
        opcionA:"Moche",
        opcionB:"Nazca",
        opcionC:"Chavín",
        opcionD:"Tiahuanaco",
        correcta:"b"
    },
    {
        id:2,
        categoria:"Historia",
        titulo:"¿En qué año proclamó José de San Martín la independencia del Perú?",
        opcionA:"1810",
        opcionB:"1821",
        opcionC:"1824",
        opcionD:"1809",
        correcta:"b"
    },
    {
        id:3,
        categoria:"Historia",
        titulo:"¿Quién fue el último emperador del Imperio Inca antes de la llegada de los españoles?",
        opcionA:"Pachacútec",
        opcionB:"Huáscar",
        opcionC:"Atahualpa",
        opcionD:"Manco Inca",
        correcta:"c"
    },
    {
        id:4,
        categoria:"Historia",
        titulo:"¿Qué civilización construyó la ciudadela de Machu Picchu?",
        opcionA:"Chimú ",
        opcionB:"Nazca",
        opcionC:"Tiahuanaco",
        opcionD:"Inca",
        correcta:"d"
    },
    {
        id:5,
        categoria:"Historia",
        titulo:"¿Qué batalla fue decisiva para sellar la independencia del Perú?",
        opcionA:"Batalla de Ayacucho",
        opcionB:"Batalla de Junín",
        opcionC:"Batalla de Maipú",
        opcionD:"Batalla de Pichincha",
        correcta:"a"
    },
    {
        id:6,
        categoria:"Historia",
        titulo:" ¿Qué cronista destacó por describir la historia del Imperio Inca y la conquista española?",
        opcionA:"Garcilaso de la Vega",
        opcionB:"Pedro Cieza de León ",
        opcionC:" Felipe Guamán Poma de Ayala",
        opcionD:" Cristóbal Colón",
        correcta:"a"
    },
    {
        id:7,
        categoria:"Historia",
        titulo:"¿Dónde se encontraba la capital del Virreinato del Perú? ",
        opcionA:"Arequipa ",
        opcionB:" Cuzco",
        opcionC:"Trujillo ",
        opcionD:" Lima",
        correcta:"d"
    },
    {
        id:8,
        categoria:"Historia",
        titulo:"¿Qué cultura desarrolló una notable orfebrería y metalurgia en la costa norte del Perú? ",
        opcionA:"Chavín ",
        opcionB:"Moche ",
        opcionC:"Nazca ",
        opcionD:"caral ",
        correcta:"b"
    },
    {
        id:9,
        categoria:"Historia",
        titulo:"¿Cuál de los siguientes fue uno de los principales líderes de la resistencia indígena contra los españoles en el siglo XVIII? ",
        opcionA:"  Atahualpa",
        opcionB:" Huáscar",
        opcionC:" Manco Inca",
        opcionD:" Túpac Amaru II",
        correcta:"d"
    },
    {
        id:10,
        categoria:"Historia",
        titulo:" ¿Qué civilización se desarrolló en los Andes del Perú y fue conocida por su influencia cultural y religiosa en toda la región",
        opcionA:"Nazca ",
        opcionB:" Chimú",
        opcionC:"Chavín ",
        opcionD:" Moche",
        correcta:"c"
    },
    
    
    
    

    {
        id:11,
        categoria:"Cultura",
        titulo:"¿Cuál es el actual Presidente de la República del Perú en 2024?",
        opcionA:"Martín Vizcarra",
        opcionB:"Pedro Castillo",
        opcionC:"Dina Boluarte",
        opcionD:"Keiko Fujimori",
        correcta:"c"
    },
    {
        id:12,
        categoria:"Cultura",
        titulo:"¿Cuál es la moneda oficial del Perú?",
        opcionA:"Peso",
        opcionB:"Bolívar",
        opcionC:" Sol",
        opcionD:" Dólar",
        correcta:"c"
    },
    {
        id:13,
        categoria:"Cultura",
        titulo:"¿Cuál es el platillo tradicional peruano que ha sido declarado Patrimonio Cultural de la Nación y es conocido internacionalmente?",
        opcionA:"Ceviche",
        opcionB:"Ají de gallina",
        opcionC:"Lomo saltado",
        opcionD:"Papa a la huancaína",
        correcta:"a"
    },
    {
        id:14,
        categoria:"Cultura",
        titulo:"¿Cuál es el baile tradicional que representa a Perú y es reconocido como Patrimonio Cultural de las Américas por la OEA?",
        opcionA:"Marinera",
        opcionB:"Huayno",
        opcionC:"Festejo",
        opcionD:"Tondero",
        correcta:"a"
    },
    {
        id:15,
        categoria:"Cultura",
        titulo:"¿En qué ciudad peruana se celebra la famosa festividad religiosa El Señor de los Milagros, uno de los eventos católicos más grandes del mundo?",
        opcionA:"Arequipa",
        opcionB:"Trujillo",
        opcionC:"Cuzco",
        opcionD:"Lima",
        correcta:"d"
    },
    {
        id:16,
        categoria:"Cultura",
        titulo:"¿Cuál es el escritor peruano ganador del Premio Nobel de Literatura en 2010?",
        opcionA:"César Vallejo",
        opcionB:"José María Arguedas",
        opcionC:"Alfredo Bryce Echenique",
        opcionD:"Mario Vargas Llosa",
        correcta:"d"
    },
    {
        id:17,
        categoria:"Cultura",
        titulo:"¿Qué ciudad es considerada la Capital de la Amistad en Perú por su historia y tradiciones?",
        opcionA:"Piura",
        opcionB:"Lima",
        opcionC:"Chiclayo",
        opcionD:"Arequipa",
        correcta:"c"
    },
    {
        id:18,
        categoria:"Cultura",
        titulo:"¿Cuál es la cadena de montañas que atraviesa el territorio peruano, siendo la más extensa del mundo?",
        opcionA:"Los Andes",
        opcionB:"La Sierra Madre",
        opcionC:"La Cordillera del Himalaya",
        opcionD:"Los Alpes",
        correcta:"a"
    },
    {
        id:19,
        categoria:"Cultura",
        titulo:"¿Qué región del Perú es conocida por albergar el Parque Nacional del Manu, una de las reservas de biodiversidad más importantes del mundo?",
        opcionA:"Amazonas",
        opcionB:"Madre de Dios",
        opcionC:"Cuzco",
        opcionD:"Loreto",
        correcta:"b"
    },
    {
        id:20,
        categoria:"Cultura",
        titulo:"¿Cuál es el producto peruano que ha sido reconocido por su alta calidad y es utilizado internacionalmente en la gastronomía, bebidas y textiles?",
        opcionA:"Quinoa",
        opcionB:"Algodón Pima",
        opcionC:"Cacao",
        opcionD:"Café",
        correcta:"b"
    },




    {
        id:21,
        categoria:"geografia",
        titulo:"¿Cuál es la capital de la región amazónica de Loreto, una de las más grandes del Perú?",
        opcionA:"Pucallpa",
        opcionB:"Iquitos",
        opcionC:"Tarapoto",
        opcionD:"Moyobamba",
        correcta:"b"
    },
    {
        id:22,
        categoria:"geografia",
        titulo:"¿Cuál es la montaña más alta del Perú?",
        opcionA:"Huascarán",
        opcionB:"Alpamayo",
        opcionC:"Ausangate",
        opcionD:"Salkantay",
        correcta:"a"
    },
    {
        id:23,
        categoria:"geografia",
        titulo:"¿En qué región del Perú se encuentra el Cañón del Colca, uno de los cañones más profundos del mundo?",
        opcionA:"Puno",
        opcionB:"Arequipa",
        opcionC:"Cuzco",
        opcionD:"Apurímac",
        correcta:"b"
    },
    {
        id:24,
        categoria:"geografia",
        titulo:"¿Qué cordillera atraviesa el territorio peruano y es parte de la cadena montañosa más extensa del mundo?",
        opcionA:"Los Alpes",
        opcionB:"Los Andes",
        opcionC:"La Sierra Madre",
        opcionD:"El Himalaya",
        correcta:"b"
    },
    {
        id:25,
        categoria:"geografia",
        titulo:"¿Qué río es considerado el más largo y caudaloso del Perú, y uno de los más importantes del mundo?",
        opcionA:"Río Marañón",
        opcionB:"Río Ucayali",
        opcionC:"Río Mantaro",
        opcionD:"Río Amazonas",
        correcta:"d"
    },
    {
        id:26,
        categoria:"geografia",
        titulo:"¿Cuál es el lago navegable más alto del mundo, ubicado en el altiplano peruano-boliviano?",
        opcionA:"Lago Junín",
        opcionB:"Lago Sandoval",
        opcionC:"Lago Titicaca",
        opcionD:"Lago Pomacochas",
        correcta:"c"
    },
    {
        id:27,
        categoria:"geografia",
        titulo:"¿En qué región se encuentra la ciudad de Trujillo, conocida por sus playas y su cercanía a la ciudadela de Chan Chan?",
        opcionA:"Lambayeque",
        opcionB:"La Libertad",
        opcionC:"Piura",
        opcionD:"Ancash",
        correcta:"b"
    },
    {
        id:28,
        categoria:"geografia",
        titulo:"¿Cuál es la mayor reserva de biodiversidad del Perú, ubicada en la región de Madre de Dios y declarada Patrimonio de la Humanidad por la UNESCO?",
        opcionA:"Reserva Nacional de Paracas",
        opcionB:"Parque Nacional del Manu",
        opcionC:"Santuario Histórico de Machu Picchu",
        opcionD:"Reserva de Tambopata",
        correcta:"b"
    },
    {
        id:29,
        categoria:"geografia",
        titulo:"¿Qué región peruana es conocida por sus hermosos valles interandinos y la famosa ciudadela de Machu Picchu?",
        opcionA:"Puno",
        opcionB:"Huancavelica",
        opcionC:"Apurímac",
        opcionD:"Cuzco",
        correcta:"d"
    },
    {
        id:30,
        categoria:"geografia",
        titulo:"¿Cuál es la región más seca del Perú, famosa por su desierto costero y la producción de vinos y piscos?",
        opcionA:"Piura",
        opcionB:"Ica",
        opcionC:"Arequipa",
        opcionD:"La Libertad",
        correcta:"b"
    },



    {
        id:31,
        categoria:"civica",
        titulo:"¿Cuál es el actual poder encargado de hacer y aprobar las leyes en el Perú?",
        opcionA:"Poder Judicial",
        opcionB:"Poder Ejecutivo",
        opcionC:"Tribunal Constitucional",
        opcionD:"Congreso de la República",
        correcta:"d"
    },
    {
        id:32,
        categoria:"civica",
        titulo:"¿Cuántos poderes del Estado tiene el Perú?",
        opcionA:"Dos",
        opcionB:"Cuatro",
        opcionC:"cinco",
        opcionD:"sies",
        correcta:"c"
    },
    {
        id:33,
        categoria:"civica",
        titulo:"¿Cada cuántos años se elige al Presidente de la República del Perú?",
        opcionA:"3 años",
        opcionB:"4 años",
        opcionC:"5 años",
        opcionD:"6 años",
        correcta:"c"
    },
    {
        id:34,
        categoria:"civica",
        titulo:"¿Qué institución en el Perú tiene la función de supervisar las elecciones, garantizar la transparencia y proclamar los resultados?",
        opcionA:"Congreso de la República",
        opcionB:"Ministerio de Justicia",
        opcionC:"Oficina Nacional de Procesos Electorales (ONPE)",
        opcionD:"Defensoría del Pueblo",
        correcta:"c"
    },
    {
        id:35,
        categoria:"civica",
        titulo:"¿Cuál es el órgano encargado de interpretar, garantizar y controlar la constitucionalidad de las leyes en el Perú?",
        opcionA:"Ministerio Público",
        opcionB:"Congreso de la República",
        opcionC:"Defensoría del Pueblo",
        opcionD:"Tribunal Constitucional",
        correcta:"d"
    },
    {
        id:36,
        categoria:"civica",
        titulo:"¿Cuál de los siguientes NO es un derecho fundamental protegido por la Constitución del Perú?",
        opcionA:"Derecho a la vida",
        opcionB:"Derecho a la propiedad",
        opcionC:"Derecho a la educación",
        opcionD:"Derecho a la esclavitud",
        correcta:"d"
    },
    {
        id:37,
        categoria:"civica",
        titulo:"¿Cómo se denomina el sistema de gobierno del Perú?",
        opcionA:"Monarquía",
        opcionB:"Dictadura",
        opcionC:"República presidencialista",
        opcionD:"República parlamentaria",
        correcta:"c"
    },
    {
        id:38,
        categoria:"civica",
        titulo:"¿Qué edad mínima debe tener un ciudadano peruano para votar en las elecciones generales?",
        opcionA:"16 años",
        opcionB:"17 años",
        opcionC:"18 años",
        opcionD:"19 años",
        correcta:"c"
    },
    {
        id:39,
        categoria:"civica",
        titulo:"¿Qué documento es indispensable para que un ciudadano peruano pueda ejercer su derecho al voto?",
        opcionA:"Carné de Extranjería",
        opcionB:"Licencia de Conducir",
        opcionC:"Documento Nacional de Identidad (DNI)",
        opcionD:"Pasaporte",
        correcta:"d"
    },
    {
        id:40,
        categoria:"civica",
        titulo:"¿Cuál de las siguientes NO es una obligación cívica en el Perú?",
        opcionA:"Pagar impuestos",
        opcionB:"Votar en las eleccionesr",
        opcionC:"Respetar la Constitución",
        opcionD:"Elegir a los jueces",
        correcta:"d"
    },




    {
        id:41,
        categoria:"personalidad",
        titulo:"Sus gustos o intereses cambian rápidamente de una cosa a otra.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:42,
        categoria:"personalidad",
        titulo:"Se siente a veces desbordante de energía y otras veces, en cambio sin ganas de hacer nada.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:43,
        categoria:"personalidad",
        titulo:"A veces se siente desdichado sin que exista una buena razón para sentirse así.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:44,
        categoria:"personalidad",
        titulo:"Piensa poco en sus fracasos después que ellos han pasado ",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:45,
        categoria:"personalidad",
        titulo:"Frecuentemente encuentra dificultad en irse a dormir en la noche por que continúa pensando en lo que le ha sucedido durante el día.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:46,
        categoria:"personalidad",
        titulo:"Cuesta trabajo conseguir hacerle perder la calma, conmoverlo o entusiasmarlo de alguna manera. ",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:47,
        categoria:"personalidad",
        titulo:"Habitualmente tiende a ser optimista acerca de su porvenir. ",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:48,
        categoria:"personalidad",
        titulo:"A menudo está mal humorado",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:49,
        categoria:"personalidad",
        titulo:"Con frecuencia se siente culpable sin una buena razón para ello",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:50,
        categoria:"personalidad",
        titulo:"Usted sueña despierto con mucha frecuencia. ",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },



    {
        id:51,
        categoria:"personalidad2",
        titulo:"Tiene frecuentes altibajos o cambios de humor a veces con y a veces sin una causa justificada ",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:52,
        categoria:"personalidad2",
        titulo:"Hay momentos en los que le parece muy oscuro y difícil el porvenir.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:53,
        categoria:"personalidad2",
        titulo:"Casi siempre se siente fuerte y saludable",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:54,
        categoria:"personalidad2",
        titulo:"Se siente sólo aun estando con otras personas.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:55,
        categoria:"personalidad2",
        titulo:"Su estado de ánimo pasa frecuentemente de la alegría a la tristeza, o viceversa, sin que usted sepa el porqué",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:56,
        categoria:"personalidad2",
        titulo:"Hay momentos en los que su mente parece trabajar muy lentamente y otras veces en cambia muy rápidamente. ",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:57,
        categoria:"personalidad2",
        titulo:"Frecuentemente esta desanimado o abatido.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:58,
        categoria:"personalidad2",
        titulo:"Muy rara vez se pone a pensar en sus errores pasados.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },
    {
        id:59,
        categoria:"personalidad2",
        titulo:"Algunas veces se siente fastidiado por palabras o pensamientos inútiles que vienen a su mente una y otra vez.",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"c"
    },
    {
        id:60,
        categoria:"personalidad2",
        titulo:"ULe resulta muy agradable soñar despierto",
        opcionA:"SI",
        opcionB:"Duda",
        opcionC:"No",
        opcionD:"no recuerdo",
        correcta:"a"
    },






]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=9){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})