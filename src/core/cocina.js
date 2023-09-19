import {cp} from './cp.js';

export function cocina(values){
    var tamañoDePedido = cp();
    console.log("TP "+tamañoDePedido);

    if((values.tfcl<values.t)&&(values.ticl>values.t)){
        values.ta = values.ta + (values.tfcl-values.t);
    }
    if((values.tihyr>values.t)&&(values.tfhyr<values.t)){
        values.ta = values.ta + (values.tfhyr-values.t);
    }
    if(tamañoDePedido>values.sth){
        values.ta = values.ta + 24*(tamañoDePedido-values.sth) + tamañoDePedido*values.de;
        if(values.tc>values.t){
            values.tc = values.tc + values.ta;
            if((values.tc-values.t)>60){
                values.ct = values.ct + 2*tamañoDePedido;
                values.chg = values.chg + tamañoDePedido;
            }

        }else{
            values.tc = values.t + values.ta;
            if((values.t-values.tc)>60){
                values.ct = values.ct + 2*tamañoDePedido;
                values.chg = values.chg + tamañoDePedido;
            }
        }
        values.sth = 0;
        console.log("sth 1 "+ values.sth);

    }else{
        console.log("TP "+tamañoDePedido);
        values.sth = values.sth - tamañoDePedido;
        console.log("sth  2"+ values.sth);
        values.ta = values.ta + tamañoDePedido*values.de;
        if(values.ta>60){
            values.ct = values.ct + 2*tamañoDePedido;
            values.chg = values.chg + tamañoDePedido;
        }
    }
    values.ta=0;

    return { ...values };
}