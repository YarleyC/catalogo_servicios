function mostrar(div){
    document.querySelectorAll('.section').forEach(s => s.classList.add('oculto'));
    document.getElementById(div).classList.remove('oculto');
}

function solicitarPrestamo(){
    let monto = document.getElementById('monto').value;
    let plazo = document.getElementById('plazo').value;
    document.getElementById('respPrestamo').innerText = 
        "Solicitud enviada: Monto " + monto + " a " + plazo + " meses.";
}

function consultarCredito(){
    let cliente = document.getElementById('cliente').value;
    let cc = document.getElementById('cc').value;
    document.getElementById('respConsulta').innerText =
        "Consulta realizada. Cliente " + cliente + " - Identificación " + cc;
}

function actualizarDatos(){
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    document.getElementById('respActualizar').innerText =
        "Datos actualizados correctamente.";
}
