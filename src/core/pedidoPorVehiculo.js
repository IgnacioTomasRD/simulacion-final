import {iav} from './iav.js';
import {cocina} from './cocina.js';
import {quejas} from './quejas.js';

export function pedidoPorVehiculo(values){
    values.t = values.tppv;
    var intervaloEntreArriboDeVehiculos= iav();
    values.tppv=values.t+intervaloEntreArriboDeVehiculos;
    values = cocina(values);
    values = quejas(values);
    return { ...values };
}