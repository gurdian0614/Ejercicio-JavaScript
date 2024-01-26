function sumar() {
    let n1 = parseInt(document.getElementById('txtN1').value)
    let n2 = parseInt(document.getElementById('txtN2').value)

    if (isNaN(n1)) {
        alertify.error('Número 1 en blanco')
    } else if(isNaN(n2)) {
        alertify.error('Número 2 en blanco')
    } else {
        let suma = n1 + n2;
        document.getElementById('txtResultado').value = suma
    }

}

function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtResultado').value = ''
}