import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

function Settings() {
    
    const {user, dispatch} = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:5000/images/";
    
    const handleSubmit = async (e) => {
        dispatch({type: "UPDATE_START"});
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username, email, password,
        };

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload", data)
                
            }catch(err){

            }
        }
        try{
            const res = await axios.put("/users/"+user._id, updatedUser );
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data});
        }catch(err){
            dispatch({type: "UPDATE_FAILURE"});

        }
        
    };

  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsUpdateTitle">Delete Account</span>
            </div>

            <form action="" className="settingsForm" onSubmit={handleSubmit}>
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">    
                    
                    <img src=
                        { file ? URL.createObjectURL(file) : PF+user.profilePic} 
                        alt="" />
                    
                    <label htmlFor="fileInput">
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}
                    onChange={e => setFile(e.target.files[0])}
                    />
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} 
                    onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email} 
                    onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password"
                    onChange={e => setPassword(e.target.value)}/>
                <button className="settingsUpdate" type='submit'>Update</button>
            
                {success && <span style={{color: "green", textAlign:"center", margin:"20px"}}>Profile has been updated!</span>}
            </form>
        </div>
        <Sidebar/>
        
    </div>
  )
}

export default Settings