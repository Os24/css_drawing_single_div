var botellas = [1,2,3]
var totalOrigen = 0;
var cantidadBoteUno = 0;
var cantidadBoteDos = 0;
var cantidadBoteTres = 0;
var cantidadBoteCinco = "";
var totalOrigen = "";

function botellasCalc(){
	totalOrigen = $("#input-total").val();
	let totalCompare = totalOrigen/botellas[2];
    if (totalOrigen % botellas[2]!=0) {
    	let litrosRes = totalOrigen % botellas[2]
    	cantidadBoteUno = Math.trunc(totalOrigen/botellas[2])
    	if (litrosRes!=0) {
    		let temp = litrosRes/botellas[1]
    		if (litrosRes % botellas[1]===0) {
    			cantidadBoteDos = Math.trunc(temp)
    			$("#botellas-display").html("botellas de 3 litros:  "+ cantidadBoteUno+ "<br>botellas de 2 litros:"+ cantidadBoteDos)
    		}else 

    		if (litrosRes % botellas[1]!=0) {
    			cantidadBoteDos = Math.trunc(temp)
    			temp =  litrosRes/botellas[0]

    			if (litrosRes % botellas[0]===0) {
    				cantidadBoteTres = Math.trunc(temp)
    				$("#botellas-display").html("botellas de 3 litros:  "+ cantidadBoteUno+ "<br>botellas de 2 litros:"+ cantidadBoteDos+ "<br>botellas de 1 litro:"+ cantidadBoteTres)
    			}
            }
        }
    }else 
    
    if(totalOrigen % botellas[2]===0){
        cantidadBoteUno = Math.trunc(totalOrigen/botellas[2])
        $("#botellas-display").html("botellas de 3 litros:  "+ cantidadBoteUno+ "<br>botellas de 2 litros:"+ cantidadBoteDos)
    }
}






