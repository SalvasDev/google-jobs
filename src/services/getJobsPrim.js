import React from 'react'


const getJobsPrim = async () => {
  
    const base = 'https://remotive.com/api/remote-jobs'
    // const query = 
  
    
    // const response = await fetch(base+query)
    // const data = await response.json()

    // return data
  
}

export default getJobsPrim


//  getCurrentCoords(coordenades).then(dataCurrent => {setDataConsult(dataCurrent)})


//           const getCurrentW =  async ( {dataConsult = dafaultLoc} = {}) => {

//             const key = process.env.REACT_APP_KEY
//             const base = process.env.REACT_APP_BASECURR
//             const query = `${dataConsult}?apikey=${key}&details=true`

//             const response = await fetch(base + query)
//             const dataCurrent = await response.json()
//             return dataCurrent[0]       
//           } 

//       getCurrentW(dataConsult).then(dataCurrent => {setWeather(dataCurrent)})