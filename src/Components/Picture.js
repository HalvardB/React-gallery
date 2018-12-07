import React from "react";
import PropTypes from "prop-types";

const Picture = props =>

  <li>
    <img src={props.url} alt="" key={props.key} />
  </li>

  Picture.propTypes = {

  }

export default Picture;
