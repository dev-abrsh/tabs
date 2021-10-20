import {FaAngleDoubleRight} from 'react-icons/fa'

const Company = ({ title, company, id, dates, duties }) => {
  return (
    <div className='mt-8' key={id}>
      <h2 className="text-3xl font-semibold text-indigo-400">{title}</h2>
      <h2 className="text-xl my-3 text-green-600 ">{company}</h2>
      <h3 className="mb-4 text-lg text-gray-800">{dates}</h3>
      <ul className="mr-7 lg:mr-24">
        {duties && duties.map((duty) => {
          return (
            <li className="my-3 ml-4 flex lg:items-center text-gray-600">
              <span className='mx-4 mt-5 lg:mt-0 lg:mx-8 text-indigo-400'>
                <FaAngleDoubleRight />
              </span>
              {duty}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Company
