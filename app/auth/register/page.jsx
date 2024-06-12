"use client";
import { register } from "@/actions/auth/register";
import Button from "@/components/submitButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
export default function Register() {
  const [state, formAction] = useFormState(register, {});
  const router = useRouter();
  useEffect(() => {
    if (state?.error) {
      toast(state.error);
    } else if (state?.success) {
      toast(state.success);
      router.push("/auth/login");
    }
  }, [state]);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <form action={formAction}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
            <Button title="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}
