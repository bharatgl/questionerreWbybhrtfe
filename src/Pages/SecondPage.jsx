import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";

import { SideArrow } from "../Icons/icons";

function SecondPage() {
  const [input, setInput] = useState();
  const PageData = useContext(dataContext);
  let appData = PageData.SecondPage;

  return (
    <div className="flex items-center min-h-screen text-textColor h-full justify-center flex-col text-lg gap-3 p-15 ">
      {appData ? (
        <>
          <h1 className="text-xl font-sans text-white ">
            {PageData.firstPage.Greeting_message}{" "}
            <span className="font-extrabold  font-sans text-[#80B3CB] ">
              {PageData.firstPage.name}
            </span>
          </h1>
          <div>
            <p className="  font-sans text-white text-center outline-none border-none ">
              {appData.message.split(", ")[0]}
            </p>
            <p className=" font-sans text-white ">
              {appData.message.split(",")[1]}
            </p>
          </div>
          <div className="flex flex-row justify-center bg-white rounded-full outline-none border-none px-1  box-content h-14 w-80">
            <input
              type="text"
              placeholder="Choose a nickname"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="rounded-full p-3 basic-1/6 outline-none border-none box-content w-80"
            />
            {input ? (
              <Link to="/thirdpage">
                <SideArrow className=" outline-none border-none" />
              </Link>
            ) : (
              ""
            )}
          </div>
          <p className="  text-xs font-sans text-white ">
            {appData.terms_message}{" "}
          </p>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default SecondPage;
