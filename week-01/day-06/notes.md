# Fee Counter Notes

### 1. State as Single Source of Truth
- JavaScript array `payments` asali sach hai, aur DOM sirf uska aaina hai.
- Kabhi bhi direct screen se `li.remove()` karke hisab mat bigado; hamesha state modify karo aur `render()` chalao.

### 2. Ram Chacha Form Handling
- `e.preventDefault()` se page refresh roko, `Number()` se value clean karo, validation check karo.
- Unique ID ke liye `Date.now()` use karke object array me push karo, fir `render()` call karo aur input empty karo.

### 3. Event Delegation on Delete
- Har ek `<li>` par 100 listener lagane ke bajaye sirf parent `<ul>` par ek single listener lagaya.
- `e.target.closest("li")` se clicked item ki `dataset.id` nikali aur `filter` se array me se delete kar diya.

### 4. Reduce for Total
- Har baar state array par fresh `reduce` chalane se calculate kiya gaya total 100% bug-free rehta hai.
- Plus aur minus ke alag manual counters rakhne ki koi zaroorat nahi padti.

### 5. LocalStorage & Nullish Coalescing (??)
- `localStorage.setItem` me array ko `JSON.stringify` karke save kiya.
- Shuruat me `JSON.parse(...) ?? []` likha taaki first-time visit par `null` aane ke bajaye default empty array mile.