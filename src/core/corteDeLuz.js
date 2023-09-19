import {icl} from './icl.js';
import {dcl} from './dcl.js';


export function corteDeLuz(values){
    console.log("corte de luz");
    values.t=values.tpcdl;
    var intervaloEntreCortesDeLuz= icl();
    values.ticl=values.t;
    values.tpcdl=values.t+intervaloEntreCortesDeLuz;
    var duracionDeCorteDeLuz= dcl();
    values.tfcl=values.t+10;
    values.ct=values.ct+(duracionDeCorteDeLuz*values.pns);
    return { ...values };

}