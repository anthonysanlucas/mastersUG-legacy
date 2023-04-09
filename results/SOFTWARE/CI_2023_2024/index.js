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
    ['CHÁVEZ CUJILÁN YELENA', 9],
    ['ABAD SACOTO KARLA', 6],
    ['CUENCA ORTEGA ANGEL', 6],
    ['ALVAREZ SOLIS FRANCISCO', 5],
    ['BOTTO TOBAR MIGUEL', 5],
    ['GALARZA SOLEDISPA MARIA', 5],
    ['PARRALES BRAVO FRANKLIN', 5],
    ['AVILES MONROY JORGE', 3],
    ['JACOME MORALES GLADYS', 3],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['ESPIN RIOFRIO CESAR', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['REYES WAGNIO MANUEL', 2],
    ['YANZA MONTALVAN ANGELA', 2],
    ['BEJARANO OSPINA LUZ', 1]
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
    ['MENDOZA MORAN VERONICA', 12],
    ['CUENCA ORTEGA ANGEL', 6],
    ['PATIÑO PEREZ DARWIN', 6],
    ['CEVALLOS TORRES LORENZO', 4],
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
    ['CUENCA ORTEGA ANGEL', 16],
    ['MENDOZA MORAN VERONICA', 13],
    ['AVILES MONROY JORGE', 7],
    ['BOTTO TOBAR MIGUEL', 3],
    ['GUIJARRO RODRIGUEZ ALFONSO', 3],
    ['MINDA GILCES DIANA', 3],
    ['ABAD SACOTO KARLA', 2],
    ['CASTRO AGUILAR GILBERTO', 2],
    ['CHARCO AGUIRRE JORGE', 2],
    ['JACOME MORALES GLADYS', 2],
    ['MOLINA CALDERON MIGUEL', 2],
    ['ORTIZ ZAMBRANO JENNY', 2],
    ['VARELA TAPIA ELEANOR', 2],
    ['CASTRO MARIDUEÑA ADRIANA', 1],
    ['CEVALLOS TORRES LORENZO', 1]
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
    ['PARRALES BRAVO FRANKLIN', 7],
    ['ESPIN RIOFRIO CESAR', 5],
    ['ALVAREZ SOLIS FRANCISCO', 4],
    ['REYES WAGNIO MANUEL', 4],
    ['DIAZ CADENA ANGELA', 3],
    ['LEON GRANIZO OSCAR', 3],
    ['ABAD SACOTO KARLA', 2],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['AVILES MONROY JORGE', 2],
    ['CALERO VILLARREAL RICHARD', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['GALARZA SOLEDISPA MARIA', 2],
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
    ['YANZA MONTALVAN ANGELA', 19],
    ['VARELA TAPIA ELEANOR', 8],
    ['ALONSO ANGUIZACA JOSE', 7],
    ['CUENCA ORTEGA ANGEL', 5],
    ['MENDOZA MORAN VERONICA', 5],
    ['CEVALLOS TORRES LORENZO', 3],
    ['FAGGIONI COLOMBO KATYA', 3],
    ['REYES ZAMBRANO GARY', 3],
    ['SANTOS DIAZ LILIA', 3],
    ['ABAD SACOTO KARLA', 2],
    ['ESPIN RIOFRIO CESAR', 2],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 2],
    ['CHARCO AGUIRRE JORGE', 1],
    ['LEON GRANIZO OSCAR', 1],
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
    ['RUATA AVILES SILVIA', 8],
    ['ESPIN RIOFRIO CESAR', 5],
    ['GALARZA SOLEDISPA MARIA', 5],
    ['LEON GRANIZO OSCAR', 5],
    ['PATIÑO PEREZ DARWIN', 5],
    ['ALVAREZ SOLIS FRANCISCO', 4],
    ['MINDA GILCES DIANA', 4],
    ['COLLANTES FARAH ALEX', 3],
    ['DIAZ CADENA ANGELA', 3],
    ['CRUZ CHOEZ ANGELICA', 2],
    ['FAGGIONI COLOMBO KATYA', 2],
    ['GARCIA ARIAS PEDRO', 2],
    ['LEYVA VASQUEZ MAIKEL', 2],
    ['ORDOÑEZ VALENCIA MAYLEE', 2],
    ['REYES WAGNIO MANUEL', 2]
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
    ['BOTTO TOBAR MIGUEL', 9],
    ['CHÁVEZ CUJILÁN YELENA', 6],
    ['CUENCA ORTEGA ANGEL', 6],
    ['GALARZA SOLEDISPA MARIA', 6],
    ['ABAD SACOTO KARLA', 4],
    ['YANZA MONTALVAN ANGELA', 4],
    ['ALVAREZ SOLIS FRANCISCO', 3],
    ['AVILES MONROY JORGE', 3],
    ['ESPIN RIOFRIO CESAR', 2],
    ['GARCIA ARIAS PEDRO', 2],
    ['GUIJARRO RODRIGUEZ ALFONSO', 2],
    ['JACOME MORALES GLADYS', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['PARRALES BRAVO FRANKLIN', 2],
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
    ['MENDOZA MORAN VERONICA', 12],
    ['PATIÑO PEREZ DARWIN', 6],
    ['CUENCA ORTEGA ANGEL', 5],
    ['CEVALLOS TORRES LORENZO', 4],
    ['LEYVA VASQUEZ MAIKEL', 4],
    ['MINDA GILCES DIANA', 4],
    ['AVILES MONROY JORGE', 3],
    ['ORTIZ ZAMBRANO JENNY', 3],
    ['TEJADA YEPEZ SILVIA', 3],
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
    ['ALVAREZ SOLIS FRANCISCO', 7],
    ['CHÁVEZ CUJILÁN YELENA', 7],
    ['GALARZA SOLEDISPA MARIA', 7],
    ['ALONSO ANGUIZACA JOSE', 5],
    ['PARRALES BRAVO FRANKLIN', 5],
    ['LOPEZDOMINGUEZ RIVAS LEILI', 4],
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
    ['MENDOZA MORAN VERONICA', 14],
    ['CUENCA ORTEGA ANGEL', 13],
    ['ORTIZ ZAMBRANO JENNY', 9],
    ['VARELA TAPIA ELEANOR', 5],
    ['PATIÑO PEREZ DARWIN', 3],
    ['ALONSO ANGUIZACA JOSE', 2],
    ['CASTRO AGUILAR GILBERTO', 2],
    ['CEDEÑO RODRIGUEZ JUAN', 2],
    ['CEVALLOS TORRES LORENZO', 2],
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
    ['CHÁVEZ CUJILÁN YELENA', 8],
    ['CUENCA ORTEGA ANGEL', 5],
    ['BOTTO TOBAR MIGUEL', 4],
    ['GALARZA SOLEDISPA MARIA', 4],
    ['YANZA MONTALVAN ANGELA', 4],
    ['ALVAREZ SOLIS FRANCISCO', 3],
    ['GARCIA ARIAS PEDRO', 3],
    ['AVILES MONROY JORGE', 2],
    ['DIAZ CADENA ANGELA', 2],
    ['GUIJARRO RODRIGUEZ ALFONSO', 2],
    ['JACOME MORALES GLADYS', 2],
    ['LEON GRANIZO OSCAR', 2],
    ['MINDA GILCES DIANA', 2],
    ['ORTIZ ZAMBRANO JENNY', 2],
    ['PARRALES BRAVO FRANKLIN', 2]
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
    ['CUENCA ORTEGA ANGEL', 14],
    ['MENDOZA MORAN VERONICA', 12],
    ['VARELA TAPIA ELEANOR', 6],
    ['AVILES MONROY JORGE', 5],
    ['ORTIZ ZAMBRANO JENNY', 4],
    ['ESPIN RIOFRIO CESAR', 3],
    ['PATIÑO PEREZ DARWIN', 3],
    ['YANZA MONTALVAN ANGELA', 3],
    ['BOTTO TOBAR MIGUEL', 2],
    ['CASTRO AGUILAR GILBERTO', 2],
    ['CEVALLOS TORRES LORENZO', 2],
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
    ['BOTTO TOBAR MIGUEL', 6],
    ['CUENCA ORTEGA ANGEL', 6],
    ['CHÁVEZ CUJILÁN YELENA', 5],
    ['DIAZ CADENA ANGELA', 5],
    ['ABAD SACOTO KARLA', 4],
    ['GALARZA SOLEDISPA MARIA', 4],
    ['LEON GRANIZO OSCAR', 4],
    ['RODRIGUEZ REVELO ELSY', 4],
    ['GUIJARRO RODRIGUEZ ALFONSO', 3],
    ['YANZA MONTALVAN ANGELA', 3],
    ['ALVAREZ SOLIS FRANCISCO', 2],
    ['ESPIN RIOFRIO CESAR', 2],
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
    ['RUATA AVILES SILVIA', 10],
    ['MENDOZA MORAN VERONICA', 7],
    ['LEYVA VASQUEZ MAIKEL', 6],
    ['PATIÑO PEREZ DARWIN', 6],
    ['ORTIZ ZAMBRANO JENNY', 5],
    ['PERALTA GUARACA TANIA', 5],
    ['COLLANTES FARAH ALEX', 3],
    ['MINDA GILCES DIANA', 3],
    ['RAMOS MOSQUERA BOLIVAR', 3],
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
