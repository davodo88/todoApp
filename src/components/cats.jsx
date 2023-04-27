import { useState } from "react"

const Cats = () => {
  const [gato, setGato] = useState({ name: 'astra', years: 5 })
  
  const handleClick = () => {
    console.log('click');
    // setGato({ ...gato, years: gato.years + 1 })
    setGato((prev)=>({...prev, years: gato.years + 1}))
  }



  return (
    <>
      <h2>
        {gato.name} - {gato.years}
      </h2>
      <button onClick={handleClick} 
        className="btn btn-dark m-2">
          Up Year
      </button>
    </>
  )
}

export default Cats