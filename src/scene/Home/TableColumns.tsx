import { CheckBox } from "@/components/FormElements";
import { TableColumnsType } from "@/types/Table";
import { User } from "@/types/User";

export const tableColumns: TableColumnsType<User>[] = [
    {
        title: "Select",
        key: "select",
        width: "20%",
        render: (props) => {
          return (
            <CheckBox onChange={props.onChange} data={props.data} chartData={props.chartData} />
          )
        }
    },
    {
        title: "Username",
        key: "user_name",
        width: "20%",
        render: (props) => props.data.user_name
    },
    {
        title: "Email",
        key: "email",
        width: "20%",
        render: (props) => props.data.email
    },
    {
      title: "Orders",
      key: "orders",
      width: "20%",
      render: (props) => props.data.orders
    },
    {
      title: "Contact number",
      key: "contact_number",
      width: "20%",
      render: (props) => props.data.contact_number
    }
];
