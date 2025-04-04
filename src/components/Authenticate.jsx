import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState("");
  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const results = await response.json();
      //   if (response.ok) {
      //     setSuccessMessage(results.message);
      //     setError(null); // Clear previous error
      //   } else {
      //     setError("An error occurred while authenticating.");
      //     setSuccessMessage(null); // Clear previous success message
      //   }
      setSuccessMessage(results.message);
    } catch (error) {
      setError(error);
      //setSuccessMessage(null);
    }
  };

  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
