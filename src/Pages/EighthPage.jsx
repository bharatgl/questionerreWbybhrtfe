import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from "../App"
// import { BsArrowSideCircleFill } from "react-icons/bs";
import { SideArrow } from '../Icons/icons';

 const EighthPage = () => {
const PageData = useContext(dataContext);
  let appData = PageData.eightthPage
   
  return (
    <div>
       {
        appData ? <div>
          <h3>{appData.message1}</h3>
          <h2>{appData.message2}</h2>
          
        </div> : "Loading"
      }
    <Link to="/ninthpage"> <SideArrow/>  </Link>
    </div>
  )
}
export default EighthPage