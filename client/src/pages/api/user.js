import {request, gql} from 'graphql-request'

const query = gql`
query findUser($username: String!){
    user(login: $username){
      avatarUrl
      id
      name
      username: login
      bio
      websiteUrl
      url
      followers{
        totalCount
      }
      following{
        totalCount
      }
      repos: repositories(
        first:4,
        orderBy: {field:STARGAZERS, direction:DESC}
        ownerAffiliations: OWNER
      ){
        totalCount
        nodes{
          name
          url
          stargazerCount
        }
      }
    }
  }
`

export default async function handler(req, res){
    const {username} = req.query;
    if(!username) return res.status(400).json({message:"username is required"}); //bad request
    
   const result=await request('https://api.github.com/graphql', query, { username }, {authorization: `Bearer ${process.env.TOKEN}`});

   res.send(result);
}