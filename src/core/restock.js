import {vui} from './vui.js';

export function restock(values) {
	console.log('restock');
    values.t= values.tpr;
    values.tpr = values.t+vui();
    values.ct = values.ct+2*values.sth;
    values.chd=values.chd+values.sth;
    values.sth=values.chp;
    values.cth=values.cth+values.sth;

    return { ...values };
}