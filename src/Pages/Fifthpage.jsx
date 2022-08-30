import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";

function FifthPage() {
 const PageData = useContext(dataContext);
  let appData = PageData.fifthPage
  return (
    <div>
      {
        appData ? <>
          <div>
            <h2>{ appData.message1}</h2>
          </div>
          <div>
            <button>{ appData.buttonText.text1}</button>
            <button>{ appData.buttonText.text2}</button>
            <button>{ appData.buttonText.text3}</button>
          </div>
         </> : "Loading"
      }

    <Link to="/sixthpage"> <BsArrowDownCircleFill style={{ color: 'yellow' }} />  </Link>
    </div>
  )
}

export default FifthPage