import PropertyCard from "../../components/PropertyCard";

export default async function PropertiesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const properties = await fetch("http://localhost:4500/properties").then(
  //   (res) => res.json(),
  // );

  const properties = await fetch(`${baseUrl}/api/v1/properties`).then((res) =>
    res.json(),
  );
  return (
    <section className="grid gap-2 m-2 ml-6">
      <p className="text-2xl font-bold text-gray-600">Available Properties</p>
      {properties.length > 0 ? (
        <div>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No Properties Found</p>
        </div>
      )}
    </section>
  );
}
