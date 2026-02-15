import Link from "next/link";
import Image from "next/image";

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden shadow hover:shadow-lg transition m-3 themed-card">
      <div className="relative w-full lg:w-lg md:w-md h-80">
        <Image
          src={property.images[0] || property.images[1]}
          alt={property.title}
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg md:text-xl font-semibold">{property.title}</h2>
        <p>{property.description}</p>
        <p>City: {property.city}</p>
        <p>Building Type: {property.type}</p>
        <p>Price: {property.price}</p>
        <p className="muted text-sm">
          {property.datePosted} · {property.time}
        </p>
        <p className="mt-2 font-medium text-sm">₹{property.availability}</p>
      </div>
      <Link
        href={`/properties/${property.id}`}
        className="hover:bg-cyan-400 text-center mb-5 py-2 px-8 md:py-4 md:basis-[10vw] md:p-4 border rounded-xl outline-amber-400 hover:outline-amber-700"
      >
        View
      </Link>
    </div>
  );
};

export default PropertyCard;
