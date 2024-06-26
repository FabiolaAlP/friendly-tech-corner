import { wpquery } from "../data/wordpress";
const POSTS = `{
  posts(where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      slug
      title
      author {
        node {
          name
        }
      }
      date
      excerpt
      tags {
        edges {
          node {
            name
          }
        }
      }
      }
    }
  }`;

export async function GET() {
  try {
    const { posts } = await wpquery({ query: POSTS });
    const formattedPosts = posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      author: post.author.node.name,
      date: post.date,
      excerpt: post.excerpt,
      tags: post.tags.edges.map((edge) => edge.node.name),
    }));
    return new Response(JSON.stringify(formattedPosts));
  } catch (error) {
    console.error("Error fetching posts", error);
    return new Response(JSON.stringify({ error: "Error fetching posts" }));
  }
}
