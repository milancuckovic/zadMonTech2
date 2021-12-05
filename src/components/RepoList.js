import React from "react";
import Repo from "./Repo";

const RepoList=({repos})=>{
    const allRepos=repos.map(repo=>{
        return(
            <div className="col-md-4">
                <Repo repo={repo}/>
            </div>
        )
    })
    return(
        <div className="container">
            <h2>Repositories:</h2>
            <div className="row">
                {allRepos}
            </div>
        </div>
    )
}
export default RepoList;