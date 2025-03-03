import { createClient, OAuthStrategy } from "@wix/sdk";
//If you’re retrieving Blog content:
import { posts } from "@wix/blog";
//If you’re retrieving CMS content:
import { items } from "@wix/data";

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
  modules: { posts, items },
});

export async function getRichContent() {
  const queryResults = await wixClient.posts
    .queryPosts({ fieldsets: ["RICH_CONTENT"] })
    .find();
  return queryResults.items[0].richContent;
}
