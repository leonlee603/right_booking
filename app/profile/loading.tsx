import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div>
      <Skeleton className="w-40 h-8 rounded mb-4" />
      <Skeleton className="w-full h-[528px] md:h-[446px] rounded" />
    </div>
  )
}