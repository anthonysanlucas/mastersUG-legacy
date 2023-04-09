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
    ['CARRERA MANOSALVAS IVETTE', 9],
    ['CHICALA ARROYAVE JORGE', 8],
    ['FLORES MORAN MANUEL', 7],
    ['ALVARADO UNAMUNO EDUARDO', 6],
    ['CRESPO MENDOZA ROBERTO', 6],
    ['ACARO CHACON XIMENA', 6],
    ['PADILLA GOMEZ RENZO', 5],
    ['MARIDUEÑA ARROYAVE MILTON', 4],
    ['DIAZ VERA JANETH', 3],
    ['LUNA AVEIGA HARRY', 3],
    ['MOLINA VILLACIS MIGUEL', 3],
    ['OROZCO LARA FAUSTO', 3],
    ['ESPIN PAZMINO LUIS', 2],
    ['LAMILLA RUBIO ERICK', 2],
    ['ORTIZ AGUILAR WILBER', 2]
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
    ['BARRIGA DIAZ RONALD', 22],
    ['ESPINOZA MARTINEZ MARIELA', 12],
    ['FLORES MORAN MANUEL', 8],
    ['YTURRALDE VILLAGOMEZ JUAN', 8],
    ['LUNA AVEIGA HARRY', 5],
    ['ACARO CHACON XIMENA', 4],
    ['ESPIN PAZMINO LUIS', 4],
    ['ALARCON SALVATIERRA PABLO', 3],
    ['CASTRO VERA VANESSA', 2],
    ['ESPINOZA BAZAN FABIAN', 2],
    ['LAMILLA RUBIO ERICK', 2],
    ['OROZCO LARA FAUSTO', 2],
    ['VANEGAS GUILLEN OSWALDO', 2],
    ['CARRERA MANOSALVAS IVETTE', 1],
    ['CHICALA ARROYAVE JORGE', 1]
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
    ['FLORES MORAN MANUEL', 23],
    ['YTURRALDE VILLAGOMEZ JUAN', 12],
    ['ACARO CHACON XIMENA', 7],
    ['ESPIN PAZMINO LUIS', 7],
    ['ESPINOZA MARTINEZ MARIELA', 7],
    ['REAL AVILES KARINA', 6],
    ['CRESPO MENDOZA ROBERTO', 4],
    ['LUNA AVEIGA HARRY', 4],
    ['CARRERA MANOSALVAS IVETTE', 3],
    ['ESPINOZA BAZAN FABIAN', 2],
    ['PALACIOS ORTIZ FRANSISCO', 2],
    ['OROZCO LARA FAUSTO', 2],
    ['VERGARA DIAZ NELLY', 2],
    ['YEPEZ HOLGUIN JESSICA', 1],
    ['CHICALA ARROYAVE JORGE', 1]
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
    ['ALARCON SALVATIERRA PABLO', 13],
    ['CHICALA ARROYAVE JORGE', 7],
    ['BARRIGA DIAZ RONALD', 6],
    ['ECHEVERRIA AVILA PABLO', 4],
    ['LUNA AVEIGA HARRY', 4],
    ['ORTIZ AGUILAR WILBER', 4],
    ['PADILLA GOMEZ RENZO', 4],
    ['QUINTANILLA CASTELLANOS JORGE', 4],
    ['CARRERA MANOSALVAS IVETTE', 3],
    ['LAMILLA RUBIO ERICK', 3],
    ['MONTENEGRO PATREL MAURICIO', 3],
    ['RAYMONDI LOMAS WILLIAM', 3],
    ['VERGARA DIAZ NELLY', 3],
    ['ACARO CHACON XIMENA', 2],
    ['ASANZA MOREIRA JOSE', 2]
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
    ['YTURRALDE VILLAGOMEZ JUAN', 14],
    ['ALARCON SALVATIERRA PABLO', 9],
    ['MONTENEGRO PATREL MAURICIO', 8],
    ['VERGARA DIAZ NELLY', 8],
    ['CARRERA MANOSALVAS IVETTE', 5],
    ['ESPINOZA MARTINEZ MARIELA', 5],
    ['ALVARADO MARQUEZ MARIANA', 3],
    ['ESPIN PAZMINO LUIS', 3],
    ['ESPINOZA BAZAN FABIAN', 3],
    ['LUNA AVEIGA HARRY', 3],
    ['NAVARRETE LLAGUNO PAOLA', 3],
    ['PALACIOS ORTIZ FRANSISCO', 3],
    ['ASANZA MOREIRA JOSE', 2],
    ['CABANILL BURGOS CECILIA', 2],
    ['CRESPO MENDOZA ROBERTO', 2]
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
    ['BARRIGA DIAZ RONALD', 16],
    ['FLORES MORAN MANUEL', 15],
    ['CASTRO VERA VANESSA', 7],
    ['ESPIN PAZMINO LUIS', 5],
    ['PICON FARAH CHRISTIAN', 4],
    ['ALVARADO UNAMUNO EDUARDO', 4],
    ['ARMIJOS VALAREZO LUIS', 3],
    ['ESPINOZA MARTINEZ MARIELA', 3],
    ['GIRALDO MARTINEZ INGRID', 3],
    ['LAMILLA RUBIO ERICK', 3],
    ['ORTIZ AGUILAR WILBER', 3],
    ['ALARCON SALVATIERRA PABLO', 2],
    ['ARIZAGA GAMBOA JENNY', 2],
    ['CONTRERAS PUCO SEGUNDO', 2],
    ['OCHOA FLORES ÁNGEL', 2]
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
    ['CHICALA ARROYAVE JORGE', 10],
    ['CARRERA MANOSALVAS IVETTE', 8],
    ['LAMILLA RUBIO ERICK', 7],
    ['FLORES MORAN MANUEL', 5],
    ['MARIDUEÑA ARROYAVE MILTON', 5],
    ['ACARO CHACON XIMENA', 4],
    ['ESPIN PAZMINO LUIS', 4],
    ['OROZCO LARA FAUSTO', 4],
    ['ALARCON SALVATIERRA PABLO', 3],
    ['ALVARADO UNAMUNO EDUARDO', 3],
    ['CRESPO MENDOZA ROBERTO', 3],
    ['ESPINOZA MARTINEZ MARIELA', 3],
    ['LUNA AVEIGA HARRY', 3],
    ['ORTIZ AGUILAR WILBER', 3],
    ['PADILLA GOMEZ RENZO', 3]
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
    ['BARRIGA DIAZ RONALD', 26],
    ['ESPINOZA MARTINEZ MARIELA', 11],
    ['LUNA AVEIGA HARRY', 8],
    ['ESPINOZA BAZAN FABIAN', 4],
    ['FLORES MORAN MANUEL', 4],
    ['PICON FARAH CHRISTIAN', 3],
    ['YTURRALDE VILLAGOMEZ JUAN', 3],
    ['ALARCON SALVATIERRA PABLO', 2],
    ['ARMIJOS VALAREZO LUIS', 2],
    ['DIAZ VERA JANETH', 2],
    ['ESPIN PAZMINO LUIS', 2],
    ['OROZCO LARA FAUSTO', 2],
    ['PALACIOS ORTIZ FRANSISCO', 2],
    ['PLUAS BURGOS JESSICA', 2],
    ['REAL AVILES KARINA', 2]
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
    ['ALARCON SALVATIERRA PABLO', 8],
    ['CRESPO MENDOZA ROBERTO', 7],
    ['ACARO CHACON XIMENA', 5],
    ['DIAZ VERA JANETH', 5],
    ['CHICALA ARROYAVE JORGE', 4],
    ['ESPIN PAZMINO LUIS', 4],
    ['LAMILLA RUBIO ERICK', 4],
    ['LUNA AVEIGA HARRY', 4],
    ['MONTENEGRO PATREL MAURICIO', 4],
    ['RAYMONDI LOMAS WILLIAM', 4],
    ['ECHEVERRIA AVILA PABLO', 3],
    ['ESPINOZA MARTINEZ MARIELA', 3],
    ['GIRALDO MARTINEZ INGRID', 3],
    ['PICON FARAH CHRISTIAN', 3],
    ['QUINTANILLA CASTELLANOS JORGE', 3]
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
    ['FLORES MORAN MANUEL', 12],
    ['YTURRALDE VILLAGOMEZ JUAN', 11],
    ['ESPINOZA MARTINEZ MARIELA', 8],
    ['LUNA AVEIGA HARRY', 8],
    ['BARRIGA DIAZ RONALD', 6],
    ['ESPIN PAZMINO LUIS', 6],
    ['ESPINOZA BAZAN FABIAN', 5],
    ['REAL AVILES KARINA', 4],
    ['CRESPO MENDOZA ROBERTO', 3],
    ['ARIZAGA GAMBOA JENNY', 2],
    ['OROZCO LARA FAUSTO', 2],
    ['ORTIZ AGUILAR WILBER', 2],
    ['PADILLA GOMEZ RENZO', 2],
    ['PALACIOS ORTIZ FRANSISCO', 2],
    ['VANEGAS GUILLEN OSWALDO', 2]
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
    ['CARRERA MANOSALVAS IVETTE', 6],
    ['CHICALA ARROYAVE JORGE', 5],
    ['ESPIN PAZMINO LUIS', 5],
    ['FLORES MORAN MANUEL', 5],
    ['LAMILLA RUBIO ERICK', 5],
    ['DIAZ VERA JANETH', 4],
    ['MARIDUEÑA ARROYAVE MILTON', 4],
    ['ACARO CHACON XIMENA', 3],
    ['ALVARADO UNAMUNO EDUARDO', 3],
    ['ARIZAGA GAMBOA JENNY', 3],
    ['CRESPO MENDOZA ROBERTO', 3],
    ['ECHEVERRIA AVILA PABLO', 3],
    ['ESPINOZA MARTINEZ MARIELA', 3],
    ['GIRALDO MARTINEZ INGRID', 3],
    ['PADILLA GOMEZ RENZO', 3]
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
    ['FLORES MORAN MANUEL', 12],
    ['LUNA AVEIGA HARRY JACINTO', 11],
    ['YTURRALDE VILLAGOMEZ JUAN', 11],
    ['ESPIN PAZMINO LUIS', 8],
    ['ESPINOZA MARTINEZ MARIELA', 8],
    ['ESPINOZA BAZAN FABIAN', 5],
    ['BARRIGA DIAZ RONALD', 4],
    ['PALACIOS ORTIZ FRANSISCO', 3],
    ['ALARCON SALVATIERRA PABLO', 2],
    ['CASTRO VERA VANESSA', 2],
    ['PADILLA GOMEZ RENZO', 2],
    ['REAL AVILES KARINA', 2],
    ['VANEGAS GUILLEN OSWALDO', 2],
    ['ACARO CHACON XIMENA', 2],
    ['ARIAS DOMINGUEZ MARJURIE', 2]
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
    ['ALARCON SALVATIERRA PABLO', 10],
    ['CARRERA MANOSALVAS IVETTE', 10],
    ['ACARO CHACON XIMENA', 6],
    ['CHICALA ARROYAVE JORGE', 6],
    ['FLORES MORAN MANUEL', 6],
    ['ASANZA MOREIRA JOSE', 4],
    ['CRESPO MENDOZA ROBERTO', 4],
    ['LUNA AVEIGA HARRY', 4],
    ['DIAZ VERA JANETH', 3],
    ['ECHEVERRIA AVILA PABLO', 3],
    ['MONTENEGRO PATREL MAURICIO', 3],
    ['RAYMONDI LOMAS WILLIAM', 3],
    ['YTURRALDE VILLAGOMEZ JUAN', 3],
    ['CABANILL BURGOS CECILIA', 2],
    ['ESPIN PAZMINO LUIS', 2]
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
    ['BARRIGA DIAZ RONALD', 34],
    ['ESPINOZA MARTINEZ MARIELA', 9],
    ['OROZCO LARA FAUSTO', 5],
    ['MARIDUEÑA ARROYAVE MILTON', 4],
    ['CHOEZ ACOSTA LUIS', 3],
    ['PICON FARAH CHRISTIAN', 3],
    ['CASTRO VERA VANESSA', 2],
    ['ESPIN PAZMINO LUIS', 2],
    ['FLORES MORAN MANUEL', 2],
    ['MOLINA VILLACIS MIGUEL', 2],
    ['VANEGAS GUILLEN OSWALDO', 2],
    ['VASQUEZ BERMUDEZ MITCHEL', 2],
    ['YTURRALDE VILLAGOMEZ JUAN', 2],
    ['ALARCON SALVATIERRA PABLO', 1],
    ['ARIAS DOMINGUEZ MARJURIE', 1]
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
