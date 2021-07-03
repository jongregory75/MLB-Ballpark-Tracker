import React from "react";
import { PARKBYID } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const ParkById = () => {
  const { loading, data, error } = useQuery(PARKBYID, {
    variables: { franchise_code: "ARI" },
  });

  const dataList = data?.parkbyid || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <div className="col-12 col-md-10 mb-5">
            {dataList.map((parkbyid) => (
              <div className="card mb-3">
                <div className="card-header">
                  <h4>Name:{parkbyid.name_display_long}</h4>
                </div>
                <div className="card-body">
                  <h4>Stadium: {parkbyid.venue_name}</h4>
                  <h4>Address: {parkbyid.address_line1}</h4>
                  <h4>Phone Number: {parkbyid.phone_number}</h4>
                  <h4>City: {parkbyid.city}</h4>
                  <h4>State: {parkbyid.address_state}</h4>
                  <h4>Zip: {parkbyid.address_zip}</h4>
                  <h4>
                    Website:
                    {parkbyid.website_url}
                  </h4>
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

export default ParkById;
