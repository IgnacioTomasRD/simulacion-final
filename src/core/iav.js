export function iav(){
    var m = 779/30, x, y=1, f=0, random1, random2;
    while(y>f){
        random1 = Math.random();
        random2= Math.random();
        y = m * random1;
        x = (5/4) * random2 + (3/4);
        f = -(604/15)  * x + (337/6);
    }
    return x*60;
}