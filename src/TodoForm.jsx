import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";

const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);
  //   console.log(todoList);
  return (
    <Box
      sx={{
        // background: "red",
        width: "40vw",
        height: "450px",
        // border: "1px solid black",
        alignSelf: "center",
        padding: "1 rem",
        borderRadius: "10px",
        boxShadow:
          "rgba(9, 9, 218, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          date: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("FirstName is required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("lastName is required"),
          date: Yup.string().required("Date is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        })}
        onSubmit={(values) => {
          setTodoList([...todoList, values]);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography
              variant="h4"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Register
            </Typography>
            <TextField
              required
              label="First Name"
              placeholder="Enter your first name"
              {...formik.getFieldProps("firstName")}
            />

            {formik.touched.firstName && formik.errors.firstName ? (
              <div style={{ color: "red" }}>{formik.errors.firstName}</div>
            ) : null}

            <TextField
              required
              label="Last Name"
              placeholder="Enter your last name"
              {...formik.getFieldProps("lastName")}
            />

            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={{ color: "red" }}>{formik.errors.lastName}</div>
            ) : null}

            <TextField
              required
              label="Email"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}

            <TextField
              required
              label="Date of Birth"
              placeholder="2023/10/02"
              {...formik.getFieldProps("date")}
            />

            {formik.touched.date && formik.errors.date ? (
              <div style={{ color: "red" }}>{formik.errors.date}</div>
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
              Register
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TodoForm;
