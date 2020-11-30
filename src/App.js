import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { Player } from "video-react";
import { githubApi } from "./Api";
import useAxioshook from "./useAxioshook";

function App() {
  const { response, isLoading, error1 } = useAxioshook({
    api: githubApi,
    metod: "get",
    url: "/videos",
    config: JSON.stringify({ requireAuthentication: true }),
  });
  const [data, setData] = useState([]);
  const [val, setVal] = useState("tree");
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
//------------------------------first useAxios sample---------------------------------------
  // const [{ dataa, loading, error }, refetch] = useAxios(
  //   "https://reqres.in/api/users?delay=1"
  // );

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  return (
    <div className="App">
      {/* <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(dataa, null, 2)}</pre> */}
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <div
        style={{
          width: "800px",
          height: "800px",
          margin: "100px auto",
        }}
      >
        <Player>
          <source src={`${data}/${val}`} />
        </Player>
      </div>
    </div>
  );
}

export default App;
