import { series } from './data.js';
var seriestot = document.getElementById('series');
var averageSeasons = document.getElementById('promedioTemporadas');

mostrarSeries(series);

function mostrarSeries(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriestot.appendChild(trElement);
    });
    averageSeasons.innerHTML = "Seasons average: ".concat(getTotalTemps(series));
}
function getTotalTemps(series) {
    var totalTemps = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalTemps = totalTemps + serie.seasons;
        totalSeries += 1;
    });
    return totalTemps/totalSeries;
}