import React, { useState } from "react";

import { SAVE_VISITED } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_BALLPARKS } from "../utils/queries";
const AddPark = () => {
  const [formState, setFormState] = useState({ phone_number: "", city: "" });
  const [saveVisited] = useMutation(SAVE_VISITED);

  const { loading, data } = useQuery(QUERY_BALLPARKS);
  const ballParkData = data?.ballparks || [];
  console.log(ballParkData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await saveVisited({
      variables: {
        phone_number: formState.phone_number,
        city: formState.city,
      },
    });
  };

  return (
    <main className="addVisitArea">
      <div className="col-sm-3 col-md-6 col-lg-9 m-auto">
        <div className="card mx-auto mt-10 bg-light">
          <div className="card-body text-center">
            <h2 className="card-title text-center mb-5">
              Add a Park to Your List
            </h2>
            <div className="row mt-10">
              <h5 className="mt-10">Choose a Park to Add</h5>
              <select name="venue" onChange={handleChange} id="venue">
                {ballParkData.length > 0
                  ? ballParkData.map((ballPark) => {
                      return (
                        <option value={ballPark._id} selected="selected">
                          {ballPark.name_display_full}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg mt-5"
              id="submitButton"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddPark;
