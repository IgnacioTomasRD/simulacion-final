const HOLA_ME_LLAMO_NACHO = "HOLAAAAA";
const initialValues = {
	"tppv": 120, //tiempo de proximo pedido por vehiculo
	"tppp": 150, //tiempo de proximo pedido por peaton
	"tpr": 1000, //tiempo de proximo restock
	"tpcdl": 1500, //tiempo de proximo corte de luz
	"tphyr": 200, //tiempo de proxima higiene y rotacion
	"t": 0, //tiempo
	"ct": 0, //costo total
	"sth": 0, //stock de hamburguesas
	"chd": 0, //cantidad de hamburguesas desechadas
	"chp": 550, //cantidad de hamburguesas recibidas periodicamente (variable de control)
	"cth": 0, //cantidad total de hamburguesas
	"chg":0,//cantidad de hamburguesas entregadas gratis
	"tf": 10000000, //tiempo final
	"tfcl": 0, //tiempo final de corte de luz
	"ticl": 0, //tiempo inicial de corte de luz
	"ta": 0, //tiempo de atencion
	"tihyr": 0, //tiempo inicial de higiene y rotacion
	"tfhyr": 0, //tiempo final de higiene y rotacion
	"de": 2, //demora
	"tc": 0, //tiempo comprometido de cocina
	"ihyr": 3600, //intervalo de higiene y rotacion
	"phyr":35,//duracion de higiene y rotacion
	"pns":0.007,//precio nafta
	"phg":0,//porcentaje de hamburguesas gratis
	"phd":0,//porcentaje de hamburguesas desechadas
	"cp": 0,
	"tta": 0,
	"cct": 0
}

export {
	HOLA_ME_LLAMO_NACHO,
	initialValues
}
