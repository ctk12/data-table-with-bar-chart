import { PaginationType } from "./ApiData";
import { User } from "./User";

export interface TableColumnsType<T extends tableRowExtendObject> {
    title: string;
    key: string;
    width: string;
    render: (props: TableRowProps<T>, keyName: string) => React.ReactNode;
}

export interface TableRowProps<T extends tableRowExtendObject> {
    data: T;
    isLast: boolean;
    onChange: (key: string, data: User) => void;
    tableColumns: TableColumnsType<T>[];
    chartData: T[];
}

export interface tableRowExtendObject {
    id: string
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