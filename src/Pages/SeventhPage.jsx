import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import { SideArrow } from "../Icons/icons";


function SeventhPage() {
  const PageData = useContext(dataContext);
  let appData = PageData.seventhPage;
  return (
    <div className="flex items-center h-screen flex-col gap-8 place-items-center p-20">
      {appData ? (
        <>
          <h2>{appData.message1}</h2>
        </>
      ) : (
        "Loading"
      )}
      <Link to="/eighthpage">
        {" "}
        <SideArrow />{" "}
      </Link>
    </div>
  );
}

export default SeventhPage;
