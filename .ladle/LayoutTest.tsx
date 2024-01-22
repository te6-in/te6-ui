import { Home, Search, UserCircle2 } from "lucide-react";

export const items = [
  { text: "Home", href: "/", icon: Home },
  { text: "Discover", href: "/discover", icon: Search },
  { text: "Profile", href: "/profile", icon: UserCircle2 },
];

export const gridCols = "grid-cols-3";

export function LayoutTestComponent() {
  return (
    <div className="flex flex-col gap-3 p-4 text-base-700 dark:text-base-700">
      <div className="ml-2">Test 1</div>
      <img
        src="https://source.unsplash.com/random"
        alt="Random image"
        className="rounded-xl"
      />
      <div className="ml-2">Test 2</div>
      <img
        src="https://source.unsplash.com/random"
        alt="Random image"
        className="rounded-xl"
      />
      <div className="ml-2">Test 3</div>
      <img
        src="https://source.unsplash.com/random"
        alt="Random image"
        className="rounded-xl"
      />
    </div>
  );
}
