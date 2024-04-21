"use client";

import Image from "next/image";
import { InputMask } from "./InputMask";
import { FormEvent } from "react";
import { ButtonSubmit } from "./Button";

export default function Home() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <main className="flex flex-col items-center justify-between p-8">
      <div className="flex items-center">
        <Image
          className="relative "
          src="/logo.svg"
          alt="PetJournal Logo"
          width={155}
          height={32}
          priority
        />
      </div>

      <div className="flex items-center">
        <h2 className="text-2xl font-bold">Inscreva-se</h2>
      </div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <InputMask
          label="Nome"
          mask="text"
          placeholder="Digite seu primeiro nome"
        />
        <InputMask
          label="Sobrenome"
          mask="text"
          placeholder="Digite seu sobrenome"
        />
        <InputMask label="E-mail" mask="email" placeholder="E-mail" />
        <InputMask label="Telefone" mask="fone" placeholder="Telefone" />
        <InputMask label="Senha" mask="password" placeholder="Senha" />
        <InputMask
          label="Confirmar Senha"
          mask="password"
          placeholder="Confirmar senha"
        />
        <InputMask
          mask="radio"
          placeholder="Confirmar senha"
          text="Eu concordo com a política de privacidade"
        />
        <ButtonSubmit text="Continuar" />
      </form>
    </main>
  );
}
