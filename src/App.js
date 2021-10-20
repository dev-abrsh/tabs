import { useState, useEffect } from 'react'
import Company from './Company'
import Work from './Work'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoadng] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  const fetchData = async () => {
    try {
      setLoadng(true)
      const res = await fetch(url)
      const items = await res.json()
      setJobs(items)
      setLoadng(false)
    } catch (error) {
      console.log(error)
      setLoadng(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return <div className='text-center font-bold text-3xl m-12'>Loading...</div>
  }

  return (
    <section className="mx-6 my-10">
      <h2 className="font-bold text-3xl mb-9 text-center ">Expierance</h2>
      <article className=" grid lg:grid-cols-3">
        <div className='flex lg:block'>
          {jobs.map((job, index)=><Work index={index} setValue={setValue} key={index} company={job.company} value={value}/>)}
        </div>
        <div className="col-span-2">
          <Company {...jobs[value]} />
        </div>
      </article>
    </section>
  )
}

export default App
