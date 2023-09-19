import {cp} from './cp.js';
import {chpd} from './chpd.js';

export function quejas(values){
    var r = Math.random();
    var cantHamburguesasADesechar = chpd();
    console.log("hamburguesas a desechar  "+cantHamburguesasADesechar);
    var tamañoDePedido = cp();
    if(r<(5/100)){
        if(cantHamburguesasADesechar > tamañoDePedido){
            values.ct = values.ct+tamañoDePedido*2
            if(tamañoDePedido>values.sth){
                values.sth = 0;
                console.log("sth  3"+ values.sth);

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
                    console.log("sth  4"+ values.sth);

                }else{
                    values.sth = values.sth - tamañoDePedido;
                    values.ta = values.ta + tamañoDePedido*values.de;
                    if(values.ta>60){
                        values.ct = values.ct + 2*tamañoDePedido;
                        values.chg = values.chg + tamañoDePedido;
                    }
                }
                values.ta=0;
            }else{
                values.sth=values.sth-cantHamburguesasADesechar;
                console.log("sth  5"+ values.sth);

            }
        }
    }

    return { ...values };
}