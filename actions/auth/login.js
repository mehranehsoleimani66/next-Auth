"use server";
import { cookies } from "next/headers";
async function loggedIn(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (email === "" || password === "") {
    return {
      error: "email and password are required",
    };
  }
  function errorHandler(data) {
    const errors = [];
    Object.keys(data).map((key) => {
      data[key].map((error) => {
        errors.push(error);
      });
    });
    return errors.join();
  }
  const res = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    cookies().set({
      name: "token",
      value: data.token,
      httpOnly: true,
    });
    return {
      success: "logged in is successful",
      user: data.user,
    };
  } else {
    return {
      error: errorHandler(data),
    };
  }
}
export { loggedIn };
