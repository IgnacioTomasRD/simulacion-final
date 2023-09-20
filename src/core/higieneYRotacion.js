export function higieneYRotacion(values){
    values.t=values.tphyr;
    values.tphyr=values.t + values.ihyr;
    values.tihyr=values.t;
    values.tfhyr=values.t+values.phyr;
    return { ...values };

}
