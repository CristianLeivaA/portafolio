const proyectos = [
    {
      "titulo": "Notaria Eduardo Roco Campos",
      "descripcion": "Sitio Web para la Primera notaria de Ñuñoa, sitio responsibo utilizando CSS, HTML y Javascript. el servicio se complemento con la mantecion y configuracion de correos electronicos y serivios.",
      "imagen": "./img/notaria.png",
      "link": "https://notariaroco.cl"
    },
    {
      "titulo": "Portafolio",
      "descripcion": "Se realiza al termino del Bootcamp de Javascript Fullstack un potafolio con el objeto de presentar trabajo realizados y poyectos.",
      "imagen": "./img/portafolio.png",
      "link": "#"
    },
    {
      "titulo": "ChatBot y ChatGpt",
      "descripcion": "Se Realizo un Chatbot con resuestas programadas en Nodejs y la libreria de CHATBOT Whatsapp (Baileys Provider), se complementa con la api Key de Chatgpt 3.5Turbo para este proyecto y Mongodb para guardar los mensajes.",
      "imagen": "./img/chatBot.png",
      "link": "https://bot-whatsapp.netlify.app/"
    }
  ];

  // Función para generar las cards
  function generarCards(proyectos) {
    const container = document.getElementById('cardsContainer');
    
    proyectos.forEach(proyecto => {
      const cardHTML = `
        <div class="col">
          <div class="card h-100">
            <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
            <div class="card-body">
              <h5 class="card-title">${proyecto.titulo}</h5>
              <p class="card-text">${proyecto.descripcion}</p>
            </div>
            <div class="card-footer">
              <a href="${proyecto.link}" class="btn" target="_blank">Ver Proyecto</a>
            </div>
          </div>
        </div>
      `;
      
      // Insertar la card en el contenedor
      container.innerHTML += cardHTML;
    });
  }

  // Llamar a la función para generar las cards
  generarCards(proyectos);