import { ReactNode } from "react";
import { Table } from "react-bootstrap";

export interface Column {
  title: ReactNode;
  dataKey: string;
  display?: boolean;
}

interface Data {
  [key: string]: any;
}

interface TableProps {
  data: Data[];
  columns: Column[];
  leftAction?: (context: Data) => ReactNode;
  rightAction?: (context: Data) => ReactNode;
  rowDataComponent?: React.ComponentType<{ rowData: Data }>;
}

export const CustomTable: React.FC<TableProps> = ({
  data,
  columns,
  leftAction,
  rightAction,
}) => {
  const columnsToDisplay = columns.filter((column) => column.display);

  return (
    <Table
      striped
      bordered
      size="sm"
      className="table text-nowrap table-striped table-bordered"
    >
      <thead>
        <tr>
          {leftAction && <th scope="col">Actions</th>}
          {columnsToDisplay.map((column, index) => (
            <th scope="col" key={index}>
              {column.title}
            </th>
          ))}
          {rightAction && <th scope="col">Status</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {leftAction && <td>{leftAction(item)}</td>}
            {columnsToDisplay.map((column, idx) => (
              <td key={idx}>{item[column.dataKey]}</td>
            ))}
            {rightAction && <td>{rightAction(item)}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
