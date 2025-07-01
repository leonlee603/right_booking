import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const searchParamsResult = await searchParams;
  
  return (
    <section>
      <CategoriesList
        category={searchParamsResult?.category}
        search={searchParamsResult?.search}
      />
      <PropertiesContainer
        category={searchParamsResult?.category}
        search={searchParamsResult?.search}
      />
    </section>
  );
}
