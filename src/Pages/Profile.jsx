import React, {useState, useRef} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiSave, FiCamera, FiLogOut, FiX} from 'react-icons/fi';
import { useAuth } from '../Context/AuthContext';


function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    const {user, signOut, updateProfile} = useAuth();
    const navigate = useNavigate();

    const  [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        address: user?.address || "",
        profileImage: user?.profileImage || "",
        bio: user?.bio || ""
     
    });

    const filed = useRef(null);

    if(!user){
        return  <Navigate to="/signin" replace/>
    }

function handleChange(e){
    const {name, value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
}
function handleImage(e){
    const file = e.target.files[0];
    if(!file) return;
    
    if(!file.type.startsWith("image/")){
        setMessage("Please choose only image file");
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        setMessage("File size should be less than 2MB");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        setFormData((prevData) => ({
            ...prevData,
            profileImage: reader.result

        }))
        setMessage("")


    }
    reader.readAsDataURL(file);

}



function handleSave(e){
    e.preventDefault();

    if(!formData.name.trim()){
        setMessage("Name is required");
        return;
    }
    updateProfile(formData);
    setIsEditing(false);
    setMessage("Profile updated successfully!");

}

function handleCancel(){
    setFormData(
        {
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        address: user?.address || "",
        profileImage: user?.profileImage || "",
        bio: user?.bio || ""
    }
)
    setIsEditing(false);
    setMessage("");

}

function logout(){
    signOut();
    navigate("/signin");
}

  return (
    <div className='min-h-screen bg-linear-to-b from-coffee-cream to-white py-10 px-4'>
          <div className="max-w-2xl mx-auto ">
            <h1 className="text-4xl font-bold text-coffee-orange mb-8 text-center ">My Profile</h1>
            <div className="bg-white border border-coffee-caramel rounded-lg shadow-lg p-8">
                 <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-coffee-orange text-coffee-brown flex justify-center items-center text-4xl overflow-hidden font-bold mb-3">
                        
                    
                    {
                        formData.profileImage
                              ? <img  src={formData.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover"/> 
                        : (user.name?.[0].toUpperCase() || <FiUser />)
                    }
                      </div>
                      <h1 className="text-2xl font-bold text-coffee-brown">{user.name}</h1>
                      <p className="text-gray-500">{user.email}</p>

                 </div>
                 {
                    message && (
                        <p className=" text-center text-green-500 font-semibold mb-4">{message}</p>
                    )
                 }

                 {
                    isEditing ? (
                        <form onSubmit={handleSave} className="space-y-4">
                         <div>
                            <label className="block text-sm font-semibold text-coffee-brown mb-3 ">Profile photo</label>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-coffee-orange text-coffee-brown flex justify-center items-center text-2xl overflow-hidden font-bold">
                                    {
                                        formData.profileImage
                                        ?  <img src={formData.profileImage} className="w-full h-full object-cover "/> 
                                        :( user.name?.[0].toUpperCase() || <FiUser /> )
                                    }
                                   
                                </div>
                                      <button className="flex items-center gap-2 border border-coffee-orange rounded-lg px-3 py-1 bg-coffee-orange text-white font-bold hover:bg-coffee-brown cursor-pointer"
                                          onClick={() => filed.current.click()}
                                      type="button">
                                          <FiCamera /> Choose photo
                                      </button>
                                      <input type="file" className="hidden" accept="image/*" ref={filed}
                                          onChange={handleImage} />
                            </div>
                         </div>
                         <div>
                                  <label className='block text-sm font-semibold mb-2'>Full Name
                                  </label>
                                
                            <input type="text" 
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full border border-coffee-caramel px-2 py-2 rounded-lg focus:outline-none '/>
                         </div>
                              <div>
                                  <label className='block text-sm font-semibold mb-2'>Phone Number
                                  </label>

                                  <input type="tel"
                                      name='phone'
                                      placeholder='+966 534 ...'
                                      value={formData.phone}
                                      onChange={handleChange}
                                      className='w-full border border-coffee-caramel px-2 py-2 rounded-lg focus:outline-none ' />
                              </div>
                              <div>
                                  <label className='block text-sm font-semibold mb-2'>Address
                                  </label>

                                  <textarea type="text"
                                      name='address'
                                      placeholder='123, Main street, city, state.'
                                      value={formData.address}
                                      onChange={handleChange}
                                      className='w-full border border-coffee-caramel px-2 py-2 rounded-lg focus:outline-none ' />
                              </div>
                              <div>
                                  <label className='block text-sm font-semibold mb-2'>Bio
                                  </label>

                                  <textarea type="text"
                                      name='bio'
                                      value={formData.bio}
                                      placeholder='Tell us a little about your self '
                                      onChange={handleChange}
                                      className='w-full border border-coffee-caramel px-2 py-2 rounded-lg focus:outline-none ' />
                              </div>
                              <div className='flex gap-4'>
                                <button type='submit'
                                onClick={handleSave}
                                      className='flex flex-1 items-center justify-center gap-2 bg-coffee-orange text-white font-bold rounded-lg px-2  py-1.5 cursor-pointer hover:bg-coffee-brown'>
                                    <FiSave /> Save change
                                </button>
                                  <button type='button'
                                  onClick={handleCancel}
                                      className='flex flex-1 items-center justify-center gap-2 border-2 border-coffee-orange text-coffee-brown font-bold rounded-lg px-2 py-1.5 cursor-pointer hover:bg-coffee-brown'>
                                      <FiX /> Cancel
                                  </button>
                              </div>
                        </form>
                    ): (
                        <div className="space-x-4">
                                  <div className="flex items-center gap-2 mb-1">
                                <FiMail />
                                <span className="">{user.email}</span>
                            </div>
                                  <div className="flex items-center gap-2 mb-1">
                                      <FiPhone />
                                      <span className="">{user.phone || "No phone number added"}</span>
                                  </div>
                                  <div className="flex items-center gap-2 mb-1">
                                      <FiMapPin />
                                      <span className="">{user.address || "No address added"}</span>
                                  </div>
                                  <div className=" gap-2">
                                      <p className="text-sm font-semibold  text-coffee-brown mb-1">Bio</p>
                                        <span className="">{user.bio || "No bio added"}</span>
                                  </div>

                               <button className="w-full flex  items-center justify-center gap-2 border border-coffee-orange rounded-lg my-3 bg-coffee-orange text-white font-bold py-2  hover:bg-coffee-brown cursor-pointer " 
                               onClick={()=> setIsEditing(true)}>
                                <FiEdit2 /> Edit Profile
                               </button>

                                  <button className="w-full flex  items-center justify-center gap-2 border bg-red-400 rounded-lg my-2  text-white font-bold py-2  hover:bg-red-600 cursor-pointer "
                                      onClick={logout}>
                                      <FiLogOut /> Log Out
                                  </button>

                        </div>
                    )
                 }
            </div>
        </div>
    </div>
  )
}

export default Profile;