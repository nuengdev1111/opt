"use client";
import * as React from "react";
import styles from "./breadcrumb.module.scss";
import { Container, Breadcrumbs, Link, Typography } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomizedBreadcrumbs({ menu }) {
  return (
    <div className={styles.bg} role="presentation" onClick={handleClick}>
      <Container maxWidth="lg">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            "& ol": {
              justifyContent: "right"
            },
          }}
        >
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>

          {menu.map(({ name, rounte, status }) => {
            return (
              <div key={name}>
                {status !== "active" ? (
                  <Link underline="hover" color="inherit" href={rounte}>
                    {name}
                  </Link>
                ) : (
                  <Typography color="text.primary">{name}</Typography>
                )}
              </div>
            );
          })}
        </Breadcrumbs>
      </Container>
    </div>
  );
}
