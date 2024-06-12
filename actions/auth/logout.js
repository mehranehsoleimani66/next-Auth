"use server";

import { cookies } from "next/headers";

async function logout() {
  const token = cookies().get("token");
  const res = await fetch("http://localhost:8000/api/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  const data = await res.json();
  console.log("222222222", data);
  if (res.ok) {
    cookies().delete("token");
    return {
      success: "you are loggedout",
    };
  } else {
    return {
      error: " failure logout",
    };
  }
}
export { logout };
