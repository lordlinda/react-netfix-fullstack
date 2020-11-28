import React from "react";
import Header from "../components/header";
import Profiles from "../components/profiles";

import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
function SelectProfileContainer({ user, setProfile }) {
  return (
    <div>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </div>
  );
}

export default SelectProfileContainer;
