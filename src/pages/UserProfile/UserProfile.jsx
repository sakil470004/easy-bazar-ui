import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function UserProfile() {
  const { user } = useAuth();
  const [userData2, setUserData2] = useState({});
  const [updateOpen, setUpdateOpen] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData2(data);
      });
  }, [user?.email]);
  console.log(userData2);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
      <h1 className="text-3xl font-bold text-center my-6">User Information</h1>

      {!updateOpen? <div className="space-y-4">
        <div className="avatar flex justify-center items-center">
          <div className="w-64 rounded-full border-2 border-black">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
        <div className=" flex gap-2 text-xl justify-center">
          <h2 className="font-bold">Name</h2>
          <p>{user?.displayName}</p>
        </div>
        <div className="justify-center text-xl flex gap-2">
          <h2 className="font-bold">Email :</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <button onClick={()=>setUpdateOpen(true)} className="btn btn-outline btn-warning w-full">
            Update Profile
          </button>
        </div>
      </div>:<div className="space-y-4">
      Hi
      </div>
      
      }
    </div>
  );
}

export default UserProfile;
