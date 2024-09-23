export const getReviews = async () => {
  try {
    const response = await fetch(
      "https://66f1301041537919154fe4dd.mockapi.io/rewiesw"
    );
    const data = await response.json();
    return data;
  } catch (err: any) {
    console.error("error fetching reviews");
  }
};
