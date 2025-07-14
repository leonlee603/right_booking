import Chart from './Chart';
import { fetchChartsData } from '@/utils/actions';

export default async function ChartsContainer() {
  const bookings = await fetchChartsData();

  if (bookings.length < 1) return null;

  return <Chart data={bookings} />;
}