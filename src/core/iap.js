export function iap() {
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