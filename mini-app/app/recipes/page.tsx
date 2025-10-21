import { Metadata } from "next";
import { title, url } from "@/lib/metadata";
import VegetableSuggestions from "@/components/vegetable-suggestions";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${title} - Recipes`,
    description: "Find recipes based on the vegetable you have.",
    openGraph: {
      title: `${title} - Recipes`,
      description: "Find recipes based on the vegetable you have.",
      images: [
        {
          url: `${url}/icon.png`,
          width: 1200,
          height: 630,
          alt: "Vegetable Recipe Suggestion App",
        },
      ],
    },
  };
}

export default function RecipesPage() {
  return (
    <main className="flex flex-col gap-4 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">Vegetable Recipe Suggestion</h1>
      <VegetableSuggestions />
    </main>
  );
}
