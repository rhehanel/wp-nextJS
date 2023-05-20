import { gql } from '@apollo/client';
import client from 'client'

const handler = async(req, res) => {
    try {
        const filters = JSON.parse(req.body);

        let residentialFilter = ``;
        let nonResidentialFilter = ``;

        if(filters.residential) {
            residentialFilter = `
            {
                key: "residential"
                compare: EQUAL_TO
                value: "1"
            },
            `
        }

        if(filters.nonResidential) {
            nonResidentialFilter = `
            {
                key: "non-residential"
                compare: EQUAL_TO
                value: "1"
            },
            `
        }

        const { data } = await client.query({
            query: gql`
                query AllProjectsQuery {
                    projects(where: { 
                        offsetPagination: { size: 10000, offset: ${
                          ((filters.page || 1) - 1) * 3
                        } }
                        metaQuery: {
                            relation: OR
                            metaArray: [
                                ${nonResidentialFilter}
                                ${residentialFilter}
                            ]
                        }
                    }) {
                        pageInfo {
                            offsetPagination {
                                total
                            }
                        }
                        nodes {
                            databaseId
                            title
                            uri
                            featuredImage {
                                node {
                                    uri
                                    sourceUrl
                                }
                            }
                            projectInfo {
                                nonResidential
                                residential
                                projectStartedYear
                            }
                        }
                    }
                }
            `
        });
        // console.log("SERVER SIDE: ", data.projects.nodes);
        return res.status(200).json({
            total: data.projects.pageInfo.offsetPagination.total,
            projects: data.projects.nodes,
        });
    } catch (e){
        console.log("ERROR: ", e)
    }
}

export default handler;