function mostrarResumen() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var fechaEntrada = document.getElementById("fechaEntrada").value;
  var fechaSalida = document.getElementById("fechaSalida").value;
  var tipoHabitacion = document.getElementById("tipoHabitacion").value;
  var comentarios = document.getElementById("comentarios").value;

  // Crear el resumen
  var resumen = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Fecha de Entrada:</strong> ${fechaEntrada}</p>
      <p><strong>Fecha de Salida:</strong> ${fechaSalida}</p>
      <p><strong>Tipo de Habitación:</strong> ${tipoHabitacion}</p>
      <p><strong>Comentarios:</strong> ${comentarios}</p>
  `;

  // Mostrar el resumen en la página
  document.getElementById("resumen").innerHTML = resumen;
}
