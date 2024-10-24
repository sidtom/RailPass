
export const getTrainData = async (url: string, params:string[]) => {
    try {
        const response = await fetch(url); // Make the GET request
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        return data; // Return the data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for further handling
    }
};