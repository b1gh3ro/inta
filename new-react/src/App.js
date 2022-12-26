
import Postspo from './components/posts';
import './App.css';
import React, { useState, useEffect } from 'react';
import {db, auth} from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button,Input} from '@material-ui/core';



//modal starts here
function rand() {
  return Math.round(Math.random() * 20) - 10;
}


function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//modal ends here

//app function here

function App() {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false) 
  const classes = useStyles();
  const [Post, setPost] = useState([]);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [openSignIn, setOpenSignIn] = useState(false)


//firebase starts
useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){ 
        console.log(authUser)
        setUser(authUser)
      }else{
        setUser(null)
      }
  })
 return () => {
   unsubscribe()
 }
}, [user, username])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
    setPost(snapshot.docs.map(doc => ({
      id: doc.id,
      Post: doc.data()
    })))
    })
  }, [])
// firebase ends
// sign up start
const [error, setError] = useState('')
const signUp = (e)=>{
e.preventDefault()
auth.createUserWithEmailAndPassword(email, password)
.then((authUser)=>{
  return authUser.user.updateProfile({
    displayName: username
  })
})
.then(() => {setOpen(false)})
.catch((error)=> setError(error.message))


}
const [signinerror, setsigninError] = useState('')
const signIn = (e)=>{
e.preventDefault()
auth.signInWithEmailAndPassword(email, password)

.then((authUser)=>{
  return authUser.user.updateProfile({
    displayName: username
  })
})
.then(() => {setOpenSignIn(false)})

.catch((error)=> setsigninError(error.message))

}

//sign up and in end
//error
useEffect(() => {
  console.log('error')
  const errorCatcher =() => { setTimeout(function(){ setError('') }, 5000);
}
return ()=>{
  errorCatcher()

}
}, [error])
useEffect(() => {
  console.log('error')
  const errorCatcher =() => { setTimeout(function(){ setsigninError('') }, 5000);
}
return ()=>{
  errorCatcher()

}
}, [error])

//error
// app starts here

  return (
    <div className="App">
      
      <Modal
        open={open}
        onClose={()=> setOpen(false)}
        className="text-dark"
      >
        
        <div style={modalStyle}  className={classes.paper}>
        <form>
              <center className="hi">
                <p id="error" className="bg-danger text-warning">{error}</p>
                <Input placeholder="Username" type="text"  onChange={(e)=> setUsername(e.target.value)} />
                 <Input placeholder="Email" type="text"  onChange={(e)=> setEmail(e.target.value)} />
                 <Input placeholder="Password" type="password"  onChange={(e)=> setPassword(e.target.value)} />
                 <Button type="submit" onClick={signUp}>SignUp</Button>
              </center>
        </form>
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
        className="text-dark"
      >
        
        <div style={modalStyle}  className={classes.paper}>
        <form>
              <center className="hi">
                <p id="error" className="bg-danger text-warning">{signinerror}</p>

                 <Input placeholder="Email" type="text"  onChange={(e)=> setEmail(e.target.value)} />
                 <Input placeholder="Password" type="password"  onChange={(e)=> setPassword(e.target.value)} />
                 <Button type="submit" onClick={signIn}>SignUp</Button>
              </center>
        </form>
        </div>
      </Modal>

      
      <div>
                  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark ">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">my posts</a>
        <button className="navbar-toggler" type data-bs-toggle="collapse" data-bs-target="#navbar-items"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">  {user ? (
        <Button onClick ={()=>auth.signOut()}>Logout</Button>
        ): (
        <div className = "app__loginContainer">
        <Button onClick ={()=>setOpen(true)}>Sign Up</Button>
        <Button onClick ={()=>setOpenSignIn(true)}>Sign In</Button>
        </div>
      )}</li>
          </ul>
        </div>
        </div>
      </nav>
        </div>


     <br />
     <br />
     <br />

    
{
     Post.map(({id, Post}) => (
       <Postspo key={id} username={Post.username} caption={Post.caption} imgURL={Post.imgURL}/>
     )

     )
}
</div>
  );

}



export default App;
