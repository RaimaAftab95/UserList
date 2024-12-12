import React, { useState, useEffect } from 'react';

function UserList() {
  // Step 1: Define state variables
  const [users, setUsers] = useState([]);  // Store the list of users
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null);  // To track any errors

  // Step 2: Fetch data when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);  // Set the fetched data into state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error.message);  // If error occurs, set the error message
        setLoading(false);
      });
  }, []);  // The empty array [] ensures this effect runs once on mount

  // Step 3: Render UI
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
