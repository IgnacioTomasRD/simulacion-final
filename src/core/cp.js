export function cp() {
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