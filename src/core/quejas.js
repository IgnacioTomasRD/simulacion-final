import {chpd} from './chpd.js';

export function quejas(values){
    var r = Math.random();

    if(r<(5/100)){
        var cantHamburguesasADesechar = chpd();
        if(cantHamburguesasADesechar > values.cp){
            cantHamburguesasADesechar = values.cp;
            values.ct = values.ct+cantHamburguesasADesechar*2;
        } else {
            values.ct = values.ct+cantHamburguesasADesechar*2;
        }
        if(cantHamburguesasADesechar > values.sth){
            values.sth = 0;
        } else {
            values.sth = values.sth - cantHamburguesasADesechar;
        }
    }
    
    return { ...values };
}


// export function quejas(values){
//     var r = Math.random();

//     if(r<(5/100)){
//         var cantHamburguesasADesechar = chpd();
//         if(cantHamburguesasADesechar > values.cp){
//             values.ct = values.ct+values.cp*2
//             cantHamburguesasADesechar = values.cp;
//             if(values.cp>values.sth){
//                 values.sth = 0;

//                 if((values.tfcl<values.t)&&(values.ticl>values.t)){
//                     values.ta = values.ta + (values.tfcl-values.t);
//                 }
//                 if((values.tihyr>values.t)&&(values.tfhyr<values.t)){
//                     values.ta = values.ta + (values.tfhyr-values.t);
//                 }
//                 if(values.cp>values.sth){
//                     values.ta = values.ta + 24*(values.cp-values.sth) + values.cp*values.de;
//                     if(values.tc>values.t){
//                         values.tc = values.tc + values.ta;
//                         if((values.tc-values.t)>60){
//                             values.ct = values.ct + 2*values.cp;
//                             values.chg = values.chg + values.cp;
//                             values.chd = values.chd + values.cp;
//                         }
            
//                     }else{
//                         values.tc = values.t + values.ta;
//                         if((values.t-values.tc)>60){
//                             values.ct = values.ct + 2*values.cp;
//                             values.chg = values.chg + values.cp;
//                             values.chd = values.chd + values.cp;
//                         }
//                     }
//                     values.sth = 0;

//                 }else{
//                     values.sth = values.sth - values.cp;
//                     values.ta = values.ta + values.cp*values.de;
//                     if(values.ta>60){
//                         values.ct = values.ct + 2*values.cp;
//                         values.chg = values.chg + values.cp;
//                         values.chd = values.chd + values.cp;

//                     }
//                 }
//                 values.ta=0;
//             }else{
//                 values.sth=values.sth-cantHamburguesasADesechar;

//             }
//         }
//     }

//     return { ...values };
// }