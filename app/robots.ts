import {siteConfig} from "@/lib/seo";

export default function robots() {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: ["GPTBot", "OAI-Searchbot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot",
                "PerplexityBot", "Google-Extended"], allow: "/" },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`
    }
}