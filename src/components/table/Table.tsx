import { FC } from "react";
import { Table, TableProps } from "antd";
import styled from "styled-components";
import CPagination from "components/pagination/Pagination";

export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th,
  &.ant-table-wrapper .ant-table-thead > tr > td {
    background: #f6f9fc !important;
  }

  td.ant-table-cell::before {
    display: none !important;
    background: none !important;
  }
  th.ant-table-cell::before {
    display: none !important;
    background: none !important;
  }
`;

interface Props extends TableProps<any> {
  classNamePagination?: string;
  paginationTable?: boolean;
}

const CTable: FC<Props> = ({
  paginationTable = true,
  classNamePagination,
  ...props
}) => {
  return (
    <div className="px-[2px] py-[2px]">
      <StyledTable
        dataSource={props?.dataSource}
        columns={props.columns}
        scroll={{ x: "calc(100vw-5%)" }}
        {...props}
        pagination={false}
      />
      {!!paginationTable ? (
        <div className=" bg-white flex p-[15px] justify-end ">
          <CPagination className={classNamePagination} />
        </div>
      ) : null}
    </div>
  );
};

export default CTable;
