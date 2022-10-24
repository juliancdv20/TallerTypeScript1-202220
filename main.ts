import { Serie } from './serie.js';

import { series } from './data.js';

let seriestot: HTMLElement = document.getElementById('series')!;
let promTemp: HTMLElement = document.getElementById('promedioTemporadas')!;

mostrarSeries(series);

function mostrarSeries(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriestot.appendChild(trElement);
  });

 
  promTemp.innerHTML= `Seasons average: ${getTotalTemps(series)}`;
  
  

 
}

function getTotalTemps(series: Serie[]): number {
    let totalTemps: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalTemps = totalTemps + serie.seasons;
        totalSeries +=1;
        });
    return totalTemps/totalSeries;
  }
 