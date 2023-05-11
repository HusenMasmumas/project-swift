import { DatePickerThemeTypes } from "./interface";
import { InputThemeTypes, SelectThemeTypes } from "./interface";
import { DatePicker, Input, InputNumber, Select } from "antd";
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

export const StyledInput = styled(Input)<{ thm?: InputThemeTypes }>`
  height: ${({ thm }) => thm?.height || "40px"};
  width: ${({ thm }) => thm?.width || "100%"};
  background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  .ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  }
  &.ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  }
`;

export const StyledInputNumber = styled(InputNumber)<{ thm?: InputThemeTypes }>`
  height: ${({ thm }) => thm?.height || "40px"};
  width: ${({ thm }) => thm?.width || "100%"};
  background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  .ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  }
  &.ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  }
  .ant-input-number-input {
    height: ${({ thm }) => thm?.height || "37px"} !important;
  }
`;

export const StyledDatePicker = styled(DatePicker)<{
  thm?: DatePickerThemeTypes;
}>`
  width: ${({ thm }) => thm?.width || "100%"};
  &.ant-picker {
    height: 40px;
  }
`;
