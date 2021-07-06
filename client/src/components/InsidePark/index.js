import React from "react";
import { INSIDEPARK } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const InsidePark = (franchise_code) => {
  const { loading, data, error } = useQuery(INSIDEPARK, {
    variables: { franchise_code: franchise_code.franchise_code },
  });

  const dataList = data?.insidepark || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <div className="col-12 col-md-10 mb-5">
            {dataList.map((insidepark) => (
              <div className="card mb-3" key="insideMenu">
                <div className="card-body">
                  <h4>Food #1: {insidepark.menu_1}</h4>
                  <img width="300" src={insidepark.menu_1_image} />
                  <h6>Where: {insidepark.menu_1_loc_name}</h6>
                  <h6>{insidepark.menu_1_loc_section}</h6>
                  <td>---</td>
                  <h4>Food #2: {insidepark.menu_2}</h4>
                  <img width="300" src={insidepark.menu_2_image} />
                  <h6>Where: {insidepark.menu_2_loc_name}</h6>
                  <h6>{insidepark.menu_2_loc_section}</h6>
                  <td>---</td>
                  <h4>Food #3: {insidepark.menu_3}</h4>
                  <img width="300" src={insidepark.menu_3_image} />
                  <h6>Where: {insidepark.menu_3_loc_name} </h6>
                  <h6>{insidepark.menu_3_loc_section} </h6>
                  <td>---</td>
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

export default InsidePark;
