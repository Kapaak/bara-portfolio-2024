import groq from "groq";
import { sanityClient } from "sanity:client";

type SanityProject = any; //TODO: generate from SANITY schema!

export async function getProjects(): Promise<SanityProject[]> {
  const query = groq`*[_type == "project"]{"id":_id,name,description,"slug":slug.current,url,
   tags[]-> {
    _id,
    name,
    "value":value.current
  },
  image{asset->{...,metadata}},
  "imageAlt":image.alt,
  orderRank,
  }|order(orderRank)`;

  const projects: SanityProject[] = await sanityClient.fetch(query);

  return projects;
}
