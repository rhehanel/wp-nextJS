import { gql } from "@apollo/client";
import client from "client";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
        projects {
          nodes {
            uri
          }
        }
        posts {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.projects.nodes, ...data.posts.nodes]
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: decodeURI(page.uri).substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking",
  };
};