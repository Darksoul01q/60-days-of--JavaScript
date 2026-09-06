// Step 1: Create an async function
async function displayUserProfile() {
  try {
    const url = "https://typicode.com";

    // Step 2: Make the secure connection to the web server
    console.log("Connecting to the server...");
    const response = await fetch(url);

    // Step 3: Collect the streaming data packets and turn them into a JS Object
    const userObj = await response.json();

    // Step 4: Display Data!
    console.log("\n--- Data Successfully Received! ---");
    console.log(`User ID: ${userObj.id}`);
    console.log(`Full Name: ${userObj.name}`);
    console.log(`Email Address: ${userObj.email}`);
    console.log(`City: ${userObj.address.city}`); // Accessing a nested object property!
  } catch (error) {
    // If the server drops or you lose internet, this block catches the failure
    console.log("Could not fetch data:", error);
  }
}

// Execute our function
displayUserProfile();
