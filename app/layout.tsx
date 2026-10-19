import type {Metadata} from "next";
import { Lexend_Deca } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./global.css"
import {siteConfig} from "@/lib/seo";

const lexendDeca = Lexend_Deca({
    variable: "--font-lexend-deca",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | Instant Collaboration for remote team`,
        template: `%s | ${siteConfig.name}`,
    },
    icons: {
        icon: "/main-assets/Logo.png",
        apple: "/main-assets/Logo.png"
    },
    description: siteConfig.description,
    alternates: { canonical: '/'},
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [{url: siteConfig.ogImage, width: 138, height: 52, alt: `${siteConfig.name} preview`}]
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${lexendDeca.variable}`}>
            <body>
                {children}
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!}/>
            </body>
        </html>
    );
}
