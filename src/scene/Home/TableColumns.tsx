import { CheckBox } from "@/components/FormElements";
import { Product } from "@/types/Product";
import { TableColumnsType } from "@/types/Table";

export const tableColumns: TableColumnsType<Product>[] = [
    {
        title: "Select",
        key: "select",
        width: "7%",
        render: (props) => {
          return (
            <CheckBox onChange={props.onChange} data={props.data} chartData={props.chartData} />
          )
        }
    },
    {
        title: "Title",
        key: "title",
        width: "20%",
        render: (props) => props.data.title
    },
    {
        title: "Description",
        key: "description",
        width: "28%",
        render: (props) => props.data.description
    },
    {
      title: "Brand",
      key: "brand",
      width: "15%",
      render: (props) => props.data.brand
    },
    {
      title: "Category",
      key: "category",
      width: "14%",
      render: (props) => props.data.category
    },
    {
      title: "Price",
      key: "price",
      width: "8%",
      render: (props) => props.data.price
    },
    {
      title: "Rating",
      key: "rating",
      width: "8%",
      render: (props) => props.data.rating
    }
];
