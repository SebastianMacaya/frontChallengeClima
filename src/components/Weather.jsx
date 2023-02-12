import SearchField from './SearchField'
import Media from './Media'
import HistorySearch from './HistorySearch'
import { Box } from '@chakra-ui/react'

const Weather = () => {
  return (
    <Box className="mainWeather">
      <Box className="weatherBoxSearch">
        <SearchField />
        <Media />
      </Box>
      <HistorySearch />
    </Box>
  )
}

export default Weather
