# Day 7: Network tab on 3 websites

| Site | Total requests | Main document: method + status | Slowest request (name + time) | Any 3xx or 4xx? | Total size |
|---|---|---|---|---|---|
| news site (https://www.ndtv.com/) | 148 | GET 200 | prebid.js / ads (1.42s) | 302, 304, 403 (blocked ad trackers) | 4.8 MB |
| github.com | 46 | GET 200 | octicons.woff2 (380ms) | None | 1.1 MB |
| my portfolio (https://himanshu-saini-dev.github.io/portfolio/) | 9 | GET 200 | profile.png (120ms) | None (all 200) | 340 KB |

## What I noticed (3 lines, Hinglish OK)

1. News sites par sabse zyada requests ads, analytics aur tracker scripts ki wajah se hoti hain jo page load ko kaafi slow karti hain.
2. Mera khud ka portfolio vanilla aur zero-tracking hone ki wajah se super lightweight hai, jisme single-digit requests aur minimal bundle size lagta hai.
3. GitHub 46 requests par dono ke beech me aata hai, kyunki wahan icons, avatars aur cached scripts load hoti hain par koi faltu ads nahi hote.

## Notes
- DNS = phone contacts: naam se number. `nslookup github.com`
- 2 = done, 3 = go there, 4 = you, 5 = us. 201 = created, 401 = login nahi, 403 = permission nahi
- PUT = poora form replace, PATCH = sirf ek box. POST repeat = duplicate record
- 301 = permanent "go there". http → https, then /portfolio → /portfolio/. `curl -IL` follows the chain