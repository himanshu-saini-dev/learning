## Scope (var vs let) & "not defined":

-- var function-scoped hota hai jabki let block {} tak seemit rehta hai. Block ke bahar let ko dhoondhne par JS use pehchan nahi pata aur ReferenceError: not defined fekta hai.

## Hoisting/TDZ & "before initialization":

-- let hoist toh hota hai par declare hone tak Temporal Dead Zone (TDZ) me locked rehta hai. Us lock ke dauran access karne par JS bolta hai -- ReferenceError: Cannot access before initialization.

## Closure = Private Cash Box:

-- Outer function ke variables ko inner function yaad rakhta hai aur bahar se direct access block kar deta hai. Isse data tamper-proof rehta hai aur bina variable leak kiye safe updates milte hain.

## E3 Loop (var vs let):

-- var pure loop ke liye ek hi shared memory use karta hai, isliye timer chalne tak wo aakhiri value 3 ban chuka hota hai.

-- let har iteration par ek brand-new variable create karta hai, jisse har callback apni specific round ki value lock kar leta hai.