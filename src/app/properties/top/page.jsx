import PropertyCard from "../../../components/PropertyCard";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const TopPropertiesPage = async () => {
  // const properties = await fetch("http://localhost:4500/properties").then(
  //   (res) => res.json(),
  // );
  // const topProperties = await fetch(
  //   "http://localhost:4500/top-properties",
  // ).then((res) => res.json());

  const properties = await fetch(`${baseUrl}/api/v1/properties`).then((res) =>
    res.json(),
  );

  const topProperties = await fetch(`${baseUrl}/api/v1/top-properties`).then(
    (res) => res.json(),
  );
  const propertyIds = topProperties.map((a) => a.propertyId);
  const topPropertyDetails = properties.filter((p) =>
    propertyIds.includes(parseInt(p.id)),
  );
  console.log(topPropertyDetails);
  return (
    <section className="grid gap-2 m-2 ml-8">
      <p className="text-2xl font-bold text-gray-600">Top Properties details</p>
      {topPropertyDetails?.length > 0 &&
        topPropertyDetails.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
    </section>
  );
};

export default TopPropertiesPage;
