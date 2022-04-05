import { Switch, Route, Redirect } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import { logout } from '../features/login/authSlice'

// components
import ProfilePage from "../features/profile/ProfilePage";
import EditProfilePage from "../features/profile/EditProfilePage";
import CreateGroupPage from "../features/group/CreateGroupPage";
import GroupPage from "../features/group/GroupPage";
import EditGroupPage from "../features/group/EditGroupPage"
import PersonalFeed from "../features/feed/PersonalFeed";
import FollowingFeed from "../features/feed/FollowingFeed";
import Feed from "../features/feed/Feed";
import Register from "../features/register/Register";
import Login from "../features/login/Login";
import Landing from "../features/landing/Landing";

interface MainRouterProps{
  loggedIn:string
}

const MainRouter= ({loggedIn}: MainRouterProps) => {
  const dispatch = useAppDispatch();

  // Logout now dispatching to store to update state
  const doLogout = () => {
    dispatch(logout());
  }

  // Login is now handled in the Login page component.

  if (loggedIn) {
    return (
      <div id="container-to-remove">
        <Switch>
          <Redirect from="/user_profile/:id" to='/profile/:id'/>
          <Route path="/profile/:id">
            <ProfilePage beep={false} />
          </Route>
          <Route path="/profile">
            <ProfilePage beep={true} />
          </Route>
          <Route path="/editProfile">
            <EditProfilePage />
          </Route>
          <Route path="/createGroup">
            <CreateGroupPage />
          </Route>
          <Route path="/group/:groupName">
            <GroupPage />
          </Route>
          <Route path="/editGroup/:groupName">
            <EditGroupPage />
          </Route>
          <Route path="/logout">
            {doLogout}
          </Route>
          <Route path="/feed/personal">
            <PersonalFeed />
          </Route>
          <Route path="/feed/following">
            <FollowingFeed />
          </Route>
          <Route path="/feed">
            <Feed isGroup={false}/>
          </Route>
        </Switch>
      </div> )
  }
  else {
    return (
      <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div> )
  }
}

export default MainRouter
