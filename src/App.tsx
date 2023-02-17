import { useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { PurpleColour } from './components/Colour'
import MSRPlot from './components/MSRPlot'
import NumberInput from './components/NumberInput'
import DownloadCSVFile from './components/DownloadCSV'

interface MSRData {
  ID: number
  COMPOUND_ID: string
  CREATED_DATE: string
  ROW_COUNT: number
  DIFF_IC50: number
  AVG_IC50: number
}

interface PlotDataArray {
  data: MSRData[]
}

export default function DisplayTable() {
  const { REACT_APP_BACKEND_URL } = process.env
  const rootURL = `${REACT_APP_BACKEND_URL}/v1/fetch-data?compound_id=`
  const [msrData, setMsrData] = useState({ data: [] })
  const [nLimit, setNLimit] = useState(20)
  const [msrPlotLoading, setMsrPlotLoading] = useState(false)
  const [loading, setLoading] = useState(true)
  const axiosConfig = {
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlParams = new URLSearchParams(window.location.search)
  const urlParamsObj = Object.fromEntries(urlParams)
  // console.log(urlParamsObj)
  // console.log(urlParams.toString())
  let newURL = `${rootURL.replace('compound_id=', '')}${urlParams.toString()}`

  if (urlParamsObj.type === 'msr_data') {
    newURL = `${newURL}&n_limit=${nLimit !== 0 ? nLimit : 20}`
  }

  let variant =
    urlParamsObj['variant'] === '-' ? 'null' : urlParamsObj['variant']
  let param1 = 'cell_line' in urlParamsObj ? 'cell' : 'bio'

  // console.log(newURL)

  // plotting data
  const fetchPlotData = async () => {
    const url = `${newURL.replace('3000', '8000')}`
    console.log(url)
    await axios
      .get(url, axiosConfig)
      .then(async (res: axios.AxiosResponse<PlotDataArray>) => {
        const json = res.data
        if (res.status === 200) {
          setMsrData(json)
          // console.log(msrData)
        }
        setLoading(false)
      })
      .catch((err: axios.AxiosError<PlotDataArray>) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(() => {
    fetchPlotData()
    setMsrPlotLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNLimitButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fetchPlotData()
  }

  const handleChangeNLimit = (event: React.ChangeEvent<HTMLButtonElement>) => {
    setNLimit(parseInt(event.target.value))
  }

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div style={{ margin: 'auto', padding: '10px' }}>
            <ReactLoading
              type='spin'
              color={PurpleColour}
              height={667}
              width={375}
            />
          </div>
        </Box>
      ) : msrPlotLoading ? (
        <Paper>
          <MSRPlot msrData={msrData} />
          <Grid container wrap='nowrap' spacing={1} justifyContent='center'>
            <Grid item xs={12}>
              <NumberInput
                nLimit={nLimit}
                handleChangeNLimit={handleChangeNLimit}
                handleNLimitButtonClick={handleNLimitButtonClick}
              />
              <Grid item xs={12}>
                <DownloadCSVFile
                  msrData={msrData}
                  metadata={
                    param1 === 'cell'
                      ? {
                          cell: [
                            urlParamsObj.cro,
                            urlParamsObj.assay_type,
                            urlParamsObj.cell_line,
                            urlParamsObj.cell_incubation_hr,
                            urlParamsObj.pct_serum,
                            variant,
                          ],
                        }
                      : {
                          bio: [
                            urlParamsObj.cro,
                            urlParamsObj.assay_type,
                            urlParamsObj.target,
                            urlParamsObj.atp_conc_um,
                            urlParamsObj.cofactors,
                            variant,
                          ],
                        }
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : null}
    </>
  )
}
