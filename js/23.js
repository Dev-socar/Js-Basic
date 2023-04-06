const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'efectivo':
        console.log("Pagaste con efectivo");
        break;
    case 'bitcoin':
        console.log("Pagaste con bitcoin");
        break;
    default:
        console.log("Selecciona un metodo de pago");
        break;
}