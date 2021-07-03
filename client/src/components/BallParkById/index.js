import React from "react";
import { useQuery } from "@apollo/client";
import { BALLPARKBYID } from "../../utils/queries";

const BallParkById = () => {
  const { loading, data, error } = useQuery(BALLPARKBYID, {
    variables: { franchise_code: "ARI" },
  });
  console.log("INSIDE BALLPARKBYID DATA NEXT");
  console.log(data);
  const dataList = data?.ballparkbyid || [];
  console.table(`INSIDE BALLPARKBYID ${data}`);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <div>TESTING BALL PARK BY ID</div>
          <div className="col-12 col-md-10 mb-5">
            {dataList.map((ballparkbyid) => (
              <div className="card mb-3">
                <div className="card-header">
                  <h4>Name:{ballparkbyid.name_display_long}</h4>
                </div>
                <div className="card-body">
                  <h4>Stadium: {ballparkbyid.venue_name}</h4>
                  <h4>Phone: {ballparkbyid.phone_number}</h4>
                  <h4>Address: {ballparkbyid.address_line1}</h4>
                  <h4>City: {ballparkbyid.address_city}</h4>
                  <h4>State: {ballparkbyid.address_state}</h4>
                  <h4>Web Site: {ballparkbyid.website_url}</h4>
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
};

export default BallParkById;
