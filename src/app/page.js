"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLoginChange = () => {
    return setLogin(!login);
  };

  const handleSignInClick = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("You need to enter the username and password first");
      return;
    }

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data.token));
        router.replace("/products", { path: "products" });
      } else {
        alert("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.log("Login error:", error.message);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>please sign in to access market.</p>
            <input
              onChange={(event) => setUsername(event.target.value)}
              className={styles.input}
              placeholder="username"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button
              className={styles.button}
              type="button"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
              type="button"
            >
              Not Registered? sign up
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
              type="button"
            >
              Already Registered? sign in
            </button>
          </>
        )}
      </form>
    </main>
  );
}
