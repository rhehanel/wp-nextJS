import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Project {
            id
            title
            blocks
            seo {
              title
              metaDesc
            }
            projectInfo {
              nonResidential
              projectStartedYear
              residential
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
          ... on Post {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  console.log("data ", data);
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    props: {
      seo: data.nodeByUri.seo,
      title: data.nodeByUri.title,
      projectInfo: data.nodeByUri.projectInfo || null,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      blocks,
    },
  };
};