import React from "react";
import useUser from "../hooks/use-user";
import type { User } from "../models/user";

export default function UserNewForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { createUser, userRequestStatus } = useUser();

  async function handleSubmit(e: React.FormEvent) {
    if (!formRef.current) return;

    e.preventDefault();

    const data = new FormData(formRef.current);

    const payload = {
      id: data.get("id"),
      name: data.get("name"),
    };

    await createUser(payload as User);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input name="id" placeholder="Username" type="text" required />
      </div>
      <div>
        <input name="name" placeholder="Name" type="text" required />
      </div>
      <div>
        <button type="submit">
          {userRequestStatus === "saving" ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
