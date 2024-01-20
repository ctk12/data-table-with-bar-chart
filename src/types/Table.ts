import { PaginationType } from "./ApiData";

export interface TableColumnsType<T extends tableRowExtendObject> {
    title: string;
    key: string;
    width: string;
    render: (props: TableRowProps<T>, keyName: string) => React.ReactNode;
}

export interface TableRowProps<T extends tableRowExtendObject> {
    data: T;
    isLast: boolean;
    onChange: (key: string, data: T) => void;
    tableColumns: TableColumnsType<T>[];
    chartData: T[];
}

export interface tableRowExtendObject {
    id: number;
}

export interface TablePropsType<T extends tableRowExtendObject> {
    columnsProps: Omit<TableRowProps<T>, "data" | "isLast" >;
    paginationProps: {
        pagination: PaginationType;
        handlePageChange: (newPage: number) => void;
        fetchLoading: boolean;
        paginatedData: T[];
    }
}