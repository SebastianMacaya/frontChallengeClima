import { Box } from '@chakra-ui/react'
import CardWeather from './CardWeather'
import { DataContext, useDataContext } from '../contexts/weatherDataProvider'

const HistorySearch = () => {
  const { historyData } = useDataContext()
  return (
    <Box className="mainHistory">
      <h1 className="title">Historial de busquedas</h1>
      <Box className="cardHistory">
        {<CardWeather data={historyData.slice(0, -1)}></CardWeather>}
      </Box>
    </Box>
  )
}

export default HistorySearch
