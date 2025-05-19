"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputDesign.module.css";

const SignUpForm = () => {
  const navigate = useNavigate(); // For redirection
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name, // Send username as name
          email,
          passwordHash: password, // Backend expects passwordHash
        }),
      });

      if (response.ok) {
        alert("Регистрация прошла успешно! Пожалуйста, войдите в аккаунт.");
        navigate("/login"); // Redirect to login page
      } else {
        const data = await response.json();
        setError(data.message || "Не удалось зарегистрироваться.");
      }
    } catch (err) {
      console.error("Ошибка во время регистрации:", err);
      setError("Произошла ошибка во время регистрации.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit}>

        {error && <p className={styles.error}>{error}</p>} {/* Error message */}

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.inputLabel}>Ваше имя</label>
          <input
              id="name"
              type="text"
              placeholder="Введите ваше имя"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Электронная почта</label>
          <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Пароль</label>
          <div className={styles.passwordContainer}>
            <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              <svg
                  className={styles.passwordIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
  );
};

export default SignUpForm;

// import React, { useState } from "react";
// import styles from "./InputDesign.module.css";
//
// const SignUpForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({ name, email, password });
//   };
//
//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <div className={styles.formGroup}>
//         <label htmlFor="name" className={styles.inputLabel}>
//           Your Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           placeholder="Enter your name"
//           className={styles.input}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//
//       <div className={styles.formGroup}>
//         <label htmlFor="email" className={styles.inputLabel}>
//           Email Address
//         </label>
//         <input
//           id="email"
//           type="email"
//           placeholder="your.email@example.com"
//           className={styles.input}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//
//       <div className={styles.formGroup}>
//         <label htmlFor="password" className={styles.inputLabel}>
//           Password
//         </label>
//         <div className={styles.passwordContainer}>
//           <input
//             id="password"
//             type={showPassword ? "text" : "password"}
//             className={styles.input}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             className={styles.passwordToggle}
//             onClick={() => setShowPassword(!showPassword)}
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             <svg
//               className={styles.passwordIcon}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//
//       <button type="submit" className={styles.submitButton}>
//         Sign Up
//       </button>
//     </form>
//   );
// };
//
// export default SignUpForm;
