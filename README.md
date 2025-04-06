---

# 🔢 React Calculator

A sleek and intuitive calculator built with **React** and powered by [**mathjs**](https://mathjs.org/). This calculator efficiently evaluates arithmetic expressions with built-in input validation and error handling to deliver a smooth user experience.

---

## ✨ Features

- **Basic Arithmetic** ➕➖✖️➗  
  Perform addition, subtraction, multiplication, and division with ease.
- **Smart Input Validation** 🔍  
  Prevents invalid consecutive operations (e.g., duplicate operators, multiple decimals).
- **Responsive & Modern UI** 📱💻  
  Clean, minimal design that adapts seamlessly to both mobile and desktop screens.
- **Robust Error Handling** ⚠️  
  Catches and displays errors for invalid expressions, ensuring reliable calculations.
- **Max Length Enforcement** ⏳  
  Limits the equation length to 15 characters to maintain performance and readability.

---

## 🎬 Demo

![image](https://github.com/user-attachments/assets/3bd80766-635b-4405-9688-fedcdb86913e)


---

## 🛠️ Technologies Used

- **React**: For building the interactive user interface.
- **mathjs**: To perform robust and precise mathematical evaluations.
- **CSS**: Custom styling provided in `cal-style.css`.

---

## 🚀 Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/react-calculator.git
   cd react-calculator
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   This command installs all required packages, including React and mathjs.

3. **Start the Development Server:**

   ```bash
   npm start
   ```

   The application will launch in your default browser at [http://localhost:3000](http://localhost:3000).

---

## 📖 Usage

- **Input Numbers & Operations:**  
  Click the on-screen buttons to construct your equation.
- **Clear Entry:**  
  Press the **C** button to clear the current equation.
- **Calculate Result:**  
  Press the **=** button to evaluate the equation. The computed result replaces the current equation.
- **Input Constraints:**  
  The calculator enforces a maximum input length of 15 characters and ensures only valid entries are processed.

---

## 📂 File Structure

```plaintext
react-calculator/
├── public/
│   └── index.html
├── src/
│   ├── Calculator/
│   │   └── Calculator.js       // Main Calculator component
│   ├── App.js                  // Application entry point
│   └── index.js                // Renders App component
├── .gitignore
├── package.json
└── README.md
```

---

## 🔍 Code Overview

### Calculator Component

- **State Management:**  
  Utilizes React’s `useState` hook to manage the current equation, result, and calculator state.
- **Input Checking:**  
  The `checkInput` function ensures consecutive operators and other invalid inputs are corrected or prevented.
- **Output Handling:**  
  Evaluates expressions using mathjs and trims the result to fit the maximum length.
- **Event Handling:**  
  Button interactions trigger updates to the equation, clear the display, or compute the result.

For a closer look at the implementation details, refer to the source code in `src/components/Calculator.js`.

---

## 🤝 Contributing

Contributions are highly welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License].

---

## 🙏 Acknowledgements

- [**React**](https://reactjs.org/) – For its powerful UI capabilities.
- [**mathjs**](https://mathjs.org/) – For providing reliable mathematical computations.

---

Feel free to update any sections to better fit your project's needs. Happy coding!
