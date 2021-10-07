import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Init from "../components/login/Init";
import CreateFolder from "../components/folders/CreateFolder";


export default function Index(props) {
  const [userData, setUserData] = useState("");

  useEffect(() => {

    setUserData(localStorage.getItem("user_id"));
  }, [userData]);
  console.log(userData);
  return (
    <Container title="Index">
      {
        userData ?
          (
            <CreateFolder />
          )
          :
          (
            <Init />
          )}

    </Container>


  );
}

