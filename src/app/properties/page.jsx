import PropertyCard from "../../components/PropertyCard";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default async function PropertiesPage() {
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
/*
const PropertiesPage = async () => {
  //const { search } = searchParams || {};
  // const properties = await fetch("http://localhost:4500/properties").then(
  //   (res) => res.json(),
  // );
  const properties = [
    {
      id: "1",
      title: "Luxury Apartment in Los Angeles",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Los Angeles",
      type: "Apartment",
      price: 1292,
      images: [
        "https://picsum.photos/id/1015/800/600",
        "https://picsum.photos/id/1016/800/600",
      ],
      ownerId: 7,
      highlight: false,
      datePosted: "2025-07-20",
      verified: true,
      availability: "Not Available",
    },
    {
      id: "2",
      title: "Cozy Studio in Phoenix",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Chicago",
      type: "House",
      price: 2417,
      images: [
        "https://picsum.photos/id/1018/800/600",
        "https://picsum.photos/id/1019/800/600",
      ],
      ownerId: 5,
      highlight: false,
      datePosted: "2025-07-19",
      verified: true,
      availability: "Not Available",
    },
    {
      id: "3",
      title: "Cozy Villa in Houston",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Los Angeles",
      type: "House",
      price: 1107,
      images: [
        "https://picsum.photos/id/1020/800/600",
        "https://picsum.photos/id/1021/800/600",
      ],
      ownerId: 7,
      highlight: false,
      datePosted: "2025-07-18",
      verified: false,
      availability: "Not Available",
    },
    {
      id: "4",
      title: "Spacious Villa in Chicago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Chicago",
      type: "Studio",
      price: 1661,
      images: [
        "https://picsum.photos/id/1022/800/600",
        "https://picsum.photos/id/1023/800/600",
      ],
      ownerId: 4,
      highlight: false,
      datePosted: "2025-07-17",
      verified: true,
      availability: "Not Available",
    },
    {
      id: "5",
      title: "Luxury Condo in New York",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Chicago",
      type: "House",
      price: 2411,
      images: [
        "https://picsum.photos/id/1024/800/600",
        "https://picsum.photos/id/1025/800/600",
      ],
      ownerId: 6,
      highlight: true,
      datePosted: "2025-07-16",
      verified: true,
      availability: "Available",
    },
    {
      id: "6",
      title: "Modern Villa in Houston",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "New York",
      type: "Studio",
      price: 1752,
      images: [
        "https://picsum.photos/id/1026/800/600",
        "https://picsum.photos/id/1027/800/600",
      ],
      ownerId: 7,
      highlight: false,
      datePosted: "2025-07-15",
      verified: false,
      availability: "Available",
    },
    {
      id: "7",
      title: "Modern Studio in Phoenix",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Houston",
      type: "Condo",
      price: 2444,
      images: [
        "https://picsum.photos/id/1028/800/600",
        "https://picsum.photos/id/1029/800/600",
      ],
      ownerId: 7,
      highlight: false,
      datePosted: "2025-07-14",
      verified: true,
      availability: "Not Available",
    },
    {
      id: "8",
      title: "Modern Villa in Los Angeles",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Phoenix",
      type: "Condo",
      price: 1156,
      images: [
        "https://picsum.photos/id/1030/800/600",
        "https://picsum.photos/id/1031/800/600",
      ],
      ownerId: 4,
      highlight: false,
      datePosted: "2025-07-13",
      verified: true,
      availability: "Available",
    },
    {
      id: "9",
      title: "Modern House in Los Angeles",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "New York",
      type: "Condo",
      price: 1535,
      images: [
        "https://picsum.photos/id/1032/800/600",
        "https://picsum.photos/id/1033/800/600",
      ],
      ownerId: 5,
      highlight: false,
      datePosted: "2025-07-12",
      verified: false,
      availability: "Not Available",
    },
    {
      id: "10",
      title: "Luxury Condo in New York",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      city: "Houston",
      type: "House",
      price: 853,
      images: [
        "https://picsum.photos/id/1034/800/600",
        "https://picsum.photos/id/1035/800/600",
      ],
      ownerId: 4,
      highlight: true,
      datePosted: "2025-07-11",
      verified: true,
      availability: "Not Available",
    },
  ];
  console.log("Fetched all the property details::::", properties);
  return (
    <section>
      {properties.length > 0 ? (
        <div className="grid grid-3">
          {properties.map((property) => (
            <PropertiesPage key={property.id} property={property} />
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default PropertiesPage;
*/
