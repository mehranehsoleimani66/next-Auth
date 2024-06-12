"use server";
async function register(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  if (name === "" || password === "" || email === "") {
    return { error: "name , email,password is required" };
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
  const res = await fetch("http://127.0.0.1:8000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      c_password: confirmPassword,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    return { success: "باموفقیت ثبت نام شدید" };
  } else {
    return {
      error: errorHandler(data),
    };
  }
}
export { register };
