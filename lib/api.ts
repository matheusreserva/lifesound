const baseUrl = "https://api.lifesound.site/";

const api = {

  get: async (endpoint: string, headers = {}) => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...headers
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error in GET request:", error);
      throw error;
    }
  },
};

export default api;
