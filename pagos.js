const pago = {
  nombre: "",
  tarjeta: "",
  vencimiento: "",
  cvv: ""
};

function validarPago(datos) {
  const tarjeta = datos.tarjeta.replace(/\s/g, "");

  if (!datos.nombre.trim()) {
    return "Ingresa el nombre del titular.";
  }

  if (!/^\d{16}$/.test(tarjeta)) {
    return "El número de tarjeta debe tener 16 dígitos.";
  }

  if (!/^\d{2}\/\d{2}$/.test(datos.vencimiento)) {
    return "El vencimiento debe tener formato MM/AA.";
  }

  if (!/^\d{3,4}$/.test(datos.cvv)) {
    return "El CVV no es válido.";
  }

  return "Pago válido.";
}

function formatearTarjeta(numero) {
  return numero
    .replace(/\D/g, "")
    .substring(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatearVencimiento(fecha) {
  const valor = fecha.replace(/\D/g, "").substring(0, 4);

  if (valor.length > 2) {
    return valor.substring(0, 2) + "/" + valor.substring(2);
  }

  return valor;
}

// Ejemplo
pago.nombre = "Juan Pérez";
pago.tarjeta = "1234567812345678";
pago.vencimiento = "12/30";
pago.cvv = "123";

console.log(validarPago(pago));
console.log(formatearTarjeta("1234567812345678"));
console.log(formatearVencimiento("1230"));
