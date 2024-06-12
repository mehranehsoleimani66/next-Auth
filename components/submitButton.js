"use client";
import { useFormStatus } from "react-dom";

export default function Button({ title }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="btn btn-primary">
      {title}
    </button>
  );
}
