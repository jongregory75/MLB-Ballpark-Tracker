import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
const 
import { QUERY_NLW } from "../utils/queries";

const nlwList = () => {

  const {division_abbrev} = useParams();

  const { loading, data: ballparks } = useQuery(QUERY_NLW);
  console.table(data);
  
  if (loading) return 'Loading...';
  if (error) return 'Error ${error.message}';

  return (
    <>
      { loading ? (
        <div>Loading...</div>
        ) : (
        <div>
          <div>NL West: </div>
          <div className="col-12 col-md-10 mb-5">
            {data.map((ballParks) => (
            <div key={_id} className="card mb-3">
              <div className="card-header">
                <h4>Name:{ballParks.name_display_long}</h4>
              </div>
              <div className="card-body">
              <h4>Stadium: {ballParks.venue_name}</h4>
                <h4>Phone: {ballParks.phone_number}</h4>
                <h4>Address: {ballParks.address_line1}</h4>
                <h4>City: {ballParks.address_city}</h4>
                <h4>State: {ballParks.address_state}</h4>
                <h4>State: {ballParks.address_state}</h4>
                <h4>Web Site: {ballParks.website_url}</h4>
              </div>
            </div>
            ))};
          </div>
        </div>  
        )
      }
    </>
  )
};

export default nlwList;
