import { Select } from "antd";
import { SelectThemeTypes } from "./interface";
import styled from "styled-components";

export const StyledSelect = styled(Select)<{
  thm?: SelectThemeTypes;
}>`
  &.ant-select {
    width: 100% !important;
  }
  .ant-select-selector {
    height: ${({ thm }) => thm?.height || "40px"} !important;
    width: 100% !important;
  }

  &.ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: ${({ thm }) => thm?.height || "40px"};
  }

  .ant-select-selection-search {
    display: flex !important;
    align-items: center !important;
  }
  .ant-select-selection-placeholder {
    display: flex !important;
    align-items: center !important;
  }
`;
