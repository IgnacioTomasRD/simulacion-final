import { HOLA_ME_LLAMO_NACHO } from './var.js';



console.log(HOLA_ME_LLAMO_NACHO);

function pedidoPorVehiculo(){
    console.log("pedido por vehiculo");
}

function higieneYRotacion(){
    console.log("higiene y rotacion");
}

function corteDeLuz(){
    console.log("corte de luz");
}

function restock(){
    console.log("restock");

}

function pedidoPorPeaton(){
    console.log("pedido por peaton");

}

var tppv = 100;
var tppp =15;
var tpr =10;
var tpcdl =150;
var tphyr = 0;

function main(){
    if(tppv<=tppp){
       if(tppv<=tpr){
        if(tppv<=tpcdl){
            if(tppv<=tphyr){
                pedidoPorVehiculo();
            }else{
                    higieneYRotacion();
            }
        }else if(tpcdl<=tphyr){
            corteDeLuz();
        }else{
            higieneYRotacion();
        }
       }else if(tpr<=tpcdl){
        if(tpr<=tphyr){
            restock();
        }else{
            higieneYRotacion();
        }
       }else if(tpcdl<=tphyr){
        corteDeLuz();
       }else{
        higieneYRotacion();
       } 
    }else if(tppp<=tpr){
        if(tppp<=tpcdl){
            if(tppp<=tphyr){
                pedidoPorPeaton();
            }else{
                higieneYRotacion();
            }
        }else if(tpcdl<=tphyr){
            corteDeLuz();
        }else{
            higieneYRotacion();
        }
    }else if(tpr<=tpcdl){
        if(tpr<=tphyr){
            restock();
        }else{
            higieneYRotacion();
        }
    }else if(tpcdl<=tphyr){
        corteDeLuz();
    }else{
        higieneYRotacion();
    }

}


main();