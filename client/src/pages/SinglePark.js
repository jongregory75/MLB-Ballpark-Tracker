import React from "react";
import ParkById from "../components/ParkById";
import BarInfo from "../components/BarInfo";
import InsidePark from "../components/InsidePark";
import { useParams } from "react-router";

const SinglePark = (props) => {
  return (
    <>
      <ParkById franchise_code={props.match.params.id} />
      <BarInfo franchise_code={props.match.params.id} />
      <InsidePark franchise_code={props.match.params.id} />
    </>
  );
};

export default SinglePark;
