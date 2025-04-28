// api.ts
export async function fetchEvents() {
  try {
    const res = await fetch(
      "https://tasteful-nest-b80876a7c8.strapiapp.com/api/blogs?populate=*"
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error response:", errorData);
      throw new Error(errorData.error?.message || "Failed to fetch blogs");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
