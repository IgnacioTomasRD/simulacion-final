export function cp(){
    var m = 7.2, x, y=1, f=0, random1, random2;
    while(y>f){
        random1 = Math.random();
        random2= Math.random();
        y = m * random1;
        x = 8 * random2 + 1;
        f = -(4/10)* x * x + 4 * x - 2.8;
    }
    return Math.floor(x);
}