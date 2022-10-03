const getSpecCountry = async (searchcountry, setBtnChecked) => {

    // Consult for country 
    const base = 'https://remotive.com/api/remote-jobs'
    const query = `?limit=100`
   
    const response = await fetch(base+query)
    const data = await response.json()       
    
    let countryJobs = (data.jobs).filter(job => (job.candidate_required_location).toUpperCase() === searchcountry.toUpperCase() )

    setBtnChecked(false)
    
    return countryJobs      
      
}

export default getSpecCountry