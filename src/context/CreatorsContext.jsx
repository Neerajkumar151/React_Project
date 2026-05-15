import React, { createContext, useContext, useState, useEffect } from "react";
import { formatNumber } from "../utils/format";

export const CreatorsContext = createContext();

export function useCreatorsContext() {
  return useContext(CreatorsContext);
}

export function CreatorsProvider({ children }) {
  const [creators, setCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_API_URL;
        // console.log(url, 56789);
        // if (!url) {
        //   throw new Error("API URL not configured in` .env file.");
        // }

        const response = await fetch(`${url}/api/v1/profiles`);
        if (!response.ok) {
          throw new Error(`Failed to fetch creators: ${response.status}`);
        }

        const data = await response.json();

        // Handle both raw array and object { data: [] } structures
        const rawArray = Array.isArray(data) ? data : data.data || [];

        // Filter out incomplete profiles and limit to 20
        const validArray = rawArray.filter(
          (item) => item.full_name && item.avatar_url,
        );

        const mappedCreators = validArray.slice(0, 20).map((item, index) => ({
          id: item.id || `fallback-id-${index}`,
          name: item.full_name,
          handle: item.username ? `@${item.username}` : "@user",
          avatar: item.avatar_url,
          followers: formatNumber(item.followers_count || 0),
          followersCount: item.followers_count || 0,
          reactions: formatNumber(item.likes_count || 0),

          // Inject default frontend fields that the API doesn't provide
          isVerified: index % 3 === 0, // Mock some verified users
          isOnline: index % 2 === 0, // Mock some online status
          status: "active",
          category: [
            "Tech",
            "Lifestyle",
            "Fashion",
            "Gaming",
            "Health",
            "Travel",
          ][index % 6],
        }));

        setCreators(mappedCreators);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreators();
  }, []);

  return (
    <CreatorsContext.Provider value={{ creators, isLoading, error }}>
      {children}
    </CreatorsContext.Provider>
  );
}
