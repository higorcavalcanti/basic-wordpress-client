export interface PostAuthor {
  id: number;

  name: string;
  description: string;
  picture: string;

  type: string;
  slug: string;
  link: string;
  permalink: string;

  address: string;
  profession: string;

  social_profiles: {
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  }

}
