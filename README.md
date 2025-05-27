## 🔐 JWT-Based Stateless Authentication in Node.js (with EJS)

This project demonstrates how to implement **stateless authentication** in a Node.js application using **JSON Web Tokens (JWT)** and **cookies** — without using sessions.
<br></br>
<br></br>
### 🧩 Key Features

- Stateless authentication using JWT
- Cookie storage for JWT tokens
- Secure login mechanism
- EJS-based server-side rendering

---

### 📦 Technologies Used

- Express.js / Node.js
- EJS (`Embedded JavaScript Templates`) ==> For server-side rendering
- JWT (`jsonwebtoken`)
- Cookie Parser (`cookie-parser`)
- dotenv (for managing environment variables)
- Mongoose / MongoDB ( As database )

---

### 🛠️ Implementation Breakdown

#### 1. **User Login & Token Generation**
- When a user logs in successfully, a JWT is created using `jsonwebtoken`:
```js
const payload = { username: user.username };
const token = jwt.sign(payload, process.env.KEY);
```

<br></br>


## 📌 Important Points to Remember

- ✅ Always use `express.json()` middleware to parse JSON request bodies.
- 🔒 Use `.env` to store your **JWT secret key** and other sensitive credentials.
- 🧠 Always define a **payload** with limited, non-sensitive user information when generating JWT tokens.
- 🍪 Use `cookie-parser` middleware to manage cookies in Express apps.
- 🔐 Secure your cookie by setting options like `httpOnly`, `secure`, and `maxAge`.
- ⚠️ Always handle errors and invalid tokens properly to prevent unauthorized access.
- 🔄 Use `jwt.verify()` to decode and verify tokens in protected routes or middleware.
- 🧪 Test your login/signup flow thoroughly to make sure data is stored and tokens are issued correctly.

<br><br>


---

## ❓ Frequently Asked Questions (FAQ)

### 1. 🔐 What is JWT and why do we use it?
JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It is used in authentication to securely transmit user information in a stateless way.

---

### 2. 📦 Why do we use `.env` file?
We use `.env` to store sensitive configuration like secret keys, database URLs, etc., so they're not hard-coded in the source code and can be easily managed and kept private.

---

### 3. 🍪 What is `cookie-parser` used for?
`cookie-parser` is a middleware in Express used to parse cookies attached to the client request object. It helps in reading and managing cookies easily.

---

### 4. 🧠 What is a payload in JWT?
A payload is the part of the token where user information (like `username`, `email`, etc.) is stored. It should contain only non-sensitive data.

---

### 5. 🚫 What happens if someone tampers with the JWT token?
The JWT will fail verification using `jwt.verify()` and access will be denied, ensuring security of protected routes.

---

### 6. 🔄 How do I decode or verify a token?
You can use `jwt.verify(token, secret)` to verify and decode a token. If invalid, it will throw an error.

<br><br>

## 🔗 Useful Websites to Review

- [Mockaroo](https://mockaroo.com) — Generate realistic fake user data for testing and development.
- [JWT.io](https://jwt.io) — A great tool to decode, verify, and debug JWT tokens.
- [jsonwebtoken npm package](https://www.npmjs.com/package/jsonwebtoken) — Official documentation for the `jsonwebtoken` package used to create and verify JWTs in Node.js.




