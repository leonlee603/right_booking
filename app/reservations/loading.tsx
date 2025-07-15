import LoadingTable from "@/components/booking/LoadingTable";
import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <>
      <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
      <div className="mt-16">
        <Skeleton className="w-40 h-8 rounded mb-4" />
        <LoadingTable />
      </div>
    </>
  );
}

function LoadingCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-12 rounded" />
      </CardHeader>
    </Card>
  );
}
