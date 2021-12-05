import React from "react";

const Repo=({repo})=>{
    return(
        <div className="card mt-2">
            <div className="card-header">
                <h3 className="h6">{repo.name}</h3>
            </div>
            <div className="card-body">
                <p>{repo.description}</p>
            </div>
            <div className="card-footer">
                <p className="text-success">* {repo.language}</p>
            </div>
        </div>
    )
}
export default Repo;