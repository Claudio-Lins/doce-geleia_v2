import { InstagramPost } from "@/@types/InstagramPosts";


export async function getInstagramPosts(): Promise<InstagramPost> {
  const response = await fetch(
    `https://docegeleia-6xix4sbb6-claudio-lins.vercel.app/api/hero/getAllHeroGallery`
  );
  const istagarmPost = await response.json();
  return istagarmPost.data as InstagramPost;
}