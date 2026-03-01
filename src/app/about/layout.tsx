export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Aqui vem o layout da about</h1>
      {children}
    </>
  );
}
