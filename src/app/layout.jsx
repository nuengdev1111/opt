import { Inter } from "next/font/google";
import ThemeRegistry from "../theme/ThemeRegistry";
import "./globals.scss";

import FooterForm from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "องค์การบริหารส่วนตำบลบางเสาธง",
  description:
    "องค์การบริหารส่วนตำบลบางเสาธง ถ.เทพรัตน กม.26 ตำบลบางเสาธง อำเภอเสาธง จังหวัดสมุทรปราการ 10570",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col justify-between`}
        suppressHydrationWarning
      >
        <ThemeRegistry>
          {children}
          <FooterForm />
        </ThemeRegistry>
      </body>
    </html>
  );
}
