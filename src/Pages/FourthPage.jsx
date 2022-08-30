import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";

function Fourthpage() {
  const PageData = useContext(dataContext);
  let appData = PageData.fourthPage
  return (
    <div className="flex items-center h-screen flex-col gap-2 place-items-center p-20">
      {
        appData ? <>
          <>
            <h3>{appData.message1}</h3>
            <p>{appData.message2}</p>
            <div className="flex items-center text-white flex-col gap-3 place-items-center p-8">
              <button className='rounded-lg text-xs bg-white text-black hover:bg-blue-500 p-1 '>{ appData.buttonText.text1}</button>
              <button className='rounded-lg text-xs bg-white text-black p-1 '>{ appData.buttonText.text2}</button>
              <button className='rounded-lg text-xs bg-white text-black  p-1 '>{ appData.buttonText.text3}</button>
            </div>

          </>
       </> : "Loading"
      }
    
     <Link to="/fifthpage"> <BsArrowDownCircleFill style={{ color: 'yellow' }} />  </Link>
    </div>
  )
}

export default Fourthpage