interface WPGraphqlParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphqlParams) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(import.meta.env.FTC_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    console.error(await res.json());
    return {};
  }
  const { data } = await res.json();
  const posts = data?.posts?.nodes ?? [];

  return { posts };
  // return data?.posts?.nodes ?? [];
}
