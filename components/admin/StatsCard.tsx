import { Card, CardHeader } from "@/components/ui/card";

type StatsCardsProps = {
  title: string;
  value: number | string;
};

export default function StatsCard({ title, value }: StatsCardsProps) {
  return (
    <Card className="">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="capitalize text-3xl font-bold">{title}</h3>
        <span className="text-primary text-5xl font-extrabold">{value}</span>
      </CardHeader>
    </Card>
  );
}
