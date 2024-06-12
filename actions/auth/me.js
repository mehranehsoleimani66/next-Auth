"use server";

import { cookies } from "next/headers";

async function me() {
  const token = cookies().get("token");
  if (!token) {
    return null;
  }
  const res = await fetch("http://localhost:8000/api/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return {
    user: data.user,
  };
}
export { me };
