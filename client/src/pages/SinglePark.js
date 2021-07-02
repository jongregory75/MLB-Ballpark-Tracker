import React from "react";
import BallParkById from "../components/BallParkById";
import PreGame from "../components/PreGame";
import InGame from "../components/InGame";

const SinglePark = () => {
  return (
    <>
      <BallParkById />
      <PreGame />
      <InGame />
    </>
  );
};

export default SinglePark;
