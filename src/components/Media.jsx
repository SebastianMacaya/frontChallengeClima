import { DataContext, useDataContext } from '../contexts/weatherDataProvider'
import { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, Box, Img } from '@chakra-ui/react'
import CardWeather from './CardWeather'
const Media = () => {
  const { data } = useDataContext()
  {
    if (data == null) {
      return <></>
    } else {
      return (
        <Box className="mediaMain">
          <CardWeather data={data}></CardWeather>
        </Box>
      )
    }
  }
}

export default Media
