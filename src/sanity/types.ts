import { type SanityImageWithAssetStub } from "@sanity/image-url/lib/types/types";

export type SanityImage = SanityImageWithAssetStub & {
  asset: {
    metadata: {
      lqip: string;
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
};

export type SanityFile = SanityImageWithAssetStub;
