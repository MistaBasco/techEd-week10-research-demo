import { fonts } from "./fonts";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata = {
  title: "Chakra-Ui Demo",
  description: "Made by MO and JL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
