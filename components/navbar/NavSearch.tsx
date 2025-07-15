"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { Input } from "../ui/input";

export default function NavSearch() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toString();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/?${params.toString()}`);
  }, 200);

  useEffect(() => {
    if (!searchValue) {
      setSearch("");
    } 
  }, [searchValue]);
  
  return (
    <Input
      type="search"
      placeholder="find a property..."
      className="max-w-full sm:max-w-xs dark:bg-muted "
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}
