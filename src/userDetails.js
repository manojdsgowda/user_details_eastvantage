import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";

const baseURL = "https://randomuser.me/api";

export default function UserDetails() {
  const [userDetails, setUserDetails] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    await axios.get(baseURL).then((response) => {
      setUserDetails(response.data.results[0]);
      localStorage.setItem("userDetails", userDetails);
      let fullName = Object.values(response.data.results[0].name).join(" ");
      let email = response.data.results[0].email;
      //setPost(response.data);
      setFullName(fullName);
      setEmail(email);
      //console.log(response.data.results[0].email);
    });
  };

  //if (!post) return null;

  return (
    <div>
      <h1>{fullName}</h1>
      <p>{email}</p>
      <Button
        variant="outlined"
        startIcon={<RefreshIcon />}
        onClick={fetchUserDetails}
      >
        Refresh
      </Button>
    </div>
  );
}
