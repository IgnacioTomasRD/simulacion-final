export function dcl(){
    var m = 447, x, y=1, f=0, random1, random2;
    while(y>f){
        random1 = Math.random();
        random2= Math.random();
        y = m * random1;
        x = 90 * random2 + 5;
        f = (1394) * ( x ^ (-0.7) );
    }
    return x*60;
}