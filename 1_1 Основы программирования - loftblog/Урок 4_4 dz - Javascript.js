
var ves = prompt('¬ведите свой вес ');

function quantity(){
   var suma_ugl = ves * Number(2.3);
   var suma_bel = ves *  Number(1.5);
    //suma_ugl = Math.round(1000000.3);
  alert(suma_ugl.toFixed(0) + ' грамм углеводов в день;\n' + suma_bel + ' грамм белков в день;');
};

quantity();?

