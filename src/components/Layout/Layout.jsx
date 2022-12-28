import React from "react";

import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.div`
  max-width: 1700px;
  width: 95%;
  margin: 0 auto;
  padding-top: 30px;
`;

export default Layout;
