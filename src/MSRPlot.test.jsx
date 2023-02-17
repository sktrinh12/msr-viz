import { render, screen } from '@testing-library/react'
import MSRPlot from './components/MSRPlot'
// import { mockData, plotCompt } from './mockData.js'
import { mockData } from './mockData.js'
import axios from 'axios'
// import PlotlyComponent from 'react-plotly.js'
// import Plotly from 'plotly.js/lib/core'
// import Scatter from 'plotly.js/lib/scatter'
// import createPlotlyComponent from 'react-plotly.js/factory'
// import { shallow, mount } from 'enzyme'
// import Enzyme from 'enzyme'
// import Adapter from '@cfaester/enzyme-adapter-react-18'

// Plotly.register([Scatter])
// const Plot = createPlotlyComponent(Plotly)
// Enzyme.configure({ adapter: new Adapter() })

// let wrapper
let getSpy

describe('MSR plot components', () => {
  beforeEach(() => {
    getSpy = jest.spyOn(axios, 'get').mockImplementation(() => {
      return Promise.resolve(mockData)
    })
    process.env = {
      REACT_APP_BACKEND_URL: 'http://geomean.backend.prod.kinnate',
    }
    const mockHref =
      'compound_id=FT006787&sql_type=get&get_mnum_rows=false&cro=Pharmaron&assay_type=Caliper&target=CDK2&atp_conc_um=10&cofactors=null'
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { search: mockHref },
    })
  })

  afterEach(() => {
    // Reset the axios.get method back to its original implementation
    getSpy.mockReset()
    getSpy.mockRestore()
  })
  it('Check if plotly render', () => {
    jest.mock('plotly.js', () => {
      return {
        default: jest.fn(),
      }
    })
    render(<MSRPlot msrData={mockData} />)
    const plotContainer = screen.getByTestId('msr-plot-container')
    expect(plotContainer).toBeInTheDocument()
    // const wrapper = mount(<MSRPlot msrData={mockData} />)
    // console.log(wrapper.debug({ verbose: true }))
    // console.log(plotCompt.debug({ verbose: true }))
    // expect(wrapper).toEqual(plotCompt)
    // expect(wrapper.find(Plot).exists()).toBe(true)
    // expect(wrapper.find(PlotlyComponent).exists()).toBe(true)
    // expect(wrapper.findWhere((node) => node.name() === 'Plot')).toBe(true)
  })
  it('renders a NotFound component if no data is given', () => {
    const emptyData = { data: [] }
    render(<MSRPlot msrData={emptyData} />)
    const notFound = screen.getByText('404 not found. Please check the url')
    expect(notFound).toBeInTheDocument()
  })
})
