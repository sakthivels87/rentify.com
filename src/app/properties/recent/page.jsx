import PropertyCard from "../../../components/PropertyCard";
export const dynamic = "force-dynamic";

const RecentPropertiesPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const properties = await fetch("http://localhost:4500/properties").then(
  //   (res) => res.json(),
  // );
  // const recentProperties = await fetch(
  //   "http://localhost:4500/recent-properties",
  // ).then((res) => res.json());

  const properties = await fetch(`${baseUrl}/api/v1/properties`, {
    cache: "no-store",
  }).then((res) => res.json());
  const recentProperties = await fetch(`${baseUrl}/api/v1/recent-properties`, {
    cache: "no-store",
  }).then((res) => res.json());

  const recentPropertyIds = recentProperties.map((r) => r.propertyId);
  const recentPropertyDetails = properties.filter((p) =>
    recentPropertyIds.includes(parseInt(p.id)),
  );

  return (
    <section className="grid gap-2 m-2 ml-8">
      <p className="text-2xl font-bold text-gray-600">
        Recently Added Properties
      </p>
      {recentPropertyDetails?.length > 0 &&
        recentPropertyDetails.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
    </section>
  );
};
export default RecentPropertiesPage;
