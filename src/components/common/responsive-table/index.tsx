import { Button, Table } from "react-bootstrap";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

type Props<T> = {
  data: Array<T>;
  columns: Array<{
    Header: string;
    accessor: keyof T;
  }>;
};

export const ResponsiveDataTable = ({ data, columns }: Props<any extends infer R?R:any>) => {
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    // canPreviousPage,
    // _pageOptions,
    gotoPage,
    pageCount,
    // setPageSize,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <div className="e-table pb-5">
        <div className="d-flex">
          <GlobalResFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className="table-responsive table-bordered text-center">
          <Table
            {...getTableProps()}
            className="border-top-0  table-bordered text-nowrap border-bottom"
          >
            <thead>
              {headerGroups.map(
                (headerGroup: {
                  getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                    ClassAttributes<HTMLTableRowElement> &
                    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                    HTMLAttributes<HTMLTableRowElement>;
                  headers: any[];
                }) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={Math.random()}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        key={Math.random()}
                        className={column.className}
                      >
                        <span className="tabletitle">
                          {column.render("Header")}
                        </span>
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <i className="fa fa-angle-down"></i>
                            ) : (
                              <i className="fa fa-angle-up"></i>
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                )
              )}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: any) => {
                prepareRow(row);
                return (
                  <tr
                    className="text-center"
                    {...row.getRowProps()}
                    key={Math.random()}
                  >
                    {row.cells.map((cell: any) => {
                      return (
                        <td {...cell.getCellProps()} key={Math.random()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="d-block d-sm-flex mt-4 ">
          {/* <span className="">Showing 41 to 50 of 50 entries </span> */}
          <span className="ms-sm-auto ">
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2 d-sm-inline d-block"
              onClick={() => gotoPage(0)}
              disabled={!canNextPage}
            >
              {"Anterior"}
            </Button>
            <Button
              variant="primary"
              className="tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              // disabled={!canPreviousPage}
            >
              {" 1 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 2 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 3 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 4"}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" 5 "}
            </Button>
            <Button
              variant=""
              className="btn-outline-light tablebutton me-2 my-2"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Próximo "}
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};
const GlobalResFilter = ({ filter, setFilter }: any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Pesquisar..."
      />
    </span>
  );
};
