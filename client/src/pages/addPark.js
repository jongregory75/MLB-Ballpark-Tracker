//**Dependencies**//

import React, { useState } from "react";
import { SAVE_VISITED } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_BALLPARKS } from "../utils/queries";

//**SAVE VISITED PARKS PAGE WITH QUERY AND MUTATION**//

const AddPark = (props) => {
  const [formState, setFormState] = useState({ parkId: "" });
  const [saveVisited] = useMutation(SAVE_VISITED);
  //**had loading, data */
  const { data } = useQuery(QUERY_BALLPARKS);
  const ballParkData = data?.ballparks || [];
  // console.log(ballParkData);
  const handleChange = (event) => {
    setFormState(event.target.value);

    // console.log("--You are in the handle Change", event.target.value);
    const { name, value } = event.target;
    console.log("--You are in the handle Change", name, value);
    setFormState({
      ...formState,

      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // try {
    console.log(formState, "----Before it");
    const mutationResponse = await saveVisited({
      variables: {
        parkId: formState.parkId,
      },
    });
    console.log(formState, "After");
    console.log(
      mutationResponse,
      "---------mutation do you seeee thisss guyyy"
    );
    // } catch (event) {
    //   console.log(event);
    // }
  };

  return (
    <main className="addVisitArea">
      <form onSubmit={handleFormSubmit}>
        <div className="col-sm-3 col-md-6 col-lg-9 m-auto">
          <div className="card mx-auto mt-10 bg-light">
            <div className="card-body text-center">
              <h2 className="card-title text-center mb-5">
                Add a Park to Your List
              </h2>
              <div className="row mt-10">
                <h5 className="mt-10">Choose a Park to Add</h5>
                <select name="parkId" onChange={handleChange} id="parkId">
                  {ballParkData.length > 0
                    ? ballParkData.map((ballPark) => {
                        return (
                          <option
                            onChange={handleChange}
                            value={ballPark._id}
                            selected="selected"
                            key={ballPark._id}
                          >
                            {ballPark.name_display_full}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg mt-5"
                id="submitButton"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AddPark;
