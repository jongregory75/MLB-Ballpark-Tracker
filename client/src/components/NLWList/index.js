import React from "react";
import { useQuery } from "@apollo/client";
import { DIVISION } from "../../utils/queries";
import { Link } from "react-router-dom";

const NLWList = () => {
  const { loading, data } = useQuery(DIVISION, {
    variables: { division_abbrev: "NLW" },
  });
  const dataList = data?.division || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-center"> NL West </h1>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {dataList.map((ballparks) => (
              <div className="card m-4 col-lg-4 col-md-6 col-sm-12">
                <div className="card-header">
                  <Link to={"park/" + ballparks.franchise_code}>
                    <h4>Name: {ballparks.name_display_long}</h4>
                  </Link>
                </div>
                <div className="card-body">
                  <h4>Stadium: {ballparks.venue_name}</h4>
                  <h4>Phone: {ballparks.phone_number}</h4>
                  <h4>Address: {ballparks.address_line1}</h4>
                  <h4>City: {ballparks.address_city}</h4>
                  <h4>State: {ballparks.address_state}</h4>
                  <h4>Web Site: {ballparks.website_url}</h4>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      )}
    </>
  );
};

export default NLWList;
