import {iap} from './iap.js';
import {cocina} from './cocina.js';
import {quejas} from './quejas.js';

export function pedidoPorPeaton(values){
    console.log("pedido por peaton");
    values.t = values.tppp;
    var intervaloEntreArriboDePeatones= iap();
    values.tppp=values.t+intervaloEntreArriboDePeatones;
    values = cocina(values);
    values = quejas(values);
    return { ...values };
}