import groq from "groq";
import { sanityClient } from "sanity:client";

type SanityProject = any; //TODO: generate from SANITY schema!
type SanityProjectDetail = any; //TODO: generate from SANITY schema!

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

export async function getProjectDetailBySlug(
  projectSlug?: string
): Promise<SanityProjectDetail> {
  const query = groq`*[_type == "projectDetail" && parentProject->slug.current == "${projectSlug}"]{"id":_id,
   parentProject-> {
    _id,
    name,description,"slug":slug.current,url,
    year,
    image{asset->{...,metadata}},
    "imageAlt":image.alt,
    tags[]-> {
    _id,
    name,
    "value":value.current
  },
  },
   usedTechnologies,
   sections,
   gallery[]{asset->{...,metadata}},
  }[0]`;

  const projects: SanityProject[] = await sanityClient.fetch(query);

  return projects;
}
