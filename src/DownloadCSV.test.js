import { render, screen } from '@testing-library/react'
import DownloadCSVFile from './components/DownloadCSV'
import { mockData } from './mockData.js'

const titles = [
  'CRO',
  'Assay type',
  'Cell line',
  'Cell incubation hr',
  '% Serum',
]

const metadata = {
  cell: ['Pharmaron', 'CellTiter-Glo', 'Ba/F3', 72, 10, 'null'],
}

describe('DownloadCSVFile', () => {
  test('check if Download button & metadata renders', () => {
    render(<DownloadCSVFile msrData={mockData} metadata={metadata} />)
    const downloadCSVFile = screen.getByRole('button')
    expect(downloadCSVFile).toBeInTheDocument()
    titles.forEach((d, i) => {
      let regexStr = new RegExp(d)
      let pTag = screen.getByText(regexStr)
      expect(pTag).toBeInTheDocument()
      expect(pTag).toHaveTextContent(d)
      regexStr = new RegExp(metadata.cell[i])
      pTag = screen.getByText(regexStr)
      expect(pTag).toBeInTheDocument()
      expect(pTag).toHaveTextContent(metadata.cell[i])
    })
  })
})
