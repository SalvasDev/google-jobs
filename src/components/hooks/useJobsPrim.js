import { useState, useEffect } from 'react'
import getJobsPrim from '../../services/getJobsPrim'

export function useJobsPrim(consult, search, setConsult) {

    const [ jobscompany, setJobsCompany ] = useState([])

    useEffect( () => { 
      
      getJobsPrim(consult, search, setConsult).then(jobsconsult => setJobsCompany(jobsconsult))

    }, [consult])


  return jobscompany
    
}

