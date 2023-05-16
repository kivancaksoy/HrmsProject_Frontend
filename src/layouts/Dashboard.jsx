import React from 'react'
import JobSeekerList from '../pages/JobSeekerList'
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
        <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            Deneme
          </Grid.Column>
          <Grid.Column width={12}>
            <JobSeekerList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
