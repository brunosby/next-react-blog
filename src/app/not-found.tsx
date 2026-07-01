import ErrorMessage from "@/components/ErrorMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você está tentando acessar não existe.",
};

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada"
      contentTitle="404"
      content="Erro 404 - A página que você está tentando acessar não existe."
    />
  );
}
