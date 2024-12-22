import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { data } from "../data/index";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = data.metadata.title,
  description = data.metadata.description,
  image = data.metadata.thumbnail,
  icons = data.metadata.icon,
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(data.metadata.url),
    themeColor: "#FFFFF0",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
