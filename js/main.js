CARDS
function toggleCard(card) {
const isActive = card.classList.contains('active');
document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
if (!isActive) card.classList.add('active');
}

document.addEventListener('click', (e) => {
if (!e.target.closest('.card')) {
    document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
    });
}
});

/* ================= FORMULARIO WHATSAPP ================= */
const form = document.getElementById('whatsappForm');
const status = document.getElementById('formStatus');
const btn = document.getElementById('btnEnviar');

form.addEventListener('submit', (e) => {
e.preventDefault();

const nombre = document.getElementById('nombre').value.trim();
const correo = document.getElementById('correo').value.trim();
const telefonoCliente = document.getElementById('telefono').value.trim();
const mensaje = document.getElementById('mensaje').value.trim();

  /* VALIDACIÓN */
if (nombre.length < 3) {
    mostrarError('Ingresa un nombre válido');
    return;
}

if (!correo.includes('@')) {
    mostrarError('Correo electrónico inválido');
    return;
}

if (mensaje.length < 10) {
    mostrarError('Describe mejor tu solicitud');
    return;
}

  /* ESTADO CARGA */
btn.classList.add('loading');
btn.textContent = 'Enviando...';
status.style.display = 'block';
status.textContent = 'Redirigiendo a WhatsApp…';

  /* MENSAJE */
  const telefonoEmpresa = '56949424720'; // TU NÚMERO

const texto = `
📌 *Nueva cotización - HLogisticSupport*

👤 Nombre: ${nombre}
📧 Correo: ${correo}
📞 Teléfono: ${telefonoCliente || 'No indicado'}

💬 Mensaje:
${mensaje}
`;

const url = `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(texto)}`;

  /* ENVÍO A WHATSAPP */
setTimeout(() => {
    window.open(url, '_blank');

    btn.classList.remove('loading');
    btn.classList.add('success');
    btn.textContent = 'Mensaje enviado ✔';

    form.reset();
}, 1200);
});

/* ================= ERRORES ================= */
function mostrarError(msg){
status.style.display = 'block';
status.style.color = '#dc2626';
status.textContent = msg;
}
