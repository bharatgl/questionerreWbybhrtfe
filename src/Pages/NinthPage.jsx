import React , {useContext} from 'react'
import { dataContext } from "../App"
import { BsArrowDownCircleFill } from "react-icons/bs";

function NinthPage() {

const PageData = useContext(dataContext);
  let appData = PageData.ninthPage

  return (
    <div>
      {
        appData ? <div>
          <h4>{appData.topmassage}</h4>
          <div>
            <h4>{appData.cardData.text1}</h4>
            <h3>{appData.cardData.text2}</h3>
            <p>{appData.cardData.text3}</p>
            <button>{appData.cardData.text4}</button>
          </div>
          <div>
            <h4>{appData.dataPoint.point1}</h4>
            <h4>{appData.dataPoint.point2}</h4>
            <h4>{appData.dataPoint.point3}</h4>
            <h4>{appData.dataPoint.point4}</h4>
          </div>
        </div> : "Loading"
      }
    </div>
  )
}

export default NinthPage