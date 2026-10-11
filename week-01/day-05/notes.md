# Day 05 Notes (Mast aur Simple)

### 1. `this` (4 Rules)
- Default me `this` pure window/global ko bolte hain, aur function ke andar call karne par uske malik (caller) ko point karta hai.
- Lekin `call/apply/bind` se hum zabardasti malik badal sakte hain, aur arrow function ka apna koi malik nahi hota—wo mummy-papa (parent scope) se borrow karta hai.

### 2. Event Loop (The VIP Line)
- Main kaam khatam hone ke baad Event loop pehle microtask (Promise) wali VIP line ko niptata hai.
- Jab VIP line poori khali ho jati hai, tab jakar wo setTimeout jaise normal macrotasks ko mauka deta hai.

### 3. Promise (The Token)
- Fast food counter pe order dene ke baad jo token milta hai, Promise bilkul waisa hi ek wada hai.
- Burger ban gaya toh token 'Resolve' ho gaya, aur aaloo khatam ho gaye toh token 'Reject' ho gaya.

### 4. async / await
- Promise ke `.then().then()` ke lambe jhamelo ko khatam karke code ko seedha-sadha dikhane ka tarika hai.
- `await` ka matlab bas itna hai: "Ruko zara, pehle server se saman aane do, tab aage ki line chalana."

### 5. Promise.all (The 3 Clerks)
- Bank me teen alag-alag babu ko ek sath kaam par laga dena, taaki teeno ka kaam 1 ghante me hi sath nipt jaye.
- Lekin shart yeh hai ki agar unme se ek babu bhi lad pada (reject ho gaya), toh poora transaction cancel ho jata hai.

### 6. fetch + res.ok
- `fetch` server se data mangwata hai, par agar 404 (not found) aa jaye toh wo khud fail nahi manta.
- Isliye hum `res.ok` se khud puchte hain ki "bhai saman sahi-salamath aaya na?", warna khud error fekna padta hai.