"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Box, Typography, Container } from "@mui/material";

export default function Home() {
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    const user = Cookies.get("userDetail"); // Get the cookie value
    if (user) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(user));
        console.log("user", parsedUser);
        setLoginUser(parsedUser?.email);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center dark-purple-bg ">
        <Container component="main" maxWidth="xs">
          <h1 className="theme-color">Assure DeFi - Quote Dashboard</h1>
          <Button
            className="theme-color-bg !text-bold"
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, marginBottom: 4 }}
          >
            Generate New Quote
          </Button>

          <h5>Logged in user = {loginUser ? loginUser : "Not logged in"}</h5>
        </Container>
      </div>
    </>
  );
}
