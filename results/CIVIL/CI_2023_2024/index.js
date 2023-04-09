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
    ['FUN SANG ROBINSON KERLY', 8],
    ['CAÑIZALES PERDOMO BELKIS', 8],
    ['POVEDA CISNEROS NILO', 5],
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 4],
    ['PARRA ORTEGA FRANKLIN', 4],
    ['BRIONES FRANCO JOHANNA', 3],
    ['ROBALINO DIAZ RAUL', 3],
    ['BARZOLA MONTESES JULIO', 2],
    ['BERMEO TIGRERO ISRAEL', 2],
    ['GONZALEZ CARRION OSCAR', 2],
    ['MITE LEON MONICA', 2],
    ['RAMIREZ ZAMBRANO GUSTAVO', 2],
    ['VIZCONDE CAMPOS ADALBERTO', 2],
    ['BANCHON ZUÑIGA TIBURCIO', 1],
    ['CORAPI PIETRO', 1]
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
    ['VARGAS JIMENEZ JULIO', 9],
    ['BRIONES FRANCO JOHANNA', 6],
    ['DEL ROSARIO MORENO FELIX', 5],
    ['VARGAS SALTOS MARIA', 5],
    ['MITE LEON MONICA', 4],
    ['STAY COELLO DAVID', 4],
    ['GARCIA MENDOZA GUSTAVO', 3],
    ['GONZALEZ RUIZ JOSE', 2],
    ['MONCAYO THEURER LENIN', 2],
    ['VILLACRESES VERA ADOLFO', 2],
    ['ALAVA MACIAS MARIELA', 1],
    ['ALVAREZ MORANTE ORLANDO', 1],
    ['BENAVIDES BURGOS OSCAR', 1],
    ['CORAPI PIETRO', 1],
    ['HENRIQUEZ ANTEPARA EVELYN', 1]
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
    ['VARGAS JIMENEZ JULIO', 10],
    ['ROBALINO DIAZ RAUL', 5],
    ['BRIONES FRANCO JOHANNA', 4],
    ['BRIONES ORTIZ LUIS', 4],
    ['DEL ROSARIO MORENO FELIX', 4],
    ['GARCIA MENDOZA GUSTAVO', 4],
    ['STAY COELLO DAVID', 4],
    ['MITE LEON MONICA', 3],
    ['TIRADO SANABRIA ALBERTO', 3],
    ['JAMA ZAMBRANO ALEXIS', 2],
    ['VIZCONDE CAMPOS ADALBERTO', 2],
    ['ALVAREZ MORANTE ORLANDO', 1],
    ['CARRION MERA PAUL', 1],
    ['HENRIQUEZ ANTEPARA EVELYN', 1],
    ['MARQUEZ GALLEGOS MARIO', 1]
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
    ['CAÑIZALES PERDOMO BELKIS', 7],
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 6],
    ['FUN SANG ROBINSON KERLY', 6],
    ['POVEDA CISNEROS NILO', 6],
    ['RAMIREZ ZAMBRANO GUSTAVO', 4],
    ['BERMEO TIGRERO ISRAEL', 3],
    ['BANCHON ZUÑIGA TIBURCIO', 2],
    ['ROBALINO DIAZ RAUL', 2],
    ['BARZOLA MONTESES JULIO', 1],
    ['BRIONES FRANCO JOHANNA', 1],
    ['BRIONES ORTIZ LUIS', 1],
    ['CAMPOVERDE AGUIRRE LARRY', 1],
    ['CEVALLOS REVELO ZOILA', 1],
    ['CHALEN MEDINA JUDITH', 1],
    ['CUSME VERA CARLOS', 1]
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
    ['VARGAS SALTOS MARIA', 11],
    ['GARCIA MENDOZA GUSTAVO', 5],
    ['VILLA RIOS ANGELA', 5],
    ['CUSME VERA CARLOS', 3],
    ['VIZCONDE CAMPOS ADALBERTO', 3],
    ['ALAVA MACIAS MARIELA', 2],
    ['BANCHON ZUÑIGA TIBURCIO', 2],
    ['BARZOLA MONTESES JULIO', 2],
    ['DEL ROSARIO MORENO FELIX', 2],
    ['HENRIQUEZ ANTEPARA EVELYN', 2],
    ['MITE LEON MONICA', 2],
    ['VARGAS JIMENEZ JULIO', 2],
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 1],
    ['ALVAREZ MORANTE ORLANDO', 1],
    ['BRIONES FRANCO JOHANNA', 1]
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
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 8],
    ['FUN SANG ROBINSON KERLY', 7],
    ['POVEDA CISNEROS NILO', 5],
    ['CAÑIZALES PERDOMO BELKIS', 3],
    ['STAY COELLO DAVID', 3],
    ['VARGAS JIMENEZ JULIO', 3],
    ['GONZALEZ CARRION OSCAR', 2],
    ['MITE LEON MONICA', 2],
    ['MONCAYO THEURER LENIN', 2],
    ['ORTIZ AGUIRRE ISAAKC', 2],
    ['BERMEO TIGRERO ISRAEL', 1],
    ['BRIONES FRANCO JOHANNA', 1],
    ['BRIONES ORTIZ LUIS', 1],
    ['CUSME VERA CARLOS', 1],
    ['FLOR CHAVEZ GINO', 1]
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
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 8],
    ['FUN SANG ROBINSON KERLY', 6],
    ['GONZALEZ CARRION OSCAR', 4],
    ['HENRIQUEZ ANTEPARA EVELYN', 4],
    ['BERMEO TIGRERO ISRAEL', 3],
    ['CORAPI PIETRO', 3],
    ['PARRA ORTEGA FRANKLIN', 3],
    ['RAMIREZ ZAMBRANO GUSTAVO', 3],
    ['CAÑIZALES PERDOMO BELKIS', 2],
    ['ORTIZ AGUIRRE ISAAKC', 2],
    ['POVEDA CISNEROS NILO', 2],
    ['RODRIGUEZ SANTOS JOSUE', 2],
    ['BARZOLA MONTESES JULIO', 1],
    ['BRIONES FRANCO JOHANNA', 1],
    ['FRANCO REINA JOSE', 1]
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
    ['VARGAS JIMENEZ JULIO', 9],
    ['VARGAS SALTOS MARIA', 8],
    ['BRIONES FRANCO JOHANNA', 5],
    ['CHALEN MEDINA JUDITH', 3],
    ['STAY COELLO DAVID', 3],
    ['ALVAREZ MORANTE ORLANDO', 2],
    ['DEL ROSARIO MORENO FELIX', 2],
    ['GARCIA MENDOZA GUSTAVO', 2],
    ['HENRIQUEZ ANTEPARA EVELYN', 2],
    ['MARQUEZ GALLEGOS MARIO', 2],
    ['MITE LEON MONICA', 2],
    ['TIRADO SANABRIA ALBERTO', 2],
    ['CORAPI PIETRO', 2],
    ['CUSME VERA CARLOS', 1],
    ['MARMOL ACOSTA XAVIER', 1]
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
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 7],
    ['FUN SANG ROBINSON KERLY', 6],
    ['CAÑIZALES PERDOMO BELKIS', 5],
    ['ORTIZ AGUIRRE ISAAKC', 5],
    ['POVEDA CISNEROS NILO', 5],
    ['BERMEO TIGRERO ISRAEL', 3],
    ['BRIONES FRANCO JOHANNA', 3],
    ['ORDOÑEZ ZUÑIGA ALFONSO', 3],
    ['GONZALEZ CARRION OSCAR', 2],
    ['LOPEZ CEREZO DAKAR', 2],
    ['BANCHON ZUÑIGA TIBURCIO', 1],
    ['CORAPI PIETRO', 1],
    ['FRANCO REINA JOSE', 1],
    ['HENRIQUEZ ANTEPARA EVELYN', 1],
    ['RAMIREZ ZAMBRANO GUSTAVO', 1]
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
    ['VARGAS SALTOS MARIA', 7],
    ['MITE LEON MONICA', 6],
    ['GARCIA MENDOZA GUSTAVO', 5],
    ['STAY COELLO DAVID', 5],
    ['VARGAS JIMENEZ JULIO', 5],
    ['BRIONES FRANCO JOHANNA', 3],
    ['ALVAREZ MORANTE ORLANDO', 2],
    ['GONZALEZ RUIZ JOSE', 2],
    ['JAMA ZAMBRANO ALEXIS', 2],
    ['ALAVA MACIAS MARIELA', 1],
    ['BARZOLA MONTESES JULIO', 1],
    ['BRIONES ORTIZ LUIS', 1],
    ['CHALEN MEDINA JUDITH', 1],
    ['DEL ROSARIO MORENO FELIX', 1],
    ['FRANCO REINA JOSE', 1]
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
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 6],
    ['FUN SANG ROBINSON KERLY', 6],
    ['HENRIQUEZ ANTEPARA EVELYN', 6],
    ['ORTIZ AGUIRRE ISAAKC', 6],
    ['CAÑIZALES PERDOMO BELKIS', 4],
    ['BERMEO TIGRERO ISRAEL', 2],
    ['BRIONES FRANCO JOHANNA', 2],
    ['POVEDA CISNEROS NILO', 2],
    ['VIZCONDE CAMPOS ADALBERTO', 2],
    ['BANCHON ZUÑIGA TIBURCIO', 1],
    ['BARZOLA MONTESES JULIO', 1],
    ['CAMPOVERDE AGUIRRE LARRY', 1],
    ['CHALEN MEDINA JUDITH', 1],
    ['CORAPI PIETRO', 1],
    ['CUSME VERA CARLOS', 1]
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
    ['DEL ROSARIO MORENO FELIX', 8],
    ['VARGAS JIMENEZ JULIO', 7],
    ['GARCIA MENDOZA GUSTAVO', 4],
    ['VARGAS SALTOS MARIA', 4],
    ['BRIONES ORTIZ LUIS', 3],
    ['JAMA ZAMBRANO ALEXIS', 3],
    ['MITE LEON MONICA', 3],
    ['STAY COELLO DAVID', 3],
    ['BRIONES FRANCO JOHANNA', 2],
    ['ROBALINO DIAZ RAUL', 2],
    ['VIZCONDE CAMPOS ADALBERTO', 2],
    ['ALAVA MACIAS MARIELA', 1],
    ['ALVAREZ MORANTE ORLANDO', 1],
    ['BARZOLA MONTESES JULIO', 1],
    ['CARRION MERA PAUL', 1]
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
    ['ALMENDARIZ RODRIGUEZ CHRISTIAN', 7],
    ['FUN SANG ROBINSON KERLY', 5],
    ['BRIONES ORTIZ LUIS', 4],
    ['MITE LEON MONICA', 4],
    ['ROBALINO DIAZ RAUL', 4],
    ['CORAPI PIETRO', 3],
    ['VIZCONDE CAMPOS ADALBERTO', 3],
    ['BANCHON ZUÑIGA TIBURCIO', 2],
    ['BERMEO TIGRERO ISRAEL', 2],
    ['CAÑIZALES PERDOMO BELKIS', 2],
    ['JORDAN ROMERO ANTONIO', 2],
    ['ORTIZ AGUIRRE ISAAKC', 2],
    ['PARRA ORTEGA FRANKLIN', 2],
    ['TIRADO SANABRIA ALBERTO', 2],
    ['CHALEN MEDINA JUDITH', 1]
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
    ['VARGAS JIMENEZ JULIO', 13],
    ['VARGAS SALTOS MARIA', 13],
    ['STAY COELLO DAVID', 5],
    ['POVEDA CISNEROS NILO', 4],
    ['BRIONES FRANCO JOHANNA', 2],
    ['HENRIQUEZ ANTEPARA EVELYN', 2],
    ['ALVAREZ MORANTE ORLANDO', 1],
    ['ARROYO OROZCO JORGE', 1],
    ['BENAVIDES BURGOS OSCAR', 1],
    ['DEL ROSARIO MORENO FELIX', 1],
    ['FLOR CHAVEZ GINO', 1],
    ['GARCIA MENDOZA GUSTAVO', 1],
    ['GONZALEZ RUIZ JOSE', 1],
    ['LOPEZ CEREZO DAKAR', 1],
    ['MONCAYO THEURER LENIN', 1]
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
