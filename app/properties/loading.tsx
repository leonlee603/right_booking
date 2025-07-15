import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div>
      <Skeleton className="w-40 h-5 rounded mb-4" />
      <Skeleton className="w-72 h-10 rounded mb-8" />
      <Skeleton className="h-[300px] md:h-[500px] w-full rounded" />
    </div>
  );
}
