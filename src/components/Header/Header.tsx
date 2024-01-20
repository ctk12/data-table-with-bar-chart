import "./Header.scss";
import { TitleTextA } from "@/shared/Typography";

export function Header({ name }: { name: string; }) {
  return (
    <div className="flex items-center w-full h-14 px-10 py-1 bg-slate-50 border-b border-gray-250 drop-shadow-sm max-[768px]:h-12">
      <div className="flex items-center w-full justify-between gap-8 max-[900px]:gap-5">
        <div className="header-left flex flex-col justify-center">
          <TitleTextA>{name}</TitleTextA>
        </div>
      </div>
    </div>
  )
}

// 105.6 for sm
// 121.36 for lg