import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { CiSearch } from "react-icons/ci";
const Footer = () => {
  return (
    <Grid
      className="bg-black text-white pt-10 text-center"
      container
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      <Grid item xs={12} md={3} sm={6}>
        <Typography className="pb-5" variant="h6">
          Company
        </Typography>
        <div>
          <Button className="pb-5" variant="h6">
            About
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Blog
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Press
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Jobs
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Partners
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <Typography className="pb-5" variant="h6">
          Solutions
        </Typography>
        <div>
          <Button className="pb-5" variant="h6">
            Marketing
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Anaylatics
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Commerce
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Insights
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Supports
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <Typography className="pb-5" variant="h6">
          Documentation
        </Typography>
        <div>
          <Button className="pb-5" variant="h6">
            Guldes
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Api status
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <Typography className="pb-5" variant="h6">
          Legal
        </Typography>
        <div>
          <Button className="pb-5" variant="h6">
            Claim
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Privacy
          </Button>
        </div>
        <div>
          <Button className="pb-5" variant="h6">
            Terms
          </Button>
          <div className="bg-whit p-3">
            <p className="w-[280px] h-[44px] bg-white rounded-lg border border-[#00A87D] flex gap-3 px-3 justify-center items-center">
              <CiSearch className="w-[24px] h-[24px] text-black opacity-50" />
              <input
                type="text"
                placeholder="Search by name"
                className="capitalize w-full bg-transparent border-none focus:outline-none font-normal text-lg text-black opacity-50"
              />
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
