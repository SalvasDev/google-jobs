 
const getJobsPrim = async (consult, search = 'Frontend Developer', setConsult) => {

    
  // if (consult) {

    // Consult for company_name
    const base = 'https://remotive.com/api/remote-jobs'
    const query = `?company_name=${search}`
   
    const response = await fetch(base+query)
    const data = await response.json()       
     
    // Consult for title
    const base2 = 'https://remotive.com/api/remote-jobs'
    const query2 = `?search=${search}`
    
    const response2 = await fetch(base2+query2)
    const data2 = await response2.json()   



      if ((data.jobs).length !== 0 ) {
          setConsult(false)
          return data.jobs      

      } else if ((data2.jobs).length !== 0){ 
          setConsult(false)
          return data2.jobs
      } else if ((data2.jobs).length === 0 && (data.jobs).length === 0 ) {
          setConsult(false)
          return data2.jobs
      }          
       
  // }   
}

export default getJobsPrim


















