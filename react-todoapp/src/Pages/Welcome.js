import { useState, useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";

import { retrieveHelloWBeanVarible } from "../Api/HelloWApi";
import authContext from "../context/auth-context";

const WelcomePage = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const ctx = useContext(authContext);

  const [message, setMessage] = useState(null);

  const callHelloApi = () => {
    console.log("run");

    //api called using axios
    // retrieveHelloWBean()
    //   .then((response) => {
    //     //console.log(response.data.message);
    //     setMessage(response.data.message);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     console.log("done");
    //   });

    retrieveHelloWBeanVarible(ctx.username, ctx.token).then((response) => {
      setMessage(response.data.message);
    });
  };
  return (
    <>
      <h1>Welcome {username ? username : "user"}</h1>
      Go to your<Link to="../todos"> todo</Link>
      <div>
        <button className="btn btn-success" onClick={callHelloApi}>
          Call hello world
        </button>
      </div>
      {message && <div className="text-info">{message}</div>}
    </>
  );
};

export default WelcomePage;
