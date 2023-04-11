google.charts.load('current', { packages: ['corechart'] })

google.charts.setOnLoadCallback(learning1)
google.charts.setOnLoadCallback(learning2)
google.charts.setOnLoadCallback(difficulty1)
google.charts.setOnLoadCallback(difficulty2)
google.charts.setOnLoadCallback(tasks1)
google.charts.setOnLoadCallback(tasks2)
google.charts.setOnLoadCallback(interest1)
google.charts.setOnLoadCallback(interest2)
google.charts.setOnLoadCallback(empathy1)
google.charts.setOnLoadCallback(empathy2)
google.charts.setOnLoadCallback(participation1)
google.charts.setOnLoadCallback(participation2)
google.charts.setOnLoadCallback(punctuality1)
google.charts.setOnLoadCallback(punctuality2)

const options = {
  backgroundColor: 'transparent',
  width: 'max-content',
  height: 800,
  legend: { position: 'none' },
  bar: {
    groupWidth: '40%'
  },
  annotations: {
    alwaysOutside: false,
    textStyle: {
      fontSize: 12,
      color: '#292929'
    }
  },
  vAxis: {
    textStyle: {
      fontName: 'Manrope',
      fontSize: 12,
      color: '#475569'
    }
  },
  hAxis: {
    textStyle: {
      color: '#475569'
    }
  },
  chartArea: {
    backgroundColor: {
      fill: 'transparent',
      strokeWidth: 1,
      stroke: '#475569'
    },
    top: 40,
    right: 5,
    bottom: 40,
    left: 5,
    width: '65%',
    left: '35%'
  },
  tooltip: {
    textStyle: {
      color: '#475569'
    },
    backgroundColor: {
      fill: '#fff',
      strokeWidth: 1,
      stroke: '#475569'
    }
  }
}

function learning1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CHÁVEZ CUJILÁN YELENA', 10],
    ['ABAD SACOTO KARLA', 7],
    ['CUENCA ORTEGA ANGEL', 6],
    ['GALARZA SOLEDISPA MARIA', 6],
    ['PARRALES BRAVO FRANKLIN', 6],
    ['ALVAREZ SOLIS FRANCISCO', 5],
    ['BOTTO TOBAR MIGUEL', 5],
    ['AVILES MONROY JORGE', 3],
    ['JACOME MORALES GLADYS', 3],
    ['LEON GRANIZO OSCAR', 3],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['ESPIN RIOFRIO CESAR', 2],
    ['REYES WAGNIO MANUEL', 2],
    ['YANZA MONTALVAN ANGELA', 2],
    ['LARA GAVILANEZ HECTOR', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('learning-1'))
  chart.draw(view, options)
}

function learning2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['MENDOZA MORAN VERONICA', 15],
    ['CUENCA ORTEGA ANGEL', 8],
    ['PATIÑO PEREZ DARWIN', 7],
    ['CEVALLOS TORRES LORENZO', 5],
    ['LEYVA VASQUEZ MAIKEL', 3],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 3],
    ['ORDOÑEZ VALENCIA MAYLEE', 3],
    ['PERALTA GUARACA TANIA', 3],
    ['AVILES MONROY JORGE', 2],
    ['CASTRO AGUILAR GILBERTO', 2],
    ['CHARCO AGUIRRE JORGE', 2],
    ['ESPIN RIOFRIO CESAR', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['GARZON RODAS MAURICIO', 2],
    ['LEON BAZAN YULIANA', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('learning-2'))
  chart.draw(view, options)
}

function difficulty1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CUENCA ORTEGA ANGEL', 18],
    ['MENDOZA MORAN VERONICA', 16],
    ['AVILES MONROY JORGE', 7],
    ['GUIJARRO RODRIGUEZ ALFONSO', 4],
    ['BOTTO TOBAR MIGUEL', 3],
    ['MINDA GILCES DIANA', 3],
    ['ABAD SACOTO KARLA', 2],
    ['CASTRO AGUILAR GILBERTO', 2],
    ['CHARCO AGUIRRE JORGE', 2],
    ['JACOME MORALES GLADYS', 2],
    ['MOLINA CALDERON MIGUEL', 2],
    ['ORTIZ ZAMBRANO JENNY', 2],
    ['VARELA TAPIA ELEANOR', 2],
    ['CEVALLOS TORRES LORENZO', 2],
    ['CASTRO MARIDUEÑA ADRIANA', 1]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('difficulty-1'))
  chart.draw(view, options)
}

function difficulty2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CHÁVEZ CUJILÁN YELENA', 8],
    ['PARRALES BRAVO FRANKLIN', 8],
    ['ESPIN RIOFRIO CESAR', 7],
    ['ALVAREZ SOLIS FRANCISCO', 5],
    ['REYES WAGNIO MANUEL', 4],
    ['DIAZ CADENA ANGELA', 3],
    ['LEON GRANIZO OSCAR', 3],
    ['ABAD SACOTO KARLA', 3],
    ['GALARZA SOLEDISPA MARIA', 3],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['AVILES MONROY JORGE', 2],
    ['CALERO VILLARREAL RICHARD', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['GARCIA ARIAS PEDRO', 2],
    ['NARANJO PEÑA IRMA', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('difficulty-2'))
  chart.draw(view, options)
}

function tasks1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['YANZA MONTALVAN ANGELA', 24],
    ['VARELA TAPIA ELEANOR', 8],
    ['ALONSO ANGUIZACA JOSE', 7],
    ['CUENCA ORTEGA ANGEL', 5],
    ['MENDOZA MORAN VERONICA', 5],
    ['CEVALLOS TORRES LORENZO', 3],
    ['FAGGIONI COLOMBO KATYA', 3],
    ['REYES ZAMBRANO GARY', 3],
    ['SANTOS DIAZ LILIA', 3],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 3],
    ['ABAD SACOTO KARLA', 2],
    ['ESPIN RIOFRIO CESAR', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['CHARCO AGUIRRE JORGE', 1],
    ['LEYVA VASQUEZ MAIKEL', 1]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('tasks-1'))
  chart.draw(view, options)
}

function tasks2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['RUATA AVILES SILVIA', 9],
    ['ESPIN RIOFRIO CESAR', 6],
    ['LEON GRANIZO OSCAR', 6],
    ['GALARZA SOLEDISPA MARIA', 5],
    ['PATIÑO PEREZ DARWIN', 5],
    ['ALVAREZ SOLIS FRANCISCO', 4],
    ['MINDA GILCES DIANA', 4],
    ['COLLANTES FARAH ALEX', 3],
    ['DIAZ CADENA ANGELA', 3],
    ['LEYVA VASQUEZ MAIKEL', 3],
    ['CRUZ CHOEZ ANGELICA', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['GARCIA ARIAS PEDRO', 2],
    ['ORDOÑEZ VALENCIA MAYLEE', 2],
    ['ALCIVAR MALDONADO TATIANA', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('tasks-2'))
  chart.draw(view, options)
}

function interest1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['BOTTO TOBAR MIGUEL', 10],
    ['GALARZA SOLEDISPA MARIA', 7],
    ['CHÁVEZ CUJILÁN YELENA', 6],
    ['CUENCA ORTEGA ANGEL', 6],
    ['ABAD SACOTO KARLA', 4],
    ['YANZA MONTALVAN ANGELA', 4],
    ['AVILES MONROY JORGE', 4],
    ['ALVAREZ SOLIS FRANCISCO', 3],
    ['ESPIN RIOFRIO CESAR', 3],
    ['PARRALES BRAVO FRANKLIN', 3],
    ['GARCIA ARIAS PEDRO', 2],
    ['GUIJARRO RODRIGUEZ ALFONSO', 2],
    ['JACOME MORALES GLADYS', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['REYES WAGNIO MANUEL', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('interest-1'))
  chart.draw(view, options)
}

function interest2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['MENDOZA MORAN VERONICA', 14],
    ['PATIÑO PEREZ DARWIN', 7],
    ['CUENCA ORTEGA ANGEL', 6],
    ['CEVALLOS TORRES LORENZO', 5],
    ['LEYVA VASQUEZ MAIKEL', 5],
    ['MINDA GILCES DIANA', 4],
    ['TEJADA YEPEZ SILVIA', 4],
    ['AVILES MONROY JORGE', 3],
    ['ORTIZ ZAMBRANO JENNY', 3],
    ['ABAD SACOTO KARLA', 2],
    ['CALERO VILLARREAL RICHARD', 2],
    ['ESPIN RIOFRIO CESAR', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 2],
    ['ZUMBA GAMBOA JOHANNA', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('interest-2'))
  chart.draw(view, options)
}

function empathy1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['ALVAREZ SOLIS FRANCISCO', 8],
    ['CHÁVEZ CUJILÁN YELENA', 8],
    ['GALARZA SOLEDISPA MARIA', 8],
    ['PARRALES BRAVO FRANKLIN', 7],
    ['ALONSO ANGUIZACA JOSE', 5],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 5],
    ['REYES WAGNIO MANUEL', 4],
    ['CALERO VILLARREAL RICHARD', 2],
    ['CUENCA ORTEGA ANGEL', 2],
    ['LARA GAVILANEZ HECTOR', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['MINDA GILCES DIANA', 2],
    ['PERALTA GUARACA TANIA', 2],
    ['TEJADA YEPEZ SILVIA', 2],
    ['ABAD SACOTO KARLA', 1]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('empathy-1'))
  chart.draw(view, options)
}

function empathy2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CUENCA ORTEGA ANGEL', 17],
    ['MENDOZA MORAN VERONICA', 16],
    ['ORTIZ ZAMBRANO JENNY', 9],
    ['VARELA TAPIA ELEANOR', 5],
    ['PATIÑO PEREZ DARWIN', 3],
    ['CEVALLOS TORRES LORENZO', 3],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['CASTRO AGUILAR GILBERTO', 2],
    ['CEDEÑO RODRIGUEZ JUAN', 2],
    ['CHARCO AGUIRRE JORGE', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['PARRALES BRAVO FRANKLIN', 2],
    ['TEJADA YEPEZ SILVIA', 2],
    ['YANZA MONTALVAN ANGELA', 2],
    ['GUIJARRO RODRIGUEZ ALFONSO', 1]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('empathy-2'))
  chart.draw(view, options)
}

function participation1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CHÁVEZ CUJILÁN YELENA', 9],
    ['CUENCA ORTEGA ANGEL', 5],
    ['YANZA MONTALVAN ANGELA', 5],
    ['BOTTO TOBAR MIGUEL', 4],
    ['GALARZA SOLEDISPA MARIA', 4],
    ['ALVAREZ SOLIS FRANCISCO', 3],
    ['GARCIA ARIAS PEDRO', 3],
    ['AVILES MONROY JORGE', 3],
    ['MINDA GILCES DIANA', 3],
    ['ORTIZ ZAMBRANO JENNY', 3],
    ['DIAZ CADENA ANGELA', 2],
    ['GUIJARRO RODRIGUEZ ALFONSO', 2],
    ['JACOME MORALES GLADYS', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['LARA GAVILANEZ HECTOR', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('participation-1'))
  chart.draw(view, options)
}

function participation2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CUENCA ORTEGA ANGEL', 15],
    ['MENDOZA MORAN VERONICA', 14],
    ['VARELA TAPIA ELEANOR', 6],
    ['AVILES MONROY JORGE', 5],
    ['ORTIZ ZAMBRANO JENNY', 4],
    ['PATIÑO PEREZ DARWIN', 4],
    ['ESPIN RIOFRIO CESAR', 3],
    ['CASTRO AGUILAR GILBERTO', 3],
    ['YANZA MONTALVAN ANGELA', 3],
    ['CEVALLOS TORRES LORENZO', 3],
    ['BOTTO TOBAR MIGUEL', 2],
    ['CHARCO AGUIRRE JORGE', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 2],
    ['ALARCON SALVATIERRA JOSE', 1]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('participation-2'))
  chart.draw(view, options)
}

function punctuality1() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['CUENCA ORTEGA ANGEL', 7],
    ['BOTTO TOBAR MIGUEL', 6],
    ['CHÁVEZ CUJILÁN YELENA', 5],
    ['DIAZ CADENA ANGELA', 5],
    ['ABAD SACOTO KARLA', 5],
    ['RODRIGUEZ REVELO ELSY', 5],
    ['GALARZA SOLEDISPA MARIA', 4],
    ['LEON GRANIZO OSCAR', 4],
    ['GUIJARRO RODRIGUEZ ALFONSO', 4],
    ['YANZA MONTALVAN ANGELA', 4],
    ['ESPIN RIOFRIO CESAR', 3],
    ['ALVAREZ SOLIS FRANCISCO', 2],
    ['JACOME MORALES GLADYS', 2],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 2],
    ['PARRALES BRAVO FRANKLIN', 2]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('punctuality-1'))
  chart.draw(view, options)
}

function punctuality2() {
  const data = google.visualization.arrayToDataTable([
    ['Profesor', 'Votos'],
    ['RUATA AVILES SILVIA', 11],
    ['MENDOZA MORAN VERONICA', 8],
    ['LEYVA VASQUEZ MAIKEL', 7],
    ['PATIÑO PEREZ DARWIN', 7],
    ['ORTIZ ZAMBRANO JENNY', 7],
    ['PERALTA GUARACA TANIA', 5],
    ['RAMOS MOSQUERA BOLIVAR', 4],
    ['COLLANTES FARAH ALEX', 3],
    ['MINDA GILCES DIANA', 3],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['AVILES MONROY JORGE', 2],
    ['RODRIGUEZ REVELO ELSY', 2],
    ['ALARCON SALVATIERRA JOSE', 1],
    ['BEJARANO OSPINA LUZ', 1],
    ['BOTTO TOBAR MIGUEL', 1]
  ])

  const view = new google.visualization.DataView(data)
  view.setColumns([
    0,
    1,
    { calc: 'stringify', sourceColumn: 1, type: 'string', role: 'annotation' }
  ])

  const chart = new google.visualization.BarChart(document.getElementById('punctuality-2'))
  chart.draw(view, options)
}
