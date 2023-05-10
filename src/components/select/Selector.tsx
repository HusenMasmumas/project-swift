import { FC } from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";
import { StyledSelect } from "components/styled/Styled";

const { Option } = Select;
interface Props extends SelectProps<any> {
  Source: any[];
  keyName: string;
  keyValue: string;
}

const CSelect: FC<Props> = ({
  bordered = true,
  Source = [],
  keyName,
  keyValue,
  ...props
}) => {
  return (
    <StyledSelect
      {...(props as any)}
      bordered={bordered}
      showSearch
      allowClear
      optionFilterProp="children"
      {...props}
    >
      {Source.map((item, idx) => (
        <Option value={item[keyValue]} key={idx}>
          {item[keyName]}
        </Option>
      ))}
    </StyledSelect>
  );
};

export default CSelect;
