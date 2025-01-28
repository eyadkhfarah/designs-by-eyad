'use client';

import { useEffect, useState } from 'react';

interface PinterestPin {
  id: string;
  title?: string;
  image?: {
    original: {
      url: string;
    };
  };
}

export default function PinterestPins() {
  const [pins, setPins] = useState<PinterestPin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const response = await fetch('/api/pins');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPins(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPins();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(pins);

  return (
    <></>
  );
}