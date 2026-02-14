"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <button
        onClick={() => router.push("/properties")}
        className="px-4 py-2 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-500 transition duration-300 cursor-pointer"
      >
        ← Back
      </button>
    </div>
  );
}
