"use client";
import { loggedIn } from "@/actions/auth/login";
import Button from "@/components/submitButton";
import AuthContext from "@/context/authContext";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
export default function Login() {
  const [state, formAction] = useFormState(loggedIn, {});
  const router = useRouter();
  const { loginContext } = useContext(AuthContext);

  useEffect(() => {
    if (state?.error) {
      toast.error(state?.error);
    } else if (state?.success) {
      toast.success(state?.success);
      loginContext(state?.user);
      router.push("/");
    }
  }, [state]);
  console.log(state, "state");
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <form action={formAction}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
              />
            </div>

            <Button title="login" />
          </form>
        </div>
      </div>
    </div>
  );
}
