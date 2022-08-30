import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
 import { BsArrowDownCircleFill } from "react-icons/bs";

function SeventhPage() {
 
const PageData = useContext(dataContext);
  let appData = PageData.seventhPage
  return (
    <div>
      {
        appData ? <div>
          <h2>{appData.message1}</h2>
          
        </div> : "Loading"
      }
   <Link to="/eighthpage"> <BsArrowDownCircleFill style={{ color: 'yellow' }} />  </Link>
    </div>
  )
}

export default SeventhPage