import { Card, CardHeader, CardBody, Box, Img } from '@chakra-ui/react'

const CardWeather = ({ data }) => {
  if (!Array.isArray(data)) {
    return null
  }
  return data.map((item, index) => {
    return (
      <Card key={index} className="mainCard">
        <CardHeader>
          <Box className="mediaBoxCity">
            <p>{`Ciudad de ${item?.location?.name}`}</p>
            <Img src={item?.current?.condition.icon} alt="icono del clima" />
          </Box>
        </CardHeader>
        <CardBody>
          <Box>
            <Box className="mediaBoxInfo">
              <p>{`Temperatura Actual ${item?.current?.temp_c}°`}</p>
              <p>{`Temperatura Maxima  ${item?.forecast?.forecastday[0].day.maxtemp_c}°`}</p>
              <p>{`Temperatura Minima  ${item?.forecast?.forecastday[0].day.mintemp_c}°`}</p>
              <p>{`Probabilidad de lluvia  ${item?.forecast?.forecastday[0].day.daily_chance_of_rain}%`}</p>
              <p>{`Cielo ${item?.current?.condition.text}`}</p>
              <p>{`Humedad Actual ${item?.current?.humidity}%`}</p>
              <p>{`Fecha  ${item?.current?.last_updated}`}</p>
            </Box>
          </Box>
        </CardBody>
      </Card>
    )
  })
}

export default CardWeather
