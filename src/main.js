import { HOLA_ME_LLAMO_NACHO, initialValues} from './var.js';
import {restock} from './core/restock.js';
import {pedidoPorPeaton} from './core/pedidoPeaton.js';
import {pedidoPorVehiculo} from './core/pedidoPorVehiculo.js';
import {higieneYRotacion} from './core/higieneYRotacion.js';
import {corteDeLuz} from './core/corteDeLuz.js';

var values = initialValues;

function print(message, value) {
    console.log(`${message}: ${value}`);
} 




function nextEvent() {
    if(values.tppv <= values.tppp){
       if(values.tppv <= values.tpr){
        if(values.tppv <= values.tpcdl){
            if(values.tppv <= values.tphyr){
                return pedidoPorVehiculo(values);
            }else{
                return higieneYRotacion(values);
            }
        }else if(values.tpcdl <= values.tphyr){
            return corteDeLuz(values);
        }else{
            return higieneYRotacion(values);
        }
       }else if(values.tpr <= values.tpcdl){
        if(values.tpr <= values.tphyr){
            return restock(values);
        }else{
            return higieneYRotacion(values);
        }
       }else if(values.tpcdl <= values.tphyr){
            return corteDeLuz(values);
       }else{
            return higieneYRotacion(values);
       } 
    }else if(values.tppp <= values.tpr){
        if(values.tppp <= values.tpcdl){
            if(values.tppp <= values.tphyr){
                return pedidoPorPeaton(values);
            }else{
                return higieneYRotacion(values);
            }
        }else if(values.tpcdl <= values.tphyr){
            return corteDeLuz(values);
        }else{
            return higieneYRotacion(values);
        }
    }else if(values.tpr <= values.tpcdl){
        if(values.tpr <= values.tphyr){
            return restock(values);
        }else{
            return higieneYRotacion(values);
        }
    }else if(values.tpcdl <= values.tphyr){
        return corteDeLuz(values);
    }else{
        return higieneYRotacion(values);
    }
}


function main(){
    while(values.t < values.tf) {
        values = nextEvent();
    }
    values.phg=(values.chg*100)/values.cth;
    values.phd=(values.chd*100)/values.cth;
    // print("tiempo de proximo pedido por vehiculo", values.tppv);
    // print("tiempo de proximo pedido por peaton", values.tppp);
    // print("tiempo de proximo restock", values.tpr);
    // print("tiempo de proximo corte de luz", values.tpcdl);
    // print("tiempo de proxima higiene y rotacion", values.tphyr);
    // print("tiempo", values.t);
    // print("stock de hamburguesas", values.sth);
    // print("cantidad de hamburguesas desechadas", values.chd);
    // print("cantidad de hamburguesas recibidas periodicamente (variable de control)", values.chp);
    // print("cantidad total de hamburguesas", values.cth);
    // print("cantidad de hamburguesas entregadas gratis", values.chg);
    // print("tiempo final", values.tf);
    // print("tiempo final de corte de luz", values.tfcl);
    // print("tiempo inicial de corte de luz", values.ticl);
    // print("tiempo de atencion", values.ta);
    // print("tiempo inicial de higiene y rotacion", values.tihyr);
    // print("tiempo final de higiene y rotacion", values.tfhyr);
    // print("demora", values.de);
    // print("tiempo comprometido de cocina", values.tc);
    // print("intervalo de higiene y rotacion", values.ihyr);
    // print("duracion de higiene y rotacion", values.phyr);
    // print("clientes totales", values.cct);
    console.log("--------------------------RESULTADOS--------------------------");
    console.log("CANTIDAD DE HAMBURGUESAS: ", values.chp);
    print("tiempo medio de atención               ", (values.tta/values.cct).toFixed(1));
    print("Porcentaje de hamburguesas gratis:     ", values.phg.toFixed(1));
    print("Porcentaje de hamburguesas desechadas: ", values.phd.toFixed(1));
    print("Costo total por hora:                  ", ((values.ct/values.t)*3600).toFixed(1));
}

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Cantidad de hamburguesas (CONTROL): ', (chp) => {
//     values.chp = chp;
//     main();
//     rl.close();
// })

main();