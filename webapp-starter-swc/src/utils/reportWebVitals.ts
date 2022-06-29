import { ReportHandler } from 'web-vitals'

interface ReportWebVitalsProps {
  enable?: boolean
  onPerfEntry?: ReportHandler
}

const reportWebVitals = ({
  enable = false,
  onPerfEntry,
}: ReportWebVitalsProps): void => {
  if (enable && onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
