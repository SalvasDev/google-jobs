import { useState, useEffect } from 'react'
import getJobsPrim from '../../services/getJobsPrim'



export function useJobsPrim() {

    const [ jobs, setJobs ] = useState([])

    useEffect( () => { 
      getJobsPrim().then(jobs => setJobs(jobs))

    }, [])


  return jobs
    
}
