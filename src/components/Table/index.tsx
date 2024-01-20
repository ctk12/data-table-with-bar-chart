import { TitleTextC, TitleTextE } from "@/shared/Typography";
import Pagination from "@/components/Pagination";
import { DataLoader } from "@/shared/AppLoader/MainLoader";
import { TablePropsType, tableRowExtendObject } from "@/types/Table";
import TableRow from "./TableRow";
import "./Table.scss";

function Table<T extends tableRowExtendObject>(props: TablePropsType<T>) {
  const { columnsProps, paginationProps } = props;

  return (
      <div className="flex flex-col w-full">
        <div className="custom-table mb-2 bg-slate-50 border border-gray-250 drop-shadow-sm" style={{ borderRadius: "2px" }}>
          <div className="custom-table__head" id="th" style={{ position: "sticky" }}>
            <div className="tr" style={{ padding: "10px", borderBottom: "1px solid var(--borders)", minHeight: 30 }}>
              {columnsProps.tableColumns.map(data => {
                return (
                  <div
                    className="td"
                    key={data.key}
                    style={{
                        overflowWrap: "anywhere",
                        width: `${data.width}`,
                    }}
                   >
                    <TitleTextE>{data.title}</TitleTextE>
                   </div>
                )
              })}
            </div>
          </div>

          <div className="custom-table__body" id="tbody">
            {paginationProps.fetchLoading ? (
              <div
                className="tr justify-center"
                style={{ height: 300, minHeight: 300, paddingLeft: 0, paddingRight: 0 }}
              >
                <DataLoader />
              </div>
            ) : (
              <>
                {paginationProps?.paginatedData?.length === 0 && (
                  <div
                  className="tr justify-center"
                  style={{ height: 300, minHeight: 300, paddingLeft: 0, paddingRight: 0 }}
                >
                  <TitleTextC>No Data Found</TitleTextC>
                </div>
                )}
                {[...paginationProps.paginatedData]?.map((data, index) => {
                  return (
                    <TableRow
                      key={data.id}
                      data={data}
                      onChange={columnsProps.onChange}
                      tableColumns={columnsProps.tableColumns}
                      chartData={columnsProps.chartData}
                      isLast={(paginationProps.paginatedData.length - 1) === index}
                    />
                  )
                })}
              </>
            )}
          </div>
        </div>
        <Pagination paginationData={paginationProps.pagination} onPageChange={paginationProps.handlePageChange} />
      </div>
  );
}

export default Table;