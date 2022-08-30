import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import { SideArrow, Tick } from "../Icons/icons";

function Fourthpage() {
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
  let appData = PageData.fourthPage;
  return (
    <div className=" flex items-center self-start h-screen flex-col gap-1 top-0 p-1">
      {appData ? (
        <>
          <>
            <h3 className="text-lg font-bold">{appData.message1}</h3>
            <p>{appData.message2}</p>
            <div className="flex items-center  text-white flex-col gap-4 place-items-center p-6">
              <button
                className="rounded-lg  font-meidum flex justify-center self-center text-black bg-blue-500 px-10 py-5 box-content w-60"
                onClick={button1Handler}
              >
                <span className="text-sm px-2 py-0 text-black">
                  {" "}
                  {appData.buttonText.text1}{" "}
                </span>
                {button1 ? <Tick /> : ""}
              </button>
              <button
                className="rounded-lg  flex justify-center self-center text-black bg-blue-500 px-10 py-5 box-content w-60"
                onClick={button2Handler}
              >
                <span className="text-sm px-2  text-black">
                  {appData.buttonText.text2}
                </span>
                {button2 ? <Tick /> : ""}
              </button>
              <button
                className="rounded-lg  flex justify-center self-center text-black bg-blue-500 px-10 py-5 box-content w-60"
                onClick={button3Handler}
              >
                <span className="text-sm px-2  text-black">
                  {appData.buttonText.text3}
                </span>
                {button3 ? <Tick /> : ""}
              </button>
            </div>
          </>
        </>
      ) : (
        "Loading"
      )}

      <Link to="/fifthpage">
        {" "}
        <SideArrow />{" "}
      </Link>
    </div>
  );
}

export default Fourthpage;
