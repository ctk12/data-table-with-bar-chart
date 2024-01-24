import { TitleTextD } from "@/shared/Typography";
import { Product } from "@/types/Product";

export const CheckBox = ({ onChange, data, chartData }:{
    onChange: (name: string, data: Product) => void;
    data: Product;
    chartData: Product[];
}) => {
    return (
        <input
            onChange={(e) => onChange(`${e.target.checked ? "ADD" : "REMOVE"}`, data)}
            className="cursor-pointer w-4 h-4"
            type="checkbox"
            value=""
            id="checkboxDefault"
            checked={chartData.map(user => user.id).includes(data.id)}
        />
    );
}

export const SearchEl = ({ onChange }:{ onChange: (data: string) => void; }) => {
    return (
      <input
        onChange={(e) => onChange(e.target.value)}
        className="shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        placeholder="Search"
      />
    );
}

export const InputBasicEl = ({ name, value, onChange }:
    { name: string; value: string; onChange: (value: string) => void; }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2" htmlFor={name}>
              <TitleTextD>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/_/g, " ")}</TitleTextD>
            </label>
            <input
                onChange={(e) => onChange(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={name}
                type="text"
                placeholder={name.replace(/_/g, " ")}
                value={value}
            />
        </div>
    );
}