import type { SanityProject, SanityProjectDetail } from '@types';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

export async function getProjects(): Promise<SanityProject[]> {
  const projectsQuery = groq`*[_type == "project"]{"id":_id,name,description,"slug":slug.current,url,
   tags[]-> {
    name,
    "value":value.current
  },
  image{asset->{...,metadata}},
  tagColor,
  titleColor,
  "imageAlt":image.alt,
  orderRank,
  }|order(orderRank)`;

  const projects: SanityProject[] = await sanityClient.fetch(projectsQuery);

  return projects;
}

export async function getProjectDetailBySlug(
  projectSlug?: string
): Promise<SanityProjectDetail> {
  const projectDetailQuery = groq`*[_type == "projectDetail" && parentProject->slug.current ==$projectSlug]{"id":_id,
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
   sections,
  }[0]`;

  const projectDetail: SanityProjectDetail = await sanityClient.fetch(
    projectDetailQuery,
    {
      projectSlug,
    }
  );

  return projectDetail;
}
