import ProfileInformation from "./ProfileInformation";
import SearchBar from "../search/SearchBar";
import { useParams } from "react-router";

export default function ProfilePage({beep}: {beep: boolean}) {
  return(
    <>
      <SearchBar />
      <ProfileInformation beep={beep}/>
    </>
  )
}
