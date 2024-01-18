import "./Home.scss";
import { useEffect, useMemo, useState } from "react";
import { User } from "@/types/User";
import { PaginationType } from "@/types/ApiData";
import { tableColumns } from "./TableColumns";
import Table from "@/components/Table";
import { TablePropsType } from "@/types/Table";
import { getUserData } from "./data";
import BarChart from "@/components/Chart";
import { SearchEl } from "@/components/FormElements";
import ConfigForm from "./ConfigForm";

const Home = () => {
  const [data, setData] = useState<User[]>([]);
  const [chartData, setChartData] = useState<User[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 1,
  });
  const [fetchLoading, setFetchLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [total, setTotal] = useState(0);

  const paginatedData = useMemo(() => {
    const filteredData = data.filter(data => data.user_name.match(searchInput));
    setPagination(state => {
      return {
        ...state,
        totalPages: !searchInput ? Math.ceil(data.length / state.limit) : Math.ceil(filteredData.length / state.limit),
        totalResults:  !searchInput ? data.length : filteredData.length,
        page: state.page > state.totalPages ? 1 : state.page,
      };
    });
    return !searchInput
      ? data?.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit)
      : filteredData?.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handlePageChange = (newPage: number) => {
    setPagination(state => {
     return {
       ...state,
       page: newPage,
     }
   });
 };

 const onChange = (key: string, data: User) => {
  if (key === "ADD") {
    setChartData(state => [...state, data]);
  }
  if (key === "REMOVE") {
     setChartData(state => state.filter(user => user.id !== data.id));
  }
}

const handleConfig = (total: number, limit: number ) => {
  setPagination(state => {
    return {
      ...state,
      limit: limit
    }
  });
  setTotal(total);
}

useEffect(() => {
  setData(state => [...state]);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [pagination]);

useEffect(() => {
  const timeOut = setTimeout(() => {
    setData(state => [...state]);
  }, 1000);

  return () => clearTimeout(timeOut)
}, [searchInput])

  useEffect(() => {
    const timeOutFunc = setTimeout(() => {
      if (total > 0) {
        const userData = getUserData(total);
        setData(userData);
      }
      setFetchLoading(false);
      clearTimeout(timeOutFunc);
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const columnsProps = {
    onChange,
    tableColumns: tableColumns,
    chartData
  }

  const paginationProps = {
    pagination,
    handlePageChange,
    fetchLoading,
    paginatedData,
  }

  const tableData: TablePropsType<User> = {
    columnsProps,
    paginationProps,
  }

  return (
    <>
      {data.length > 0 ? (
        <>
         <BarChart userData={chartData} />
         <SearchEl onChange={setSearchInput} />
         <Table {...tableData} />
        </>
      ) : (
        <div className="w-full flex justify-center">
          <ConfigForm handleConfig={handleConfig} />
        </div>
      )}
    </>
  );
}

export default Home;