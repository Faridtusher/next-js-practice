const getUserDetails = async (id) => {
   const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

   return result.json();
};

export default getUserDetails;