export interface IPaginationContext {
  setPage: (e?: IPagination) => void;
  page: IPagination;
}

export interface IPagination {
  total: number;
  currentPage: number;
  limitPage: number;
}
