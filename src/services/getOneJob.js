const getOneJob = async (idJob) => {

    // Consult for title 
    const base = 'https://remotive.com/api/remote-jobs'

    const response = await fetch(base)
    const data = await response.json()

    const oneJob = data.jobs.find((job) => job.id === idJob);

    return oneJob

}

export default getOneJob