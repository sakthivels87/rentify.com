import PropertyCard from "../../../components/PropertyCard";

const RecentPropertiesPage = async () => {
  const properties = await fetch("http://localhost:4500/properties").then(
    (res) => res.json(),
  );
  const recentProperties = await fetch(
    "http://localhost:4500/recent-properties",
  ).then((res) => res.json());

  const recentPropertyIds = recentProperties.map((r) => r.propertyId);
  const recentPropertyDetails = properties.filter((p) =>
    recentPropertyIds.includes(parseInt(p.id)),
  );

  return (
    <section className="grid gap-2 m-2">
      <h2>Recently Added Properties</h2>
      {recentPropertyDetails?.length > 0 &&
        recentPropertyDetails.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
    </section>
  );
};
export default RecentPropertiesPage;
