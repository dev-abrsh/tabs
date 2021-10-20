const Work = ({company, setValue, index, value}) => {

    return (
      <button onClick={()=> setValue(index)} className={` ${index === value && 'text-green-600'} text-center lg:w-full mr-5 block mt-5 font-semibold text-xl ml-3 delay-400 hover:text-green-600`}>
        {company}
        </button>
    )
}

export default Work
