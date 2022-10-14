import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import Spinner from "../shared/Spinner";
import UserItem from "./UserItem";

export default function UserResults() {
    const {users,loading} = useContext(GitHubContext);

    if(loading){
        return <Spinner/>
    }
    return (
        <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols:2">
            {users.map((user)=>(<UserItem key={user.id} user={user}/>))}
        </div>
    )
}
