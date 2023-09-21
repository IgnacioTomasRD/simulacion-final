export function iap(){
    var m = 1191/40, x, y=1, f=0, random1, random2;
    while(y>f){
        random1 = Math.random();
        random2= Math.random();
        y = m * random1;
        x = (5/2) * random2 + (1/2);
        f = -(47/2)  * x + (1661/40);
    }
    return x*60;
}