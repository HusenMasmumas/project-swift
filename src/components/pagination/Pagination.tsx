import { FC } from "react";
import { useMainPagination } from "providers/pagination";
import { Pagination, PaginationProps } from "antd";

interface Props extends PaginationProps {}

const CPagination: FC<Props> = ({ ...props }) => {
  const { page, setPage } = useMainPagination();
  const onChangePage = (pageData: number, type?: string) => {
    if (!!setPage) {
      if (type === "pageSize")
        setPage({
          ...page,
          limitPage: pageData,
        });
      else
        setPage({
          ...page,
          currentPage: pageData,
        });
    }
  };
  return (
    <Pagination
      {...props}
      showSizeChanger
      onChange={(page) => onChangePage && onChangePage(page, "page")}
      total={page?.total || 1}
      current={page?.currentPage || 1}
      pageSize={page?.limitPage || 10}
      onShowSizeChange={(_current, pageSize) =>
        onChangePage && onChangePage(pageSize, "pageSize")
      }
    />
  );
};

export default CPagination;
