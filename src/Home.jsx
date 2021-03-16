import React from "react"
import Images from "./image/web-developer-chandan.JPG"
import Common from "./Common"

function Home() {
   return(
       <Common name="Chandan Sen"
       imgSrc={Images}
       btnname="See Portfolio"
       />
  );
}

export default Home;
