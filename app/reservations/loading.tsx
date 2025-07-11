import LoadingTable from "@/components/booking/LoadingTable";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="mt-16">
      <Skeleton className="w-40 h-8 rounded mb-4" />
      <LoadingTable />
    </div>
  );
}
