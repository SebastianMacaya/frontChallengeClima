import { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios'
import React from 'react'
const url = 'http://api.weatherapi.com/v1/forecast.json'

const api_key = '=c6d43c2703de4198bb0192700231102'

export const DataContext = React.createContext()

export const WeatherDataProvider = (props) => {
  const [data, setData] = useState(null)
  const [historyData, setHistoryData] = useState([])

  const states = { data, setData, historyData, setHistoryData }

  return <DataContext.Provider value={states} {...props} />
}

export const useDataContext = () => {
  const { data, setData, historyData, setHistoryData } = useContext(DataContext)
  const handleUpdateData = (citySearched) => {
    axios
      .get(url + '?key' + api_key + '&q=' + citySearched + '&lang=es')

      .then((res) => {
        setData([res.data])
        setHistoryData((prevData) => [...prevData, res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { data, handleUpdateData, historyData }
}
