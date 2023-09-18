import { HOLA_ME_LLAMO_NACHO } from './var.js';



console.log(HOLA_ME_LLAMO_NACHO);

var tppv = 10; //tiempo de proximo pedido por vehiculo
var tppp =5; //tiempo de proximo pedido por peaton
var tpr =0; //tiempo de proximo restock
var tpcdl =15;//tiempo de proximo corte de luz
var tphyr = 14;//tiempo de proxima higiene y rotacion
var t =0;//tiempo
var ct=0; //costo total
var sth = 0; //stock de hamburguesas
var chd = 0; //cantidad de hamburguesas desechadas
var chp=1000;//cantidad de hamburguesas recibidas periodicamente (variable de control)
var cth=0; //cantidad total de hamburguesas
var tf=5; //tiempo final
var tfcl=0; //tiempo final de corte de luz
var ticl=0;//tiempo inicial de corte de luz
var ta=0;//tiempo de atencion
var tihyr=0;//tiempo inicial de higiene y rotacion
var tfhyr=0;//tiempo final de higiene y rotacion
var de=2;//demora
var tc=0; //tiempo comprometido de cocina

function vui(){
var r = Math.random();
return ((30*r+90)*60);
}
function iap(){
    var m = (1191/40);
    var r1 = Math.random();
    var x = ((1/2)+(5/2)*r1);
    var r2 = Math.random();
    var y = m*r2;
    var f = ((-23,5)*x+41,525);
    if(y<=f){
        return x;
    }else{
    iap();
    }
}

function cp(){
    var m = 72;
    var r1 = Math.random();
    var x = (8*r1+1);
    var r2 = Math.random();
    var y = m*r2;
    var number = (-0,4)*x*x;
    var f = (number+(4*x)-(2,8));
    console.log("y  "+y);
    console.log("f  "+f);
    while(y>f){
        cp();
        
    }
    return x;

}

function chpd(){
    return 10;
}

function cocina(){
    var tamañoDePedido = cp();
    console.log("TP "+tamañoDePedido);

    if((tfcl<t)&&(ticl>t)){
        ta = ta + (tfcl-t);
    }
    if((tihyr>t)&&(tfhyr<t)){
        ta = ta + (tfhyr-t);
    }
    if(tamañoDePedido>sth){
        ta = ta + 24*(tamañoDePedido-sth) + tamañoDePedido*de;
        if(tc>t){
            tc = tc + ta;
            if((tc-t)>60){
                ct = ct + 2*tamañoDePedido;
                chg = chg + tamañoDePedido;
            }

        }else{
            tc = t + ta;
            if((t-tc)>60){
                ct = ct + 2*tamañoDePedido;
                chg = chg + tamañoDePedido;
            }
        }
        sth = 0;
        console.log("sth 1 "+ sth);

    }else{
        console.log("TP "+tamañoDePedido);
        sth = sth - tamañoDePedido;
        console.log("sth  2"+ sth);
        ta = ta + tamañoDePedido*de;
        if(ta>60){
            ct = ct + 2*tamañoDePedido;
            chg = chg + tamañoDePedido;
        }
    }
    ta=0;
}

function quejas(){
    var r = Math.random();
    var cantHamburguesasADesechar = chpd();
    console.log("hamburguesas a desechar  "+cantHamburguesasADesechar);
    var tamañoDePedido = cp();
    if(r<(5/100)){
        if(cantHamburguesasADesechar > tamañoDePedido){
            ct = ct+tamañoDePedido*2
            if(tamañoDePedido>sth){
                sth = 0;
                console.log("sth  3"+ sth);

                if((tfcl<t)&&(ticl>t)){
                    ta = ta + (tfcl-t);
                }
                if((tihyr>t)&&(tfhyr<t)){
                    ta = ta + (tfhyr-t);
                }
                if(tamañoDePedido>sth){
                    ta = ta + 24*(tamañoDePedido-sth) + tamañoDePedido*de;
                    if(tc>t){
                        tc = tc + ta;
                        if((tc-t)>60){
                            ct = ct + 2*tamañoDePedido;
                            chg = chg + tamañoDePedido;
                        }
            
                    }else{
                        tc = t + ta;
                        if((t-tc)>60){
                            ct = ct + 2*tamañoDePedido;
                            chg = chg + tamañoDePedido;
                        }
                    }
                    sth = 0;
                    console.log("sth  4"+ sth);

                }else{
                    sth = sth - tamañoDePedido;
                    ta = ta + tamañoDePedido*de;
                    if(ta>60){
                        ct = ct + 2*tamañoDePedido;
                        chg = chg + tamañoDePedido;
                    }
                }
                ta=0;            }else{
                sth=sth-cantHamburguesasADesechar;
                console.log("sth  5"+ sth);

            }
        }
    }
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

function restock(){
    console.log("restock");
    t=tpr;
    tpr=t+vui();
    ct=ct+2*sth;
    chd=chd+sth;
    sth=chp;
    cth=cth+sth;
}

function pedidoPorPeaton(){
    console.log("pedido por peaton");
    t=tppp;
    var intervaloEntreArriboDePeatones= iap();
    console.log(intervaloEntreArriboDePeatones);
    tppp=t+intervaloEntreArriboDePeatones;
    cocina();
    quejas();
}

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


    if(t<tf){
        main();
        
        console.log("tiempo de proximo pedido por vehiculo "+ tppv);
        console.log("tiempo de proximo pedido por peaton " + tppp);
        console.log("tiempo de proximo restock " + tpr);
        console.log("tiempo de proximo corte de luz "+tpcdl);
        console.log("tiempo de proxima higiene y rotacion "+tphyr);
        console.log("tiempo "+t);
        console.log("costo total "+ct);
        console.log("stock de hamburguesas "+sth);
        console.log("cantidad de hamburguesas desechadas "+chd);
        console.log("cantidad de hamburguesas recibidas periodicamente (variable de control) "+chp);
        console.log("cantidad total de hamburguesas "+cth);
        console.log("tiempo final "+tf);
        console.log("tiempo final de corte de luz " + tfcl);
        console.log("tiempo inicial de corte de luz "+ticl);
        console.log("tiempo de atencion "+ta);
        console.log("tiempo inicial de higiene y rotacion "+tihyr);
        console.log("tiempo final de higiene y rotacion "+tfhyr);
        console.log("demora "+de);
        console.log("tiempo comprometido de cocina "+tc);
    }
    





}




main();