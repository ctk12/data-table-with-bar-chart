import { TableRowProps, tableRowExtendObject } from "@/types/Table";

function TableRow<T extends tableRowExtendObject>(props: TableRowProps<T>) {
  const { data, isLast, tableColumns } = props;

  const trStyle = {
    padding: "10px",
    borderBottom: isLast ? "none" : "1px solid var(--borders)",
  };  

  return (
    <div className="tr relative" key={data.id} style={trStyle}>
        {tableColumns.map(column => {
          return (
            <div className="td" key={column.key} style={{ overflowWrap: "anywhere", width: `${column.width}` }}>
              {column?.render(props, column.key)}
            </div>
          )
        })}
    </div>
  );
}

export default TableRow;