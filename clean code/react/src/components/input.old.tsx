import type { ReactNode } from "react";

interface InputProps {
  label?: string;
  icon?: ReactNode;
  errorMessage?: string;
}

export function Input({ label, icon = null, errorMessage }: InputProps) {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input type="text" />
      {icon}

      {errorMessage ? <span>{errorMessage}</span> : null}
    </div>
  );
}
