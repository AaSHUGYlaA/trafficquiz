import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputDesign.module.css"; // Assuming this contains modern styling

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify({ username }));

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }

        navigate("/dashboard"); // ✅ Redirect after login
      } else {
        const errorText = await response.text();
        setError(errorText || "Неверное имя пользователя или пароль.");
      }
    } catch (err) {
      setError("Сетевая ошибка. Пожалуйста, попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <section className={styles.loginSection}>
        <h1 className={styles.welcomeTitle}>С Новым Визитом !</h1>

        <p className={styles.signupText}>
          Нет аккаунта ? {" "}
          <span className={styles.signupLink} onClick={() => navigate("/signup")}>
          Зарегистрироваться
        </span>
        </p>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.inputLabel}>
              Имя пользователя
            </label>
            <div className={styles.inputContainer}>
              <input
                  id="username"
                  type="text"
                  placeholder="Ferrari"
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.inputLabel}>
              Пароль
            </label>
            <div className={styles.inputContainer}>
              <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={styles.passwordInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.rememberForgotContainer}>
            <label className={styles.rememberMe}>
              <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
              />
              Запомнить меня
            </label>
            <span className={styles.forgotPassword}>Забыли пароль?</span>
          </div>

          <button type="submit" className={styles.signInButton} disabled={loading}>
            {loading ? "Вход..." : "Вход"}
          </button>
        </form>
      </section>
  );
};

export default LoginForm;


// import React, { useState } from "react";
// import styles from "./InputDesign.module.css";
//
// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log({ username, password, rememberMe });
//   };
//
//   return (
//     <section className={styles.loginSection}>
//       <h1 className={styles.welcomeTitle}>WELCOME BACK!</h1>
//
//       <div className={styles.signupText}>
//         <span>Don't have an account, </span>
//         <span>Sign up</span>
//       </div>
//
//       <form onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="username" className={styles.inputLabel}>
//             Username
//           </label>
//           <div className={styles.inputContainer}>
//             <input
//               id="username"
//               type="text"
//               placeholder="deniel123@gmail.com"
//               className={styles.input}
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//         </div>
//
//         <div className={styles.inputGroup}>
//           <label htmlFor="password" className={styles.inputLabel}>
//             Password
//           </label>
//           <div className={styles.inputContainer}>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               className={styles.passwordInput}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               className={styles.eyeButton}
//               onClick={togglePasswordVisibility}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//                 <path
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//
//         <div className={styles.rememberForgotContainer}>
//           <div className={styles.rememberMeContainer}>
//             <input
//               type="checkbox"
//               id="rememberMe"
//               className={styles.checkbox}
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//             />
//             <label htmlFor="rememberMe" className={styles.rememberMeText}>
//               Remember me
//             </label>
//           </div>
//           <button type="button" className={styles.forgotPasswordButton}>
//             Forget password?
//           </button>
//         </div>
//
//         <button type="submit" className={styles.signInButton}>
//           Sign In
//         </button>
//       </form>
//     </section>
//   );
// };
//
// export default LoginForm;
