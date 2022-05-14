const date = document.getElementById("data");
const data = new Date();
const opcao =  {
    dateStyle:'full'
}
date.innerHTML= data.toLocaleDateString('pt-BR', opcao );

// const date = document.getElementById("data");
// const data = new Date();
// date.innerHTML = data.toString();

// function getDiaSemana(diaSemana){
//     let diaSemanaTexto;
//     switch(diaSemana){
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
            
//         case 1: 
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2: 
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3: 
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4: 
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5: 
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6: 
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = ''; 
//             return diaSemanaTexto;   
//     }
// }



// function getNomeMes(numMes) {
//     let numMesTexto;
//     switch (numMes) {
//         case 0:
//             numMesTexto = 'Janeiro';
//             return numMesTexto;
//         case 1:
//             numMesTexto = 'Fevereiro';
//             return numMesTexto;
//         case 2:
//             numMesTexto = 'Março';
//             return numMesTexto;
//         case 3:
//             numMesTexto = 'Abril';
//             return numMesTexto;
//         case 4:
//             numMesTexto = 'Maio';
//             return numMesTexto;
//         case 5:
//             numMesTexto = 'Junho';
//             return numMesTexto;
//         case 6:
//             numMesTexto = 'Julho';
//             return numMesTexto;
//         case 7:
//             numMesTexto = 'Agosto';
//             return numMesTexto;
//         case 8:
//             numMesTexto = 'Setembro';
//             return numMesTexto;
//         case 9:
//             numMesTexto = 'Outubro';
//             return numMesTexto;
//         case 10:
//             numMesTexto = 'Novembro';
//             return numMesTexto;
//         case 11:
//             numMesTexto = 'Dezembro';
//             return numMesTexto;
//         default:
//             numMesTexto = '';
//             break;    

//     }
// }
// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }


// function criaData(data){
//     const diaSemana = data.getDay();
//     const numMes = data.getMonth();
//     const diaSemanaTexto = getDiaSemana(diaSemana);
//     const numMesTexto = getNomeMes(numMes);
  
//     return (
// `${diaSemanaTexto}, ${data.getDate()} de ${numMesTexto} de ${data.getFullYear()} ` + ' ' +
// `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda (data.getMinutes())}`
//         )
   
// }
// date.innerHTML = criaData(data);
