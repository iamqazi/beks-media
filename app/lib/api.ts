export const fetchEvents = async () => {
  try {
    const res = await fetch("https://api.beksmedia.com/api/blogs?populate=*");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched data:", data); // Debugging API response
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
};
