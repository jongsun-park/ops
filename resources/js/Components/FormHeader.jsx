import React from "react";

export default function FormHeader({ title = "", description = "" }) {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
      {description && <p className="mt-4 text-gray-500">{description}</p>}
    </div>
  );
}
