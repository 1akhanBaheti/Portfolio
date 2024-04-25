import { Metadata } from "next";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  img?: string;
};

export function getMetaData(props: Props): Metadata {
  const { title, description, img, url } = props;

  return {
    metadataBase: new URL("https://preview.lakhan.xyz/"),
    title: title ?? "Lakhan Baheti | Software Developer",
    alternates: {
      canonical: url ?? "/",
    },
    keywords: keywords,
    description: description ?? "",
    openGraph: {
      title: title ?? "Lakhan Baheti | Software Developer",
      description: description || "Explore Lakhan Baheti's software development portfolio.",
      images: [
        {
          url: img || "/og-image.png",
          alt: "Explore Lakhan Baheti's software development portfolio.",
          type: "",
        },
      ],
      type: "website",
    },
    twitter: {
      title: title || "Lakhan Baheti | Software Developer",
      site: "@lakhanbaheti4",
      card: "summary_large_image",
      description: description || "Explore Lakhan Baheti's software development portfolio.",
      images: [
        {
          url: img || "/og-image.png",
          alt: "Lakhan Baheti | Software Developer",
        },
      ],
    },
  };
}

const keywords = [
  "Lakhan Baheti",
  "Lakhan Baheti Portfolio",
  "Lakhan Baheti Resume",
  "Lakhan Baheti Projects",
  "Lakhan Baheti Skills",
  "Lakhan Baheti Contact",
  "Software Developer",
  "Full Stack Developer",
  "React Developer",
  "Flutter Developer",
  "Plane",
  "SSIPMT",
  "Raipur",
  "India",
  "Computer Science",
  "Undergraduate",
  "Student",
  "B.Tech",
  "Web Developer",
  "Mobile Developer",
  "App Developer",
  "Technologies",
  "Product",
];
