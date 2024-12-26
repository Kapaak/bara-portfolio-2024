//This code fixes import { sanityClient } from "sanity:client";

declare module "sanity:client" {
  export const sanityClient: import("@sanity/client").SanityClient;
}
