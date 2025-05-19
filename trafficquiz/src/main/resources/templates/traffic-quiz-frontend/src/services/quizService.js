const API_URL = "http://localhost:8080/api/quizzes";

// export const getQuizzes = async () => {
//     try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error("Failed to fetch quizzes");
//         const data = await response.json();
//         console.log("API Response:", data); // ✅ Debugging: Check console log
//         //return data.content; // ✅ Only return `content`
//         return data;
//     } catch (error) {
//         console.error("Fetch error:", error);
//         throw error;
//     }
// };
const getQuizzes = async () => {
    const token = localStorage.getItem("authToken"); // Get the token from localStorage

    // Check if the token exists
    if (!token) {
        throw new Error("No token found. Please log in.");
    }

    const response = await fetch("http://localhost:8080/api/quizzes", {
        headers: {
            "Authorization": `Bearer ${token}`, // Send the token in the Authorization header
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch quizzes");
    }

    return response.json(); // Parse and return the quizzes
};


export const getQuizById = async (id) => {
    const response = await fetch(`http://localhost:8080/api/quizzes/${id}`);
    if (!response.ok) throw new Error("Failed to fetch quiz");
    return await response.json();
};
export const submitAnswer = async (userResponse) => {
    try {
        const response = await fetch("/api/responses/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userResponse),
        });

        if (!response.ok) {
            throw new Error("Failed to submit answer");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error submitting answer:", error);
        throw error;
    }
};
export const fetchQuizzes = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        throw new Error("No authentication token found");
    }

    const response = await fetch("http://localhost:8080/api/quizzes", {
        headers: {
            "Authorization": `Bearer ${token}`, // Attach the JWT token
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch quizzes");
    }

    const data = await response.json();
    return data; // Return the list of quizzes
};




