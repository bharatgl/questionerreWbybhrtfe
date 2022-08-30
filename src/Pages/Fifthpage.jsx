import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import { SideArrow, Tick } from "../Icons/icons";




function FifthPage() {
  const [button1, setbutton1] = useState(false);
  const [button2, setbutton2] = useState(false);
  const [button3, setbutton3] = useState(false);

  const button1Handler = () => {
    setbutton1(!button1);
  };
  const button2Handler = () => {
    setbutton2(!button2);
  };
  const button3Handler = () => {
    setbutton3(!button3);
  };

  const PageData = useContext(dataContext);
  let appData = PageData.fifthPage;
  return (
    <div className="flex items-center h-screen flex-col gap-10 place-items-center p-15">
      {appData ? (
        <>
          <div>
            <h2>{appData.message1}</h2>
          </div>
          <div className="flex flex-col gap-5">
            <button
              className="rounded-lg flex px-3 py-1 click:bg-blue-500 bg-blue-500 text-left "
              onClick={button1Handler}
            >
              <span className="text-xs  text-black">
                {appData.buttonText.text1}
              </span>
              {button1 ? <Tick /> : ""}
            </button>
            <button
              className="rounded-lg  flex px-3 py-1  text-black p-1 click:bg-blue-500 bg-blue-500 text-left"
              onClick={button2Handler}
            >
              <span className="text-xs  text-black">
                {appData.buttonText.text2}
              </span>
              {button2 ? <Tick /> : ""}
            </button>
            <button
              className="rounded-lg flex  px-3 py-1  text-black p-1 click:bg-blue-500 bg-blue-500 text-left"
              onClick={button3Handler}
            >
              <span className="text-xs  text-black">
                {appData.buttonText.text3}
              </span>
              {button3 ? <Tick /> : ""}
            </button>
          </div>
        </>
      ) : (
        "Loading"
      )}

      <Link to="/sixthpage">
        {" "}
        <SideArrow />{" "}
      </Link>
    </div>
  );
}

export default FifthPage;
