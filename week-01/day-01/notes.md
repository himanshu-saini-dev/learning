# Day 1: Internet basics, HTTP and terminal

## 1. What happens when I open a website
1. DNS lookup: Finds the cafe's exact address using its name (domain name to IP address)
2. Connect: Customer walks into the cafe (HTTPS means secure and encrypted connection)
3. Request: the browser sends the customer's order via waiter (HTTP)
4. Response: the server sends back the plate with food/web pages with a status code like 200 OK
5. More requests: Asking the waiter for extra items like napkins, water, or dessert (images, CSS, JS)

## 2. HTTP methods (with School ERP examples)
- **GET**: Fetch/view data . Example: View student report card / attendance
- **POST**: Add new data. Example: Register/admit a new student
- **PUT**: Replace complete data. Example: Update full student profile record
- **PATCH**: Update only a small part. Example: Change student phone number
- **DELETE**: Remove data. Example: Delete a student record

## 3. Status codes
- **401**: not logged in
- **403**: logged in but not allowed
- **4xx**: client's mistake. **5xx**: server's mistake

## 4. My Postman results
- A. GET /users/1 → 200 OK, because user exists and was successfully fetched
- B. GET /users/9999 → 404 Not Found, because because user does not exist in the database
- C. POST /posts → 201 Created, because the new post was successfully created and saved
- D. DELETE /posts/1 → 200 OK, because the post was successfully deleted

## 5. Terminal file commands
- **touch**: creates a new empty file
- **cp**: copies the file (after cp there are 2 files)
- **mv**: moves a file AND renames the file (after mv there is 1 file)

## 6. What still confuses me
- Nothing