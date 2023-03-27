import axios from "axios";
  //An async function was created with a parameter defined as 'id'.
async function getData(id) {
  //The user and post data were fetched using axios with the use of an ID
  const { data:user } = await axios ( "https://jsonplaceholder.typicode.com/users/" + id );

  const { data:post } = await axios ( "https://jsonplaceholder.typicode.com/posts/" + id );
   
  return { user,post }
}
  
export default getData;