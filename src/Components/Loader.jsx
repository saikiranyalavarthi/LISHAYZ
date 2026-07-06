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
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <h1
        className="text-6xl font-black tracking-[0.3em] animate-pulse text-red-600"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        LISHAYZ
      </h1>
    </div>
  );
}
