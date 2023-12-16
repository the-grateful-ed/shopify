import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-80">
      <Search className="absolute top-0 bottom-0 my-auto left-3" />
      <Input type="text" placeholder="Search" className="pl-12 pr-4" />
    </div>
  );
}
