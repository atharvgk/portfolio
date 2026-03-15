import Head from "next/head";

interface SeoProps {
    title: string;
    description: string;
    image?: string;
}

export const Seo = ({ title, description, image = "/opengraph-image" }: SeoProps) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Atharv Katyarmal, Software Engineer, Full Stack Developer, React, Next.js, Node.js, AI, Portfolio, Developer India, ISFCR, Distributed Systems" />
        <meta name="author" content="Atharv Katyarmal" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://atharvkatyarmal.vercel.app/" />
        <meta property="og:site_name" content="Atharv Katyarmal Portfolio" />
        {image && <meta property="og:image" content={image} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}

        {/* Canonical URL for search engines */}
        <link rel="canonical" href="https://atharvkatyarmal.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* JSON-LD Structured Data for Google to recognize Atharv Katyarmal as an Entity */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Atharv Katyarmal",
                    "url": "https://atharvkatyarmal.vercel.app/",
                    "jobTitle": "Software Engineer",
                    "knowsAbout": ["Full Stack Development", "Artificial Intelligence", "Distributed Systems", "Web Development", "Next.js", "React"],
                    "sameAs": [
                        "https://github.com/atharvgk",
                        "https://www.linkedin.com/in/atharv-katyarmal-990304250/",
                        "https://x.com/AtharvKaty46250",
                        "https://leetcode.com/u/atharv_katyarmal/"
                    ]
                })
            }}
        />
    </Head>
);
