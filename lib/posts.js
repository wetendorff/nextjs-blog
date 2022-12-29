import { remark } from "remark";
import html from "remark-html";

export async function getSortedPostsData() {
  const response = await fetch("http://localhost:8000/posts");
  const allPostsData = await response.json();

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const response = await fetch("http://localhost:8000/posts");
  const posts = await response.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

// return post data based on id
export async function getPostData(id) {
  const reponse = await fetch("http://localhost:8000/posts/" + id);
  const post = await reponse.json();

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    content: contentHtml,
    title: post.title,
    date: post.date,
  };
}
