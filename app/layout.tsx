import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lane Portugal — A chave para o seu refúgio exclusivo",
  description:
    "Lane Exclusive Real Estate, Cascais. Design study of the Path A pitch. Not affiliated.",
};

const boot = `(function(){try{var l=localStorage.getItem('lane-locale');var t=localStorage.getItem('lane-theme');if(l==='en'||l==='pt')document.documentElement.dataset.locale=l;if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var hash=location.hash&&location.hash.length>1;var seen=sessionStorage.getItem('lane-aperture-seen');var play=!reduce&&!hash&&seen!=='1';document.documentElement.dataset.aperture=play?'play':'skip';if(play)sessionStorage.setItem('lane-aperture-seen','1');var needs=(l&&l!=='pt')||(t&&t!=='light');if(!needs)document.documentElement.dataset.ready='1';}catch(e){document.documentElement.dataset.aperture='skip';document.documentElement.dataset.ready='1';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/media/hero.jpg" />
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <noscript>
          <style>{`body{opacity:1 !important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
