export function iav() {
	var m = (5/3);
    var r1 = Math.random();
    var x = r1;
    var r2 = Math.random();
    var y = m*r2;
    var f = (x^2+(2/3));
    
    if(y<=f){
        return x;
    }else{
    	iav();
    }
}