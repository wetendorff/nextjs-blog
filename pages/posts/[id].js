import Head from "next/head";
import DateLocalized from "../../components/DateLocalized";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <DateLocalized dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
