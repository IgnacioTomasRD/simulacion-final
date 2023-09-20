import {icl} from './icl.js';
import {dcl} from './dcl.js';


export function corteDeLuz(values){
    values.t=values.tpcdl;
    var intervaloEntreCortesDeLuz= icl();
    values.ticl=values.t;
    values.tpcdl=values.t+intervaloEntreCortesDeLuz;
    var duracionDeCorteDeLuz = dcl(); // en segundos
    values.tfcl=values.t+10; // mas diez segundos
    values.ct=values.ct+(duracionDeCorteDeLuz*values.pns); // precio de nafta por seguno
    return { ...values };
}