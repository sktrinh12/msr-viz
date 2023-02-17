import PlotlyComponent from 'react-plotly.js'

const mockData = {
  data: [
    {
      ID: 0,
      COMPOUND_ID: 'FT003977',
      CREATED_DATE: '2022-11-11T17:53:32',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -6,
    },
    {
      ID: 1,
      COMPOUND_ID: 'FT007578',
      CREATED_DATE: '2022-11-11T17:53:32',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 2,
      COMPOUND_ID: 'FT009070',
      CREATED_DATE: '2022-11-11T17:53:32',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 3,
      COMPOUND_ID: 'FT009067',
      CREATED_DATE: '2022-11-11T17:53:32',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 4,
      COMPOUND_ID: 'FT008741',
      CREATED_DATE: '2022-11-11T17:53:32',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 5,
      COMPOUND_ID: 'FT009069',
      CREATED_DATE: '2022-11-11T17:53:32',
      ROW_COUNT: 2,
      DIFF_IC50: -0.08165297061013899,
      AVG_IC50: -5.04082648530507,
    },
    {
      ID: 6,
      COMPOUND_ID: 'FT008821',
      CREATED_DATE: '2022-11-04T15:34:14',
      ROW_COUNT: 2,
      DIFF_IC50: 0.01943312270286054,
      AVG_IC50: -4.99028343864857,
    },
    {
      ID: 7,
      COMPOUND_ID: 'FT008894',
      CREATED_DATE: '2022-11-04T15:34:14',
      ROW_COUNT: 2,
      DIFF_IC50: -0.015673113631283597,
      AVG_IC50: -5.007836556815642,
    },
    {
      ID: 8,
      COMPOUND_ID: 'FT009007',
      CREATED_DATE: '2022-11-04T15:34:14',
      ROW_COUNT: 2,
      DIFF_IC50: -0.10602739477891537,
      AVG_IC50: -5.053013697389457,
    },
    {
      ID: 9,
      COMPOUND_ID: 'FT008945',
      CREATED_DATE: '2022-11-04T15:34:14',
      ROW_COUNT: 2,
      DIFF_IC50: -0.09062521260930813,
      AVG_IC50: -5.207833432950564,
    },
    {
      ID: 10,
      COMPOUND_ID: 'FT008980',
      CREATED_DATE: '2022-10-21T16:30:53',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 11,
      COMPOUND_ID: 'FT008944',
      CREATED_DATE: '2022-11-04T15:34:14',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 12,
      COMPOUND_ID: 'FT008947',
      CREATED_DATE: '2022-10-21T16:30:53',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 13,
      COMPOUND_ID: 'FT007615',
      CREATED_DATE: '2022-11-04T15:34:14',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 14,
      COMPOUND_ID: 'FT008798',
      CREATED_DATE: '2022-10-28T15:33:22',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 15,
      COMPOUND_ID: 'FT008923',
      CREATED_DATE: '2022-10-13T17:50:37',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 16,
      COMPOUND_ID: 'FT008869',
      CREATED_DATE: '2022-09-30T17:09:29',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 17,
      COMPOUND_ID: 'FT008893',
      CREATED_DATE: '2022-09-23T18:13:12',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 18,
      COMPOUND_ID: 'FT008740',
      CREATED_DATE: '2022-09-30T17:09:29',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
    {
      ID: 19,
      COMPOUND_ID: 'FT008868',
      CREATED_DATE: '2022-09-19T16:37:47',
      ROW_COUNT: 2,
      DIFF_IC50: 0,
      AVG_IC50: -5,
    },
  ],
  stats: {
    MSR: 1.168930268514263,
    STDEV: 0.03389430224356554,
    STDERR: 0.007578996386653617,
    N: 20,
    RL: [0.9400860976592211, 0.9985683869592029],
    LSA: [0.8288656026069092, 1.1325602790004294],
    MR: 0.9688860914175309,
    MIN: -0.10602739477891537,
    MAX: 0.01943312270286054,
  },
}

const plotCompt = (
  <div data-testid='msr-plot-container'>
    <PlotlyComponent
      data={[
        {
          x: [
            0.000001, 0.000009999999999999999, 0.000009999999999999999,
            0.000009999999999999999, 0.000009999999999999999,
            0.00000910276885052953, 0.000010226253665817177,
            0.000009821174853798984, 0.00000885087694251565,
            0.000006196786978541191, 0.000009999999999999999,
            0.000009999999999999999, 0.000009999999999999999,
            0.000009999999999999999, 0.000009999999999999999,
            0.000009999999999999999, 0.000009999999999999999,
            0.000009999999999999999, 0.000009999999999999999,
            0.000009999999999999999,
          ],
          y: [
            1, 1, 1, 1, 1, 0.8286040074617087, 1.0457626403763924,
            0.9645547550889347, 0.7833802265155504, 0.8116612029751968, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1,
          ],
          mode: 'markers',
          name: 'ratios',
          text: [
            'cmpd_id: FT003977<br>date: 2022-11-11T17:53:32',
            'cmpd_id: FT007578<br>date: 2022-11-11T17:53:32',
            'cmpd_id: FT009070<br>date: 2022-11-11T17:53:32',
            'cmpd_id: FT009067<br>date: 2022-11-11T17:53:32',
            'cmpd_id: FT008741<br>date: 2022-11-11T17:53:32',
            'cmpd_id: FT009069<br>date: 2022-11-11T17:53:32',
            'cmpd_id: FT008821<br>date: 2022-11-04T15:34:14',
            'cmpd_id: FT008894<br>date: 2022-11-04T15:34:14',
            'cmpd_id: FT009007<br>date: 2022-11-04T15:34:14',
            'cmpd_id: FT008945<br>date: 2022-11-04T15:34:14',
            'cmpd_id: FT008980<br>date: 2022-10-21T16:30:53',
            'cmpd_id: FT008944<br>date: 2022-11-04T15:34:14',
            'cmpd_id: FT008947<br>date: 2022-10-21T16:30:53',
            'cmpd_id: FT007615<br>date: 2022-11-04T15:34:14',
            'cmpd_id: FT008798<br>date: 2022-10-28T15:33:22',
            'cmpd_id: FT008923<br>date: 2022-10-13T17:50:37',
            'cmpd_id: FT008869<br>date: 2022-09-30T17:09:29',
            'cmpd_id: FT008893<br>date: 2022-09-23T18:13:12',
            'cmpd_id: FT008740<br>date: 2022-09-30T17:09:29',
            'cmpd_id: FT008868<br>date: 2022-09-19T16:37:47',
          ],
          marker: { size: 12 },
          hovertemplate:
            '<b>%{text}</b><br><br>%{yaxis.title.text}: %{y:.2f}<br>%{xaxis.title.text}: %{x}<br>',
        },
        {
          x: [-0.10602739477891537, 0.01943312270286054],
          y: [0.9400860976592211, 0.9400860976592211],
          mode: 'lines',
          name: 'RL',
          line: { color: 'rgb(52, 235, 61)', dash: 'dashdot', width: 2 },
          hovertemplate: '%{y:.2f}',
        },
        {
          x: [-0.10602739477891537, 0.01943312270286054],
          y: [0.9985683869592029, 0.9985683869592029],
          mode: 'lines',
          name: 'RL',
          showlegend: false,
          line: { color: 'rgb(52, 235, 61)', dash: 'dashdot', width: 2 },
          hovertemplate: '%{y:.2f}',
        },
        {
          x: [-0.10602739477891537, 0.01943312270286054],
          y: [0.8288656026069092, 0.8288656026069092],
          mode: 'lines',
          name: 'LsA',
          line: { color: 'rgb(255, 0, 0)', dash: 'dot', width: 2 },
          hovertemplate: '%{y:.2f}',
        },
        {
          x: [-0.10602739477891537, 0.01943312270286054],
          y: [1.1325602790004294, 1.1325602790004294],
          mode: 'lines',
          name: 'LsA',
          showlegend: false,
          line: { color: 'rgb(255, 0, 0)', dash: 'dot', width: 2 },
          hovertemplate: '%{y:.2f}',
        },
        {
          x: [-0.10602739477891537, 0.01943312270286054],
          y: [0.9688860914175309, 0.9688860914175309],
          mode: 'lines',
          name: 'MR',
          line: { color: 'rgb(36, 86, 224)', width: 2 },
          hovertemplate: '%{y:.2f}',
        },
        {
          x: [-0.10602739477891537, 0.01943312270286054],
          y: [1, 1],
          mode: 'lines',
          name: 'Ref',
          line: { color: 'rgb(0,0,0)', width: 1 },
          hovertemplate: '%{y:.2f}',
        },
      ]}
      layout={{
        title: 'MSR plot',
        xaxis: { title: 'Geomean (nM)', zeroline: false, type: 'log' },
        yaxis: { title: 'Ratios', zeroline: false, type: 'log' },
        annotations: [
          {
            xref: 'paper',
            yref: 'paper',
            x: 1,
            xanchor: 'left',
            y: 0.5,
            yanchor: 'top',
            text: '<b>MSR</b>: 1.17',
            showarrow: false,
          },
        ],
      }}
      config={{ displaylogo: false }}
      debug={false}
      useResizeHandler={false}
      style={{ position: 'relative', display: 'inline-block' }}
    />
  </div>
)

export { mockData, plotCompt }
