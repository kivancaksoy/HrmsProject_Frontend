import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function SideMenu() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="Job Advertisements"
          as={Link}
          to="/jobadvertisements"
          icon="folder"
        />
        <Menu.Item
          name="Job Seekers"
          as={Link}
          to="/jobseekers"
          icon="folder"
        />
        <Menu.Item
          name="Create Job Advertisement"
          as={Link}
          to="/jobAdvertisement/add"
          icon="folder"
        />
      </Menu>
    </div>
  );
}
