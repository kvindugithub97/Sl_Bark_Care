import "./profile.css"
const Profile = () => {
    return ( 
        <div className = "s_profile" >
            <div class="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                     <div class="file btn btn-lg btn-primary">
                        Change Photo
                        <input type="file" name="file"/>
                    </div>
            </div>
            <div className = "s_description">
                 Name:<br/>
                 Proffesion:

            </div>

        </div>
     );
}
 
export default Profile;