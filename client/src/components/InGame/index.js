import React from "react";
import { INSIDEPARKINFO } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const InGame = () => {
  const { loading, data, error } = useQuery(INSIDEPARKINFO, {
    variables: { franchise_code: "ARI" },
  });
  const dataList = data?.barinfo || [];
  console.table(`INSIDE BARINFO ${dataList}`);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <div>AL West: </div>
          <div className="col-12 col-md-10 mb-5">
            {dataList.map((insideparkinfo) => (
              <div className="card mb-3">
                <div className="card-header">
                  <h4>Name:{dataList.franchise_code}</h4>
                </div>
                <div className="card-body">
                  <h4>Food Option 1: {dataList.menu_1}</h4>
                  <h4>Food Option 2: {dataList.menu_2}</h4>
                  <h4>Food Option 3: {dataList.menu_3}</h4>
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

export default InGame;
