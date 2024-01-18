import { useState } from "react";
import { InputBasicEl } from "@/components/FormElements";
import { SecondLoader } from "@/shared/AppLoader/MainLoader";
import { TitleTextC } from "@/shared/Typography";

const ConfigForm = ({ handleConfig }: {
  handleConfig: (total: number, limit: number) => void;
}) => {
    const [total, setTotal] = useState("50");
    const [limit, setLimit] = useState("10");
    const [loading, setLoading] = useState<boolean>(false);

  const runAddConfig = async () => {
    setLoading(true);
    if (!total || !limit) {
        alert("All fields are required");
        setLoading(false);
        return;
    }
    const numTotal = Number(total);
    const numLimit = Number(limit);
    const regex = /^\d+$/;
    if (!regex.test(total) || !regex.test(limit) || numTotal < 1 || numLimit < 1) {
      alert("total and limit must be number and greater then 0.");
      setLoading(false);
      return;
    }
    handleConfig(numTotal, numLimit);
  }

  return (
    <div className="w-full max-w-xs">
      {loading ? <SecondLoader /> : (
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <TitleTextC className="mb-4">Config user data for test</TitleTextC>
        <InputBasicEl name="total_data" value={total} onChange={setTotal} />
        <InputBasicEl name="limit_per_page" value={limit} onChange={setLimit} />
        
        <div className="flex items-center justify-between">
          <button onClick={runAddConfig} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Continue
          </button>
        </div>
      </form>
      )}
</div>
  )
}

export default ConfigForm;