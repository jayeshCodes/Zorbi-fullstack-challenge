import { gql, GraphQLClient } from "graphql-request";
import { appConfig } from "../utils/config";

const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      name
      bio
      websiteUrl
    }
  }
`;

type GitHubUser = { name: string; bio: string; websiteUrl: string };
type GetGitHubUserVariables = { login: string };
type GetGitHubUserResponse = { user: GitHubUser };

const githubGqlClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: { Authorization: `Bearer ${appConfig.githubPersonalAccessToken}` },
});

export const githubService = {
  async getUser(username: string) {
    return githubGqlClient.request<GetGitHubUserResponse, GetGitHubUserVariables>(GET_USER, {
      login: username,
    });
  },
};
