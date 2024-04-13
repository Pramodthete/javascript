// Function to simulate fetching user data from an API
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userData = { id: 1, username: 'john_doe' };
            resolve(userData);
        }, 2000);
    });
}

// Async function to fetch user data and log it
async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched:", userData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Call the async function
getUserData();
