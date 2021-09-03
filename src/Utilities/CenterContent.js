import React from "react";
import PropTypes from "prop-types";
import styles from "./Utilities.module.css";
const CenterContent = ({ children }) => {
  return <div className={styles.centeralizedpageText}>{children}</div>;
};
CenterContent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CenterContent;
