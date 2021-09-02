
import './App.css';
import {User,Post} from './data'
function App() {
  return (
    <div className="App">
     
      <ul>{User.map(user =>
        { return(
          <li key={user.id}>
            <span ><b>Name:</b> {user.name}</span>
            <span><b>Email: </b>{user.email}</span>
          
            <ul> 
              { Post.filter(item=>item.userId===user.id).map(res=>{
                 return( <li key={res.id}>
                            <p ><b>Tittle: </b>{res.title}</p>
                            <p style={{'margin':'10px'}}>{res.body}</p>
                           </li>
                        )
                })
              }
            </ul>
            <br></br>
           </li> 
          )
          })}
        </ul>
    
    </div>
  );
}

export default App;
