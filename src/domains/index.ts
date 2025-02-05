import type {
  BlockContentObject,
  FocusesQueryResult,
  ProjectDetailQueryResult,
  ProjectsQueryResult,
  SanityImageAsset,
} from '../sanity/types';

export type SanityProjectDetail = NonNullable<ProjectDetailQueryResult>;
export type SanityFocus = FocusesQueryResult[0];
export type SanityProject = ProjectsQueryResult[0];
export type SanityImage = SanityImageAsset;
export type SanityBlockContentObject = {
  _key: string;
} & BlockContentObject;