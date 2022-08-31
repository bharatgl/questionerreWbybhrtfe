import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { dataContext } from "../App";
import { SideArrow } from "../Icons/icons";

const FirstPage = () => {
  const PageData = useContext(dataContext);
  let appData = PageData.firstPage;

  console.log();
  return (
    <div className="flex items-center min-h-screen  h-full justify-center flex-col text-lg gap-3 p-15">
      {appData ? (
        <>
          <h1 className=" text-xl font-sans text-white">
            {appData.Greeting_message}{" "}
            <span className="font-extrabold font-sans text-[#80B3CB] ">
              {appData.name}
            </span>
          </h1>

          <h5 className="font-sans text-xs text-white">{appData.message}</h5>

          <Link to="/secondpage" className="duration-1000 ease-in-out">
            <SideArrow />
          </Link>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default FirstPage;
