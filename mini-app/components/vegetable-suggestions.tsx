"use client";

import { useState } from "react";

const recipeMap: Record<string, string[]> = {
  carrot: [
    "Carrot Soup",
    "Roasted Carrot Salad",
    "Carrot Cake",
  ],
  broccoli: [
    "Broccoli Stir Fry",
    "Broccoli Cheddar Soup",
    "Broccoli Quinoa Salad",
  ],
  tomato: [
    "Tomato Basil Pasta",
    "Tomato Soup",
    "Caprese Salad",
  ],
  potato: [
    "Mashed Potatoes",
    "Roasted Potatoes",
    "Potato Salad",
  ],
  spinach: [
    "Spinach Lasagna",
    "Spinach Salad",
    "Spinach Smoothie",
  ],
};

export default function VegetableSuggestions() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    setInput(value);
    if (value === "") {
      setSuggestions([]);
      return;
    }
    const matches = Object.keys(recipeMap).filter((veg) =>
      veg.startsWith(value)
    );
    if (matches.length === 0) {
      setSuggestions([]);
      return;
    }
    const veg = matches[0];
    setSuggestions(recipeMap[veg]);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <input
        type="text"
        placeholder="Enter a vegetable (e.g., carrot)"
        value={input}
        onChange={handleChange}
        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {suggestions.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Suggested Recipes:</h2>
          <ul className="list-disc list-inside">
            {suggestions.map((recipe, idx) => (
              <li key={idx}>{recipe}</li>
            ))}
          </ul>
        </div>
      )}
      {input && suggestions.length === 0 && (
        <p className="text-muted-foreground">No recipes found for "{input}".</p>
      )}
    </div>
  );
}
