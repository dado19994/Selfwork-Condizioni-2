// SELFWORK CONDIZIONI 1

// let voto = 17;

// if (voto < 18) {
//     console.log('Insufficente');
// } else if (voto >= 18 && voto < 21) {
//     console.log('Sufficiente');
// } else if (voto >= 21 && voto < 24) {
//     console.log('Buono');
// } else if (voto >= 24 && voto < 27) {
//     console.log('Distinto');
// } else if (voto >= 27 && voto <= 29) {
//     console.log('Ottimo');
// } else if (voto === 30) {
//     console.log('Eccellente');
// } else {
//     console.log('Voto non valido!');

// }

// // SWITCH

// switch (true) {
//     case voto < 18:
//         console.log('Insufficente');
//         break;

//     case voto >= 18 && voto < 21:
//         console.log('Sufficiente');
//         break;

//     case voto >= 21 && voto < 24:
//         console.log('Buono');
//         break;

//     case voto >= 24 && voto < 27:
//         console.log('Distinto');
//         break;

//     case voto >= 27 && voto <= 29:
//         console.log('Ottimo');
//         break;

//     case voto === 30:
//         console.log('Eccellente');
//         break;

//         default:
//             console.log('Voto non valido!');
            
// }

// SELFWORK CONDIZIONI 2

 let temperatura = Number(prompt('Inserisci che temperatura fa:'));

if (temperatura < -10) {
     console.log("copriti…ancora ti raffreddi");
} else if (temperatura < 0) {
     console.log("non e’ tanto il freddo quanto l’umidità");
} else if (temperatura < 20) {
     console.log("non ci sono piu’ le mezze stagioni");
} else if (temperatura < 30) {
     console.log("mi dia una peroni sudata");
} else if (temperatura >= 30) {
     console.log("lu mare, lu sole, lu ientu");
} else {
     console.log("Valore non valido");
}

// SWITCH

switch (true) {
     case (temperatura < -10):
         console.log("copriti…ancora ti raffreddi");
         break;
     case (temperatura < 0):
         console.log("non e’ tanto il freddo quanto l’umidità");
         break;
     case (temperatura < 20):
         console.log("non ci sono piu’ le mezze stagioni");
         break;
     case (temperatura < 30):
         console.log("mi dia una peroni sudata");
         break;
     case (temperatura >= 30):
         console.log("lu mare, lu sole, lu ientu");
         break;
     default:
         console.log("Valore non valido");
}


