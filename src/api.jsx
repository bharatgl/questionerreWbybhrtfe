import axios from "axios";

const appData = async () => {
  const url = "https://questionnerebE-wysa.bharatgoyal1.repl.co/user/getdata";

  const response = await axios.get(url).catch((error) => {
    return error;
  });
  return response;
};
export default appData;
