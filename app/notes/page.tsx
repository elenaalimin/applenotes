import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Food Lists",
    openGraph: {
      images: [`/notes/api/og/?title=${encodeURIComponent("Food Lists")}&emoji=${encodeURIComponent("🍽️")}`],
    },
  };
}

export default function Home() {
  // Redirect to the first food list
  redirect("/notes/michelin");
}