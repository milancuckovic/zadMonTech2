import React from "react";
import RepoList from "./components/RepoList";
import User from "./components/User";

class App extends React.Component{
    
    state={
        user:"milancuckovic",
        userData:[],
        repos:[],
        stars:0,
        error:""
    }
    
   
 
    
    componentDidMount(){
        
        fetch(`https://api.github.com/users/milancuckovic`,)
        .then(res=>{return res.json();})
        .then(data=>{
            this.setState({userData:data})
        });
        fetch(`https://api.github.com/users/milancuckovic/starred`)
        .then(res=>{return res.json();})
        .then(data=>{
            this.setState({stars:data.length})
        })
        fetch(`https://api.github.com/users/milancuckovic/repos`)
        .then(res=>{return res.json();})
        .then(data=>{
            this.setState({repos:data})
        })
    }
  
    setSearch=(e)=>{
        this.setState({user:e.target.value})
    }
    setError(mes){
        this.setState({error:mes});
    }
    Search=(e)=>{
        e.preventDefault();
        console.log(this.state.user)
        fetch(`https://api.github.com/users/${this.state.user}`)
        .then(res=>{return res.json();})
        .then(data=>{
            if(data.message){
                this.setError(data.message)
            }
            else{
                this.setState({userData:data})
            }
        })
        fetch(`https://api.github.com/users/${this.state.user}/starred`)
        .then(res=>{return res.json();})
        .then(data=>{
            if(data.message){
               this.setError(data.message)
            }
            else{
                this.setState({stars:data.length})
            }
        })
        fetch(`https://api.github.com/users/${this.state.user}/repos`)
        .then(res=>{return res.json();})
        .then(data=>{
            if(data.message){
                this.setError(data.message)
            }
            else{
                this.setState({repos:data})
            }
        })
    }


    render(){
        return(
            <>
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <a href="/" className="navbar-brand">Home</a>
                    
                        <form action="" onSubmit={this.Search} className="form-inline">
                            <input type="search" className="form-control" placeholder="Users..." onChange={this.setSearch}></input>
                            <button type="submit" className="btn btn-dark" ><i className="fa fa-search"></i></button>
                        </form>
                </nav>
                { this.state.error  ? (<h1>{this.state.error}</h1>) :
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <User userData={this.state.userData} stars={this.state.stars} />
                        </div>
                        <div className="col-md-8">
                            <RepoList repos={this.state.repos}/>
                        </div>
                    </div>
                </div> }
                 
            </>
        )
    }
}

export default App;