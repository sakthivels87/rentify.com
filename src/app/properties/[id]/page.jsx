"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "../../../components/BackButton";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    async function fetchProperty() {
      const data = await fetch(`http://localhost:4500/properties/${id}`).then(
        (res) => res.json(),
      );

      setProperty(data);
    }

    if (id) fetchProperty();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <section className="grid p-5">
      <div>
        <h1 className="text-2xl font-bold mb-4">Property Details Page</h1>

        <div className="relative w-full h-[500px]">
          <Image
            src={
              property.images?.[0] || property.images?.[1] || "/fallback.jpg"
            }
            alt={property.title || "Property Image"}
            fill
            className="object-cover rounded"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">{property.title}</h3>
          <p>{property.description}</p>
        </div>

        <ul className="flex gap-4 mt-4">
          <li>City: {property.city}</li>
          <li>Price: {property.price}</li>
          <li>Type: {property.type}</li>
        </ul>

        <p className="mt-2">Availability: {property.availability}</p>
      </div>
      <div className="">
        <BackButton />
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
