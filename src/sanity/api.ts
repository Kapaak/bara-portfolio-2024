import type { SanityFocus, SanityProject, SanityProjectDetail } from '@domains';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

export async function getAuthorFocuses(): Promise<SanityFocus[]> {
  const focusesQuery = groq`*[_type == "focus"]{name, description,icon{asset->{...,metadata}}, orderRank}|order(orderRank)`;

  const focuses: SanityFocus[] = await sanityClient.fetch(focusesQuery);

  return focuses;
}

export async function getAllProjectsSlugs(): Promise<string[]> {
  const projectsSlugsQuery = groq`*[_type == "project" && visible == true]{"slug":slug.current}`;

  const projectsSlugs: any[] = await sanityClient.fetch(projectsSlugsQuery);

  return projectsSlugs.map(project => project.slug);
}

export async function getProjects(): Promise<SanityProject[]> {
  const projectsQuery = groq`*[_type == "project" && visible == true]{"id":_id,name,description,"slug":slug.current,url,
   tags[]-> {
    name,
    "value":value.current
  },
  image{asset->{...,metadata}},
  tagColor,
  titleColor,
  visible,
  orderRank,
  }|order(orderRank)`;

  const projects: SanityProject[] = await sanityClient.fetch(projectsQuery);

  return projects;
}

export async function getProjectDetailBySlug(
  projectSlug?: string
): Promise<SanityProjectDetail> {
  const projectDetailQuery = groq`*[_type == "projectDetail" && parentProject->slug.current ==$projectSlug]{"id":_id,
  gallery[]{"image":asset->{...,metadata}},
   parentProject-> {
    _id,
    name,description,"slug":slug.current,url,
    year,
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
