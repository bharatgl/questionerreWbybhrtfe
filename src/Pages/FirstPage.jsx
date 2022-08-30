import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { dataContext } from "../App";
import { SideArrow } from "../Icons/icons";

const FirstPage = () => {
  const PageData = useContext(dataContext);
  let appData = PageData.firstPage;

  console.log();
  return (
    <div className="min-h-screen flex flex-col  items-center min-w-full text-textColor   place-items-center gap-5 p-20">
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
