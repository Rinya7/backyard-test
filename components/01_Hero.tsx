import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto p-6 space-y-4">
        <p className="font-primary">Body (Archivo)</p>
        <p className="font-secondary">Konnect Regular (second-family)</p>
        <p className="font-gilroy-m">Gilroy Medium</p>
        <p className="font-gilroy-sb">Gilroy SemiBold</p>
        <h2 className="text-3xl">
          Заголовок за замовчуванням має бути Gilroy SemiBold
        </h2>
      </div>
    </>
  );
}
