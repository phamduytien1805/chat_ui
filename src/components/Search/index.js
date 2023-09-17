import React from "react";
import PropTypes from "prop-types";
import { SearchIconWrapper, SearchContainer, StyledInputBase } from "./styled";

function Search(props) {
  const { icon } = props;
  return (
    <SearchContainer>
      <StyledInputBase
        startAdornment={<SearchIconWrapper>{icon}</SearchIconWrapper>}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
}

Search.propTypes = {
  icon: PropTypes.element,
};

export default Search;
