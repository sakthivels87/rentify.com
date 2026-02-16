import PropertyCard from "../../../components/PropertyCard";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const MyAppointmentsPage = async () => {
  // const myAppointments = await fetch("http://localhost:4500/appointments").then(
  //   (res) => res.json(),
  // );
  // const properties = await fetch("http://localhost:4500/properties").then(
  //   (res) => res.json(),
  // );

  const myAppointments = await fetch(`${baseUrl}/api/v1/appointments`).then(
    (res) => res.json(),
  );
  const properties = await fetch(`${baseUrl}/api/v1/properties`).then((res) =>
    res.json(),
  );

  const propertyIds = myAppointments.map((p) => p.propertyId);
  const filteredProperties = properties.filter((p) =>
    propertyIds.includes(parseInt(p.id)),
  );

  return (
    <section className="grid grid-cols-1 gap-2">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((p) => <PropertyCard key={p.id} property={p} />)
      ) : (
        <p className="text-bold text-2xl">No Appointments</p>
      )}
    </section>
  );
};

export default MyAppointmentsPage;
