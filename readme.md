# Create Express App 🏗️

A simple and fast CLI tool to scaffold a new **Node.js + Express** project in seconds.

## 🎯 Features
👉 Generates a fully functional **Express.js** app  
👉 Includes project structure and dependencies  
👉 Works with `npm` for easy installation  
👉 Zero configuration required  
👉 Preconfigured with **ESLint**, **Jest**, **enhanced-chalk**, **loggem**, and **Express**

---

## 📦 Installation

You can install the package globally using npm:

```sh
npm install -g @jarcher/create-express-app
```

---

## 🚀 Usage

To create a new Express project, simply run:

```sh
@jarcher/create-express-app <project-name>
```

Example:

```sh
@jarcher/create-express-app my-app
```

### 🛠️ What Happens?
- 📂 Creates a new project folder  
- ✅ Sets up a fully working Express.js template with modern tooling  
- 📦 Installs dependencies automatically  

---

## 📌 Next Steps

Once the setup is complete, navigate into your project and start the server:

```sh
cd my-app
npm start
```

Your Express app will be running! 🎉

---

## 🏗️ Project Structure

```plaintext
my-app/
├── config.env
├── eslint.config.js
├── jest.config.mjs
├── nodemon.json
├── package.json
├── server.log
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── logo.png
│   │   ├── not-found.png
│   │   ├── project.png
│   │   └── project.webp
│   └── js/
│       └── script.js
├── src/
│   ├── server.js
│   ├── config/
│   │   ├── rate-limit.config.js
│   │   └── session.config.js
│   ├── controllers/
│   │   ├── controller.js
│   │   └── server.controller.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── model.js
│   ├── repo/
│   │   └── repo.js
│   ├── routes/
│   │   └── routes.js
│   ├── utility/
│   │   └── server.js
│   └── views/
│       ├── error.pug
│       └── page.pug
├── tests/
│   └── test.js
└── README.md
```

---

## ⚙️ Tooling

This template comes preconfigured with:

- **Express** – Fast, minimalist web framework
- **ESLint** – Code linting and consistency
- **Jest** – Testing framework
- **loggem** – Custom logging helper
- **enhanced-chalk** – Improved terminal output styling

---

## ✨ Customization

You can modify the generated **app.js**, **routes**, and **views** to suit your needs.

### 🌍 Change the Port
By default, your app runs on port **3000**. To change it, edit `src/server.js`:

```js
const PORT = process.env.PORT || 5000;
```

---

## 💡 Why Use This?
- Saves **time** setting up an Express app
- Uses **best practices** for project structure
- Works **out of the box** with minimal configuration  
- Includes helpful utilities and ready-to-use examples

---

## 🤝 Contributing

Want to improve this tool? Fork the repo and submit a PR! 🚀

---

## 📝 License

This project is licensed under the **AGPL-3.0**.

---

### Made with ❤️ by [Josh Archer](https://github.com/joshbarcher)