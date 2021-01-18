import React from "react";

function Home(props) {
  const clickMe = () => {
    props.history.push("./resume");
    console.log(props);
  };

  return (
    <>
      <div>Homepage</div>
      <button onClick={clickMe}>Click Me!</button>
    </>
  );
}

export default Home;
