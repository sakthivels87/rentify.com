import PropertyCard from "../../../components/PropertyCard";

const TopPropertiesPage = async () => {
  const properties = await fetch("http://localhost:4500/properties").then(
    (res) => res.json(),
  );
  const topProperties = await fetch(
    "http://localhost:4500/top-properties",
  ).then((res) => res.json());
  const propertyIds = topProperties.map((a) => a.propertyId);
  const topPropertyDetails = properties.filter((p) =>
    propertyIds.includes(parseInt(p.id)),
  );
  console.log(topPropertyDetails);
  return (
    <section className="grid gap-2 m-2">
      <h2>Top Properties details</h2>
      {topPropertyDetails?.length > 0 &&
        topPropertyDetails.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
    </section>
  );
};

export default TopPropertiesPage;
