import React from "react";
import { DIVISION } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

function NLCList() {
  const { loading, data, error } = useQuery(DIVISION, {
    variables: { division_abbrev: "NLC" },
  });
  const dataList = data?.division || [];
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <h1 className="text-center"> NL Central </h1>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {dataList.map((ballparks) => (
              <div
                className="card m-4 col-lg-4 col-md-6 col-sm-12"
                key={ballparks.franchise_code}
              >
                <div className="card-header">
                  <Link to={"park/" + ballparks.franchise_code}>
                    <h4>Name: {ballparks.name_display_long}</h4>
                  </Link>
                </div>
                <div className="card-body">
                  <h4>Stadium: {ballparks.venue_name}</h4>
                  <h4>Phone: {ballparks.phone_number}</h4>
                  <h4>Address: {ballparks.address_line1}</h4>
                  <h4>City: {ballparks.city}</h4>
                  <h4>State: {ballparks.address_state}</h4>
                  <h4>Web Site: {ballparks.website_url}</h4>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      ) : null}
      {error ? `ERROR ${JSON.stringify(error)}` : null}
    </>
  );
}

export default NLCList;
