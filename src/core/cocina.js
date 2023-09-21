import {cp} from './cp.js';

export function cocina(values){
    values.cp = cp();

    if((values.tfcl<values.t)&&(values.ticl>values.t)){
        values.ta = values.ta + (values.tfcl-values.t);
    }
    if((values.tihyr>values.t)&&(values.tfhyr<values.t)){
        values.ta = values.ta + (values.tfhyr-values.t);
    }
    if(values.cp>values.sth){
        values.ta = values.ta + 24*(values.cp-values.sth) + values.cp*values.de; // de: duracion de empaquetado
        if(values.tc>values.t){
            values.tc = values.tc + values.ta;

        }else{
            values.tc = values.t + values.ta;
        }
        if((values.tc-values.t)>60){
            values.ct = values.ct + 2; // se regala una sola hamburguesa
            values.chg = values.chg + 1;
            values.tc = values.tc + 24;
            values.cth = values.cth + 1
        }
        values.sth = 0;

    }else{
        values.sth = values.sth - values.cp;
        values.ta = values.ta + values.cp*values.de;
        if(values.ta>60){
            values.ct = values.ct + 2; 
            values.chg = values.chg + 1;
            values.cth = values.cth + 1
        }
    }
    values.tta = values.tta + values.ta;
    values.cct = values.cct + 1;
    values.ta=0;

    return { ...values };
}