# Day 2 - Git branches, merge, conflict, pull request

## 1. Branch kya hai?
Branch = notice ki photocopy. Original (main) safe rehta hai, changes photocopy par karte hain.
Agar photocopy kharab ho gayi, original par koi asar nahi.
```bash
git switch -c add-fees   # nayi branch banao aur us par chale jao
git branch               # saari branches dikhao (* = jahan main khada hoon)
git switch main          # wapas main par jao
git branch -d add-fees   # kaam ho gaya, photocopy phenk do
```
Meri line: ______

## 2. Fast-forward merge vs real merge
- Fast-forward: jab main par koi change nahi hua aur sirf branch aage badhi. Git bas main ko aage khisaka deta hai. Log mein seedhi line, koi merge commit nahi.
  Mera example: add-fees -> `d976b8f Add monthly fees` (seedhi line)
- Real merge: jab main aur branch dono mein alag-alag commits hain. Git dono ko jodta hai aur ek naya "Merge" commit banata hai. Log mein raasta alag hota hai aur phir judta hai.
  Mera example: change-timing -> `c197240 Merge change-timing: office hours 8-3` (fork + join)
```bash
git merge add-fees
git log --oneline --graph --all   # graph dekh kar pata chalta hai kaunsa merge hua
```
Meri line: ______

## 3. Merge conflict - kyun hota hai aur kaise fix karein
Kyun: do branches ne SAME LINE alag-alag badli. Principal ne 9-5 likha, accountant ne 8-3. Git khud decide nahi kar sakta, isliye mujhse poochta hai. Ye error nahi, sawaal hai.
Markers ka matlab:
```
<<<<<<< HEAD
Office hours: 9 am to 5 pm      <- meri current branch (main)
=======
Office hours: 8 am to 3 pm      <- aane wali branch (change-timing)
>>>>>>> change-timing
```
Fix karne ke 4 steps:
1. VS Code mein file kholo
2. Sahi version chuno (Accept Current / Accept Incoming / Both)
3. <<< === >>> wali lines hatao, Ctrl + S
4. `git add school.md` aur `git commit -m "Merge ..."`
Prompt `(main|MERGING)` dikhaye to samjho merge abhi adhoora hai.
Meri line: ______

## 4. Pull request (PR)
PR = apna kaam MD ki table par approval ke liye rakhna. Main seedha main mein merge nahi karta.
Kyun: koi doosra (senior) code check karta hai, galti pehle pakdi jaati hai, main hamesha working rehta hai.
Flow:
```bash
git switch -c add-principal
git commit -am "Add principal name"
git push -u origin add-principal     # branch GitHub par bhejo
# GitHub: Compare & pull request -> Create -> Files changed dekho -> Merge -> Delete branch
git switch main
git pull                             # approved change laptop par lao
git branch -d add-principal
```
Mera PR: #1 "Add principal name" -> merged (fefbeac)
Meri line: ______

## 5. Aaj ki galtiyan aur seekh
1. Branch ka naam galat likha (`chnage-timing`) -> branch banane ke baad `git branch` se spelling check karo.
2. File kholi par edit nahi ki, `git status` ne "working tree clean" bola -> commit se pehle hamesha `git status` / `git diff`. Tab par dot = unsaved. Auto Save on kiya.
3. LeetCode AI se copy kiya, samajh nahi aaya -> pehle khud try, atke to mentor se hint. Example pehle padho, paragraph baad mein.
4. GitHub website par edit kiya, phir laptop se push reject hua (fetch first) -> pehle `git pull`, phir `git push`.
5. Commit message mein typo ("conflicy") -> Enter dabane se pehle message padho.
Useful shortcut: Ctrl + Shift + K = VS Code mein poori line delete.

## 6. LeetCode
### 1480 Running Sum
Idea: fees ka running total. Total 0 se shuru, har number jodo, har baar total ko result mein push karo.
Dry run: [1,2,3,4] -> total 1,3,6,10 -> return [1,3,6,10]

### 1672 Richest Customer Wealth
Idea: har customer ke accounts jodo (har customer ke liye calculator 0 se shuru), sabse bada total sticky note par rakho.
Dry run: [[1,5],[7,3],[3,5]]
- customer 1: 1+5 = 6 -> richest = 6
- customer 2: 7+3 = 10 -> richest = 10
- customer 3: 3+5 = 8 -> 8 < 10, richest 10 hi rahega
- return 10
Yaad rakho: `let currentWealth = 0` outer loop ke ANDAR, warna total aage judta rahega (3, 15 wala bug).
