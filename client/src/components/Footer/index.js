import React from "react";

import { useLocation, useHistory } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <footer className="fixed-bottom bg-light">
      <p>©2021 MLB Park Tracker</p>
      <p>All rights reserved</p>
      <p>Project for Denver University Spring 2021 Bootcamp</p>
    </footer>
  );
};

export default Footer;
