import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "sanity:client";
import type { SanityFile } from "./types";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder?.image(source);
}

export function getFileUrl(source: SanityFile) {
  if (!source) return null;

  return source?.asset?.url;
}
