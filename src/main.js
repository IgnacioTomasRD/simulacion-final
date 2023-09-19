import { HOLA_ME_LLAMO_NACHO, initialValues} from './var.js';
import {restock} from './core/restock.js';
import {vui} from './core/vui.js';
import {pedidoPorPeaton} from './core/pedidoPeaton.js';

var values = initialValues;

function print(message, value) {
    console.log(`${message}: ${value}`);
} 

function pedidoPorVehiculo(){
    console.log("pedido por vehiculo");
}

function higieneYRotacion(){
    console.log("higiene y rotacion");
}

function corteDeLuz(){
    console.log("corte de luz");
}


function nextEvent() {
    if(values.tppv <= values.tppp){
       if(values.tppv <= values.tpr){
        if(values.tppv <= values.tpcdl){
            if(values.tppv <= values.tphyr){
                return pedidoPorVehiculo();
            }else{
                return higieneYRotacion();
            }
        }else if(values.tpcdl <= values.tphyr){
            return corteDeLuz();
        }else{
            return higieneYRotacion();
        }
       }else if(values.tpr <= values.tpcdl){
        if(values.tpr <= values.tphyr){
            return restock(values);
        }else{
            return higieneYRotacion();
        }
       }else if(values.tpcdl <= values.tphyr){
            return corteDeLuz();
       }else{
            return higieneYRotacion();
       } 
    }else if(values.tppp <= values.tpr){
        if(values.tppp <= values.tpcdl){
            if(values.tppp <= values.tphyr){
                return pedidoPorPeaton(values);
            }else{
                return higieneYRotacion();
            }
        }else if(values.tpcdl <= values.tphyr){
            return corteDeLuz();
        }else{
            return higieneYRotacion();
        }
    }else if(values.tpr <= values.tpcdl){
        if(values.tpr <= values.tphyr){
            return restock(values);
        }else{
            return higieneYRotacion();
        }
    }else if(values.tpcdl <= values.tphyr){
        return corteDeLuz();
    }else{
        return higieneYRotacion();
    }
}


function main(){
    while(values.t < values.tf) {
        values = nextEvent();
    }

    print("tiempo de proximo pedido por vehiculo", values.tppv);
    print("tiempo de proximo pedido por peaton", values.tppp);
    print("tiempo de proximo restock", values.tpr);
    print("tiempo de proximo corte de luz", values.tpcdl);
    print("tiempo de proxima higiene y rotacion", values.tphyr);
    print("tiempo", values.t);
    print("costo total", values.ct);
    print("stock de hamburguesas", values.sth);
    print("cantidad de hamburguesas desechadas", values.chd);
    print("cantidad de hamburguesas recibidas periodicamente (variable de control)", values.chp);
    print("cantidad total de hamburguesas", values.cth);
    print("tiempo final", values.tf);
    print("tiempo final de corte de luz", values.tfcl);
    print("tiempo inicial de corte de luz", values.ticl);
    print("tiempo de atencion", values.ta);
    print("tiempo inicial de higiene y rotacion", values.tihyr);
    print("tiempo final de higiene y rotacion", values.tfhyr);
    print("demora", values.de);
    print("tiempo comprometido de cocina", values.tc);
}

main();