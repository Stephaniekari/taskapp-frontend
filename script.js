function ingresarComo(rol) {
    if (rol === "docente") {
      window.location.href = "login_maestro.html";
    } else {
      window.location.href = "login_estudiante.html";
    }
  }
  function iniciarSesionDocente() {
    const correo = document.getElementById("correoDocente").value;
    const contrasena = document.getElementById("contrasenaDocente").value;
  
    // Esto es simulado, pero podrías validarlo con backend o localStorage
    if (correo === "docente@colegio.com" && contrasena === "1234") {
      alert("Sesión iniciada correctamente");
      window.location.href = "maestro_dashboard.html"; // próxima página
    } else {
      alert("Correo o contraseña incorrectos");
    }
  
    return false; // evita recargar la página
  }
  document.getElementById("formTarea")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const titulo = document.getElementById("titulo").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const enlace = document.getElementById("enlace").value;
    const archivoInput = document.getElementById("archivo");
    const archivo = archivoInput.files.length > 0 ? archivoInput.files[0].name : "Ninguno";
  
    const tarea = {
      titulo,
      fecha,
      hora,
      archivo,
      enlace
    };
  
    // Mostrar tarea en lista (simulado)
    const lista = document.getElementById("listaTareas");
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${tarea.titulo}</strong> - ${tarea.fecha} ${tarea.hora}<br>
      📎 Archivo: ${tarea.archivo} <br>
      🔗 Enlace: <a href="${tarea.enlace}" target="_blank">${tarea.enlace}</a>
    `;
    lista.appendChild(item);
  
    // Limpiar formulario
    document.getElementById("formTarea").reset();
  });
  // Simulamos algunas tareas disponibles
const tareasAsignadas = [
    {
      titulo: "Mapa conceptual de redes",
      fecha: "2025-04-05",
      hora: "23:59",
      archivo: "instrucciones.pdf",
      enlace: "https://recursos.clase.com/mapas"
    },
    {
      titulo: "Presentación HTML",
      fecha: "2025-04-08",
      hora: "21:00",
      archivo: "guia.html",
      enlace: ""
    }
  ];
  
  const listaEstudiante = document.getElementById("listaTareasEstudiante");
  
  if (listaEstudiante) {
    tareasAsignadas.forEach((tarea, i) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${tarea.titulo}</strong><br>
        🗓️ Fecha límite: ${tarea.fecha} ⏰ ${tarea.hora}<br>
        📄 Archivo: ${tarea.archivo}<br>
        ${tarea.enlace ? `🔗 <a href="${tarea.enlace}" target="_blank">Ver enlace</a><br>` : ""}
        <input type="file" id="archivo${i}" />
        <input type="url" id="enlace${i}" placeholder="Link de Drive, GitHub, etc." />
        <button onclick="entregarTarea(${i})">Entregar</button>
        <hr>
      `;
      listaEstudiante.appendChild(item);
    });
  }
  
  function entregarTarea(i) {
    const archivo = document.getElementById(`archivo${i}`).files[0]?.name || "No subido";
    const enlace = document.getElementById(`enlace${i}`).value || "Sin enlace";
    alert(`✅ Tarea entregada:\nArchivo: ${archivo}\nEnlace: ${enlace}`);
  }
  