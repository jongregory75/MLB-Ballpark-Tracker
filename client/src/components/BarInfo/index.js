import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BARINFO } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const BarInfo = () => {
  const { loading, data, error } = useQuery(BARINFO, {
    variables: { franchise_code: "ARI" },
  });

  const dataList = data?.barinfo || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <div className="col-12 col-md-10 mb-5">
            {dataList.map((barinfo) => (
              <div className="card mb-3">
                <div className="card-body">
                  <h4>
                    Bar #1: {barinfo.venue_url_1} {barinfo.venue_name_1}
                  </h4>
                  <h4>Address: {barinfo.venue_add_1}</h4>
                  <h4>Rating: {barinfo.venue_rating_1}</h4>
                  <h4>Bar #2: {barinfo.venue_name_2}</h4>
                  <h4>Address: {barinfo.venue_add_2}</h4>
                  <h4>Rating: {barinfo.venue_rating_2}</h4>
                  <h4>Bar #3: {barinfo.venue_name_3}</h4>
                  <h4>Address: {barinfo.venue_add_3}</h4>
                  <h4>Rating: {barinfo.venue_rating_3}</h4>
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

export default BarInfo;
