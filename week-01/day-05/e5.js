async function getUserData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    
    const res = await fetch(url);
    
    const data = await res.json();
    
    console.log("Name:", data.name);
    console.log("Email:", data.email);
  } catch (error) {
    console.log("Kuch gadbad ho gayi:", error.message);
  }
}

getUserData();