import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SAVE_VISITED } from "../utils/mutations";

// const [addNewPark, { error }] = useMutation(SAVE_VISITED);

const handleSubmit = (event) => {
  console.log("pushed");
  let parkID = document.getElementById("venue").value;
  let preComment = document.getElementById("pregameText").value;
  let bpComment = document.getElementById("ballparkText").value;
  // let finalPre;
  // let finalBp;

  // let preRating = document.getElementsByName("btnradio");
  // for (let i = 0; i < preRating.length; i++) {
  //   if (preRating[i].checked) {
  //     finalPre = preRating[i].value;
  //   }
  // }

  // let bpRating = document.getElementsByName("btnradio1");
  // for (let i = 0; i < bpRating.length; i++) {
  //   if (bpRating[i].checked) {
  //     finalBp = bpRating[i].value;
  //   }
  // }

  //  const idToken = localStorage.getItem("id_token")

  //   try {
  //     const { data } = await addNewPark({
  //       idToken:idToken
  //       parkID:parkID
  //     })
};

const AddPark = () => {
  return (
    <main className="addVisitArea">
      <div className="col-sm-3 col-md-6 col-lg-9 m-auto">
        <div className="card mx-auto bg-light">
          <div className="card-body text-center">
            <h2 className="card-title text-center mb-5">
              Add a Park to Your List
            </h2>
            <div className="row mt-10">
              <h5 className="mt-10">Choose a Park to Add</h5>
              <select name="venue" id="venue">
                <option value="default" selected="selected">
                  Choose Ballpark from List
                </option>
                <option value="60de187bce56a70648f26427">
                  Chase Field - Arizona Diamondbacks
                </option>
                <option value="60de187bce56a70648f26428">
                  Truist Park - Atlanta Braves
                </option>
                <option value="60de187bce56a70648f26429">
                  Oriole Park at Camden Yards - Baltimore Orioles
                </option>
                <option value="60de187bce56a70648f2642a">
                  Fenway Park - Boston Red Sox
                </option>
                <option value="60de187bce56a70648f2642b">
                  Wrigley Field - Chicago Cubs
                </option>
                <option value="60de187bce56a70648f2642c">
                  Guaranteed Rate Field - Chicago White Sox
                </option>
                <option value="60de187bce56a70648f2642d">
                  Great American Ballpark - Cincinnati Reds
                </option>
                <option value="60de187bce56a70648f2642e">
                  Progressive Field - Cleveland Indians
                </option>
                <option value="60de187bce56a70648f2642f">
                  Coors Field - Colorado Rockies
                </option>
                <option value="60de187bce56a70648f26430">
                  Comerica Park - Detroit Tigers
                </option>
                <option value="60de187bce56a70648f26431">
                  Minute Maid Park - Houston Astros
                </option>
                <option value="60de187bce56a70648f26432">
                  Kauffman Park - Kansas City Royals
                </option>
                <option value="60de187bce56a70648f26433">
                  Angel Stadium - Los Angeles Angels of Anaheim
                </option>
                <option value="60de187bce56a70648f26434">
                  Dodger Stadium - Los Angeles Dodgers
                </option>
                <option value="60de187bce56a70648f26435">
                  loanDepot Park - Miami Marlins
                </option>
                <option value="60de187bce56a70648f26436">
                  American Family Field - Milwaukee Brewers
                </option>
                <option value="60de187bce56a70648f26437">
                  Target Field - Minnesota Twins
                </option>
                <option value="60de187bce56a70648f26438">
                  Citi Field - New York Mets
                </option>
                <option value="60de187bce56a70648f26439">
                  Yankee Stadium - New York Yankees
                </option>
                <option value="60de187bce56a70648f2643a">
                  Oakland Coliseum - Oakland A's
                </option>
                <option value="60de187bce56a70648f2643b">
                  Citizen's Bank Park - Philadelphia Phillies
                </option>
                <option value="60de187bce56a70648f2643c">
                  PNC Park - Pittsburgh Pirates
                </option>
                <option value="60de187bce56a70648f2643d">
                  Petco Park - San Diego Padres
                </option>
                <option value="60de187bce56a70648f2643e">
                  Oracle Park - San Francisco Giants
                </option>
                <option value="60de187bce56a70648f2643f">
                  T-Mobile Park - Seattle Mariners
                </option>
                <option value="60de187bce56a70648f26440">
                  Busch Stadium - St. Louis Cardinals
                </option>
                <option value="60de187bce56a70648f26441">
                  Tropicana Field - Tampa Bay Rays
                </option>
                <option value="60de187bce56a70648f26442">
                  Globe Life Field - Texas Rangers
                </option>
                <option value="60de187bce56a70648f26443">
                  Rogers Center - Toronto Blue Jays
                </option>
                <option value="60de187bce56a70648f26444">
                  Nationals Park - Washington Nationals
                </option>
              </select>
            </div>

            <div className="row">
              <h5 class="text-center mt-5">Pregame Rating</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG1"
                  autoComplete="off"
                  value="1"
                />
                <label className="btn btn-outline-primary" htmlFor="PG1">
                  1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG2"
                  autoComplete="off"
                  value="2"
                />
                <label className="btn btn-outline-primary" htmlFor="PG2">
                  2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG3"
                  autoComplete="off"
                  value="3"
                />
                <label className="btn btn-outline-primary" htmlFor="PG3">
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG4"
                  autoComplete="off"
                  value="4"
                />
                <label className="btn btn-outline-primary" htmlFor="PG4">
                  4
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG5"
                  autoComplete="off"
                  value="5"
                />
                <label className="btn btn-outline-primary" htmlFor="PG5">
                  5
                </label>
              </div>
            </div>
            <div className="row">
              <h5 className="text-center mt-5">Ballpark Rating</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP1"
                  autoComplete="off"
                  value="1"
                />
                <label className="btn btn-outline-primary" htmlFor="BP1">
                  1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP2"
                  autoComplete="off"
                  value="2"
                />
                <label className="btn btn-outline-primary" htmlFor="BP2">
                  2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP3"
                  autoComplete="off"
                  value="3"
                />
                <label className="btn btn-outline-primary" htmlFor="BP3">
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP4"
                  autoComplete="off"
                  value="4"
                />
                <label className="btn btn-outline-primary" htmlFor="BP4">
                  4
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP5"
                  autoComplete="off"
                  value="5"
                />
                <label className="btn btn-outline-primary" htmlFor="BP5">
                  5
                </label>
              </div>
            </div>

            <div className="form-floating">
              <textarea
                className="form-control mt-5"
                placeholder="Leave a comment here"
                id="pregameText"
              ></textarea>
              <label htmlFor="pregameText">
                How was your experience outside the ballpark?
                <span className="font-size-small">
                  (bars/food/non-stadium fare)
                </span>
              </label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control mt-5"
                placeholder="Leave a comment here"
                id="ballparkText"
              ></textarea>
              <label htmlFor="ballparkText">
                How was your experience inside the ballpark?
                <span className="font-size-small">(snacks/prices/vendors)</span>
              </label>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg mt-5"
              id="submitButton"
              // onClick={handleSubmit}
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
