import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdertisementList from "../pages/JobAdertisementList";
import { Route, Routes } from "react-router-dom";
import JobSeekerList from "../pages/JobSeekerList";
import SideMenu from "./SideMenu.jsx";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route
                exact
                path="/jobadvertisements"
                element={<JobAdertisementList />}
              />
              <Route
                exact
                path="/jobseekers"
                element={<JobSeekerList />}
              />
              <Route
                exact
                path="/jobAdvertisement/add"
                element={<JobAdvertisementAdd />}
              />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
