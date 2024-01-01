import '@/app/ui/styles/global.scss';
import { noto_sans_kr } from '@/app/ui/styles/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={noto_sans_kr.className}>{children}</body>
      </html>
    </>
  );
}
