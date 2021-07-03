import React from "react";
import { INSIDEPARK } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const InsidePark = () => {
  const { loading, data, error } = useQuery(INSIDEPARK, {
    variables: { franchise_code: "ARI" },
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
              <div className="card mb-3">
                <div className="card-body">
                  <h4>Food #1: {insidepark.menu_1}</h4>
                  <h4>Food #2: {insidepark.menu_2}</h4>
                  <h4>Food #3: {insidepark.menu_3}</h4>
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
