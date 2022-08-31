import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import { SideArrow } from "../Icons/icons";

function ThirdPage() {
  const PageData = useContext(dataContext);
  let appData = PageData.thirdPage;

  return (
    <div className=" flex items-center  h-full justify-center flex-col text-lg  gap-3 p-15">
      {appData ? (
        <>
          <h4 className="font-sans  text-white">{appData.message1}</h4>
          <h4 className="font-sans  text-white">{appData.message2}</h4>
        </>
      ) : (
        "Loading"
      )}

      <Link to="/fourthpage">
        {" "}
        <SideArrow />{" "}
      </Link>
    </div>
  );
}

export default ThirdPage;
