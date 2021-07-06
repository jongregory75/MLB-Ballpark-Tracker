import React from "react";
import { useQuery } from "@apollo/client";
import mlbMap from "../assets/mlb-maps.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { QUERY_PROFILE_ID } from "../utils/queries";
const Dashboard = () => {
  const { data } = useQuery(QUERY_PROFILE_ID);
  const profileData = data?.profileById || {};
  console.log(profileData, "Profile Data------");
  return (
    <main>
      <h1 className="text-center" id="dashboardHeader">
        Your Dashboard
      </h1>
      <div
        className="d-flex flex-row flex-wrap justify-content-around"
        id="dashboard"
      >
        <img
          src={mlbMap}
          alt="A map with all of the ballparks placed on it"
          id="mlbMap"
        />
        <div id="visitArea">
          <Link to="/addPark">
            <button className="btn btn-dark">Add a Visit</button>
          </Link>
          <p>Add a review to a park that you have visited.</p>
        </div>
      </div>
      <div className="container-fluid justify-content-center" id="visitedArea">
        <h2>Your Visited Parks</h2>
        <ul>
          {profileData.visitedParks 
            ? profileData.visitedParks.map((visitedParkData) => {
                return <li>{visitedParkData.name_display_full}</li>;
              })
            : ""}
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;
