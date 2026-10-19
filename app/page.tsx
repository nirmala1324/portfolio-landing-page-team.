import {siteConfig} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export default function Home() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteConfig.url}/#org`,
                name: siteConfig.name,
                url: siteConfig.url,
                logo: `${siteConfig.url}/logo.png`,
                sameAs: Object.values(siteConfig.social)
            },
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: { "@id": `${siteConfig.url}/#org`}
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Pertanyaan yang sering ditanyakan?",
                        acceptedAnswer: { "@type": "Answer", text: "Jawaban singkat dan langsung."}
                    }
                ]
            }
        ]
    }

    return (
        <main>
            <JsonLd data={schema}/>
            {"This is home with schema attached"}
        </main>
    );
}
