const getFullTime = async () => {



    // Consult for title 
    const base = 'https://remotive.com/api/remote-jobs'
    const query = `?limit=50`
   
    const response = await fetch(base+query)
    const data = await response.json()       

    let fullJobs = (data.jobs).filter(job => job.job_type === 'full_time' )

    return fullJobs      
      
}

export default getFullTime