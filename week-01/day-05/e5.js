// Function jo server se user ki detail mangwata hai
async function getUser(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("User not found");
    }

    const data = await res.json();

    console.log(`Name: ${data.name} | Email: ${data.email} | City: ${data.address.city}`);

  } catch (error) {
   
    console.log(`Oops! Error for ID ${id}: ${error.message}`);
  }
}

// Test chala ke dekhte hain
getUser(1);
getUser(5);
getUser(999); 