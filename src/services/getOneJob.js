const getOneJob = async (idJob) => {



    // Consult for title 
    const base = 'https://remotive.com/api/remote-jobs'
       
    const response = await fetch(base)
    const data = await response.json()       
   
    let oneJob = (data.jobs).filter(job => job.id === idJob )

    return oneJob[0]      
      
}

export default getOneJob