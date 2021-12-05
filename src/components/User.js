import React from "react";


const User =({userData,stars,repos})=>{
   
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <img src={userData.avatar_url} className="rounded-circle img-thumbnail"></img>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item" title="Followers">
                            <i className="material-icons pr-2" style={{"verticalAlign": "-6px"}}>&#xe8d3;</i>
                            {userData.followers}
                        </li>
                        <li className="list-group-item" title="Following">
                            <i className="material-icons pr-2" style={{"verticalAlign": "-6px"}}>&#xe91f;</i>
                            {userData.following}
                        </li>
                        <li className="list-group-item" title="stars">
                            <i className="material-icons pr-2" style={{"verticalAlign": "-6px"}}>&#xe838;</i>
                            {stars}
                        </li>
                    </ul>
                </div>
            </div>             
            <div>
                <h1>{userData.login}</h1>
                <h4 className="font-weight-light">{userData.name}</h4>
                <h6>Bio:</h6>
                <p>{userData.bio}</p>
                <a href={userData.html_url} title={userData.html_url}>View full on Github</a>
            </div>  
        </div>                
    )
}


export default User;