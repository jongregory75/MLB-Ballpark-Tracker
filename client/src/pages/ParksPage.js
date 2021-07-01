import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import alwList from "../components/alwList";
import alcList from "../components/alwList";
import aleList from "../components/alwList";
import nlwList from "../components/alwList";
import nlcList from "../components/alwList";
import nleList from "../components/alwList";

const ParksPage = () => {
  if (loading) return "Loading...";
  if (error) return "Error ${error.message}";

  return (
    <div>
      <div>
        <h1>American League</h1>
      </div>
      <alwList />
      <alcList />
      <aleList />
      <div>
        <h1>National League</h1>
      </div>
      <nlwList />
      <nlcList />
      <nleList />
    </div>
  );
};

export default ParksPage;
