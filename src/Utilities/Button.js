/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
export const Button = ({ href, children, className, onClick, target }) => {
  return (
    <a className={className} onClick={onClick} target={target} href={href}>
      {children}
    </a>
  );
};
Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
};

