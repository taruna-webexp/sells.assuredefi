"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Box, Typography, Container } from "@mui/material";
import FormInput from "@/components/share/form/FormInput";
import { registerValdation } from "@/components/share/validation/registerValdation";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValdation),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    alert("Register Successful");

    // Make API request if needed
    // const res = await fetch("/api/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // const response = await res.json();
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark-purple-bg login-container">
      <Container component="main" maxWidth="xs">
        <Box
          className="gradient-bg-sharp-login mb-6"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            padding: 4,
            borderRadius: "8px",
            boxShadow: 3,
          }}
        >
          <Image
            src="/assets/logo-a.webp"
            width={170}
            height={80}
            className="!mb-6"
            alt="assuredefi-logo"
            priority
          />
          <Box
            className="theme-border-light gradient-bg-sharp-login"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              padding: 4,
              borderRadius: "8px",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              className="theme-color"
            >
              Sign Up a New User
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form-login gap-2"
            >
              {/* Email Field */}
              <FormInput
                control={control}
                name="email"
                type="email"
                placeholder=""
                errors={errors}
                className="form-login-input !mt-6 !mb-4"
                label="Email"
                variant="outlined"
              />

              {/* Password Field */}
              <FormInput
                className="form-login-input !mb-4"
                label="Password"
                name="password"
                variant="outlined"
                control={control}
                placeholder=""
                errors={errors}
                type="password"
              />

              <FormInput
                className="form-login-input !mb-4"
                label="Confirm Password"
                name="confirmPassword"
                variant="outlined"
                control={control}
                placeholder=""
                errors={errors}
                type="password"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Sign Up
              </Button>
            </form>

            {/* Footer */}
            <Box mt={2} className="text-center">
              <Typography variant="body2">
                Allready have an account?{" "}
                <a href="/auth/login" className="theme-color hover:underline">
                  Log In
                </a>
              </Typography>
            </Box>
          </Box>{" "}
        </Box>
      </Container>
    </div>
  );
}
