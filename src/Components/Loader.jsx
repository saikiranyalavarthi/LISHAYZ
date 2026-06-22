import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <h1 className="text-6xl font-black text-black tracking-widest animate-pulse">
        LISHAYZ
      </h1>
    </div>
  );
}
