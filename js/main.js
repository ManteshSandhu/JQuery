/*
	Alex Tetervak, Sheridan College, Ontario
	based on the code of
	Ann Cadger, Sheridan College, Ontario
*/

"use strict"; // use the strict mode

$(function () {
    $.getJSON("data/canada.json", displayData);
});

function displayData(data){
    let divisions = data.divisions;
    let $out = $("#out");
    divisions.forEach(function (division, index) {
        $out.append(`<tr>
                         <th class="row">${index + 1}</th>
                         <td>${division.name}</td>
                         <td>${division.type}</td>
                         <td>${division.capital}</td>
                     </tr>`);
    });
}



