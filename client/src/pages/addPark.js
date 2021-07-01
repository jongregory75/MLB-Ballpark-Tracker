import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AddPark = () => {
  return (
    <main>
      <div className="col-sm-3 col-md-6 col-lg-9 m-auto">
        <div className="card mx-auto mt-10 bg-light">
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
                <option value="ARI">Chase Field - Arizona Diamondbacks</option>
                <option value="BS1">Truist Park - Atlanta Braves</option>
                <option value="MLA">
                  Oriole Park at Camden Yards - Baltimore Orioles
                </option>
                <option value="BOS">Fenway Park - Boston Red Sox</option>
                <option value="CH2">Wrigley Field - Chicago Cubs</option>
                <option value="CHA">
                  Guaranteed Rate Field - Chicago White Sox
                </option>
                <option value="CN2">
                  Great American Ballpark - Cincinnati Reds
                </option>
                <option value="CLE">
                  Progressive Field - Cleveland Indians
                </option>
                <option value="COL">Coors Field - Colorado Rockies</option>
                <option value="DET">Comerica Park - Detroit Tigers</option>
                <option value="HOU">Minute Maid Park - Houston Astros</option>
                <option value="KCA">Kauffman Park - Kansas City Royals</option>
                <option value="LAA">
                  Angel Stadium - Los Angeles Angels of Anaheim
                </option>
                <option value="BR3">
                  Dodger Stadium - Los Angeles Dodgers
                </option>
                <option value="FLO">loanDepot Park - Miami Marlins</option>
                <option value="SE1">
                  American Family Field - Milwaukee Brewers
                </option>
                <option value="WS1">Target Field - Minnesota Twins</option>
                <option value="NYN">Citi Field - New York Mets</option>
                <option value="BLA">Yankee Stadium - New York Yankees</option>
                <option value="PHA">Oakland Coliseum - Oakland A's</option>
                <option value="WOR">
                  Citizen's Bank Park - Philadelphia Phillies
                </option>
                <option value="PT1">PNC Park - Pittsburgh Pirates</option>
                <option value="SDN">Petco Park - San Diego Padres</option>
                <option value="TRN">Oracle Park - San Francisco Giants</option>
                <option value="SEA">T-Mobile Park - Seattle Mariners</option>
                <option value="SL4">Busch Stadium - St. Louis Cardinals</option>
                <option value="TBA">Tropicana Field - Tampa Bay Rays</option>
                <option value="WS2">Globe Life Field - Texas Rangers</option>
                <option value="TOR">Rogers Center - Toronto Blue Jays</option>
                <option value="MON">
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
                  autocomplete="off"
                  value="1"
                />
                <label className="btn btn-outline-primary" for="PG1">
                  1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG2"
                  autocomplete="off"
                  value="2"
                />
                <label class="btn btn-outline-primary" for="PG2">
                  2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio3"
                  id="PG3"
                  autocomplete="off"
                  value="3"
                />
                <label class="btn btn-outline-primary" for="PG3">
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG4"
                  autocomplete="off"
                  value="4"
                />
                <label class="btn btn-outline-primary" for="PG4">
                  4
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG5"
                  autocomplete="off"
                  value="5"
                />
                <label className="btn btn-outline-primary" for="PG5">
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
                  autocomplete="off"
                  value="1"
                />
                <label className="btn btn-outline-primary" for="BP1">
                  1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP2"
                  autocomplete="off"
                  value="2"
                />
                <label className="btn btn-outline-primary" for="BP2">
                  2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP3"
                  autocomplete="off"
                  value="3"
                />
                <label className="btn btn-outline-primary" for="BP3">
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP4"
                  autocomplete="off"
                  value="4"
                />
                <label className="btn btn-outline-primary" for="BP4">
                  4
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP5"
                  autocomplete="off"
                  value="5"
                />
                <label className="btn btn-outline-primary" for="BP5">
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
              <label for="pregameText">
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
              <label for="ballparkText">
                How was your experience inside the ballpark?
                <span className="font-size-small">(snacks/prices/vendors)</span>
              </label>
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
