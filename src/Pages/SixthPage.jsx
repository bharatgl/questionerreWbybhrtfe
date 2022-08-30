import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";

function SixthPage() {
  const PageData = useContext(dataContext);
  let appData = PageData.sixthPage

  return (
    <div>
      {
        appData ? <div>
          <h2>{appData.message1}</h2>
           <button>{appData.text}</button>
        </div> : "Loading"
      }
   <Link to="/seventhpage"> <BsArrowDownCircleFill style={{ color: 'yellow' }} />  </Link>
    </div>
  )
}

export default SixthPage;