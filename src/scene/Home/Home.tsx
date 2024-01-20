import "./Home.scss";
import { Suspense, lazy, useEffect, useState } from "react";
import { PaginationType } from "@/types/ApiData";
import { tableColumns } from "./TableColumns";
import Table from "@/components/Table";
import { TablePropsType } from "@/types/Table";
import { SearchEl } from "@/components/FormElements";
import { Product } from "@/types/Product";
import { getProducts } from "@/api/products";
import { queryParamFromObject } from "@/utils/helpers";
import { DotsLoader } from "@/shared/AppLoader/MainLoader";
const BarChart = lazy(() => import("@/components/Chart"));

const Home = () => {
  const [data, setData] = useState<Product[]>([]);
  const [chartData, setChartData] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 1,
  });
  const [fetchLoading, setFetchLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState(false);
  const [init, setInit] = useState(false);

  const handlePageChange = (newPage: number) => {
    setPagination(state => {
     return {
       ...state,
       page: newPage,
     }
   });
 };

 const onChange = (key: string, data: Product) => {
  if (key === "ADD") {
    setChartData(state => [...state, data]);
  }
  if (key === "REMOVE") {
     setChartData(state => state.filter(user => user.id !== data.id));
  }
}

useEffect(() => {
  setActiveTab(chartData.length > 0 ? true : false);
}, [chartData]);

useEffect(() => {
  fetchProducts();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [pagination.page]);

useEffect(() => {
  const timeOut = setTimeout(() => {
    setPagination(state => {
      return {
        ...state,
        page: 1
      }
    });
    if (init) {
      fetchProducts();
    }
    if (!init) {
      setInit(true);
    }
  }, 1000);

  return () => clearTimeout(timeOut);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchInput])

const fetchProducts = async () => {
  setFetchLoading(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {
    limit: pagination.limit,
    skip: pagination.page > 1 ? (pagination.page - 1) * 10 : 0,
    select: "title,description,brand,category,price,rating",
  }
  if (searchInput) {
    params.q = searchInput;
  }
  const paramString = searchInput ? `/search?${queryParamFromObject(params)}` : `?${queryParamFromObject(params)}`;
  const result = await getProducts(paramString);
  setData(result.products);
  setPagination(state => {
    return {
      ...state,
      totalPages: Math.ceil(result.total / result.limit),
      totalResults:  result.total,
      page: state.page > state.totalPages ? 1 : state.page,
    };
  });
  setFetchLoading(false);
}

  const columnsProps = {
    onChange,
    tableColumns: tableColumns,
    chartData
  }

  const paginationProps = {
    pagination,
    handlePageChange,
    fetchLoading,
    paginatedData: data,
  }

  const tableData: TablePropsType<Product> = {
    columnsProps,
    paginationProps,
  }

  return (
    <>
      <div className="flex gap-2 max-[900px]:flex-col max-[900px]:pb-6" >
        <div className={activeTab ? "w-1/2 max-[900px]:w-full" : "w-full"} style={{ transition: "width 0.3s ease" }}>
          <SearchEl onChange={setSearchInput} />
          <Table {...tableData} />
        </div>
        {activeTab && (
          <div className="w-1/2 max-[900px]:w-full" style={{ transition: "width 0.3s ease" }}>
            <div className="w-full h-full">
              <Suspense fallback={<DotsLoader />}>
                <BarChart productData={chartData} />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;