import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";

const SignIn = () => {
  const [signinList, setSignInList] = useState([]);
  //   console.log(todoList);
  return (
    <Box
      sx={{
        // background: "red",
        width: "35vw",
        height: "300px",
        // border: "1px solid black",
        alignSelf: "center",
        padding: "1 rem",
        borderRadius: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <Formik
        initialValues={{ firstName: "", lastName: "", password: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First Name is required"),
          lastNameName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Last Name is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        })}
        onSubmit={(values) => {
          setSignInList([...signinList, values]);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography
              variant="h5"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Sign-In
            </Typography>
            <TextField
              required
              label="Username"
              placeholder="_John_Doe"
              {...formik.getFieldProps("userName")}
            />

            {formik.touched.userName && formik.errors.userName ? (
              <div style={{ color: "red" }}>{formik.errors.userName}</div>
            ) : null}

            <TextField
              required
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
            />

            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}

            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginTop: "2rem" }}
            >
              Sign-in
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignIn;
