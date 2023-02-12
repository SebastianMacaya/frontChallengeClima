import Layout from '../src/components/Layout/Layout.jsx'
import Weather from '../src/components/Weather.jsx'
import { WeatherDataProvider } from '../src/contexts/weatherDataProvider.jsx'

const Home = () => {
  return (
    <WeatherDataProvider>
      <Weather></Weather>
    </WeatherDataProvider>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout pageTitle="Inicio">{page}</Layout>
}

export default Home
