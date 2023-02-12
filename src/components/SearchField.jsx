import { Box, Button, Input } from '@chakra-ui/react'
import { useDataContext } from '../contexts/WeatherDataProvider'
import { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchField = () => {
  const [defaultSearch, setDefaultSearch] = useState('')
  const { handleUpdateData, data } = useDataContext()
  const handleInputChange = (e) => {
    setDefaultSearch(e.target.value)
  }
  const handleSubmmit = () => {
    handleUpdateData(defaultSearch)
  }

  return (
    <Box className="searchMain">
      <h1 className="title">Buscar pronostico</h1>
      <Box className="boxSearchField">
        <Input
          placeholder="Ingrese la Ciudad"
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmmit()
            }
          }}
        />
        <Button type="button" colorScheme="blue" onClick={handleSubmmit}>
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default SearchField
