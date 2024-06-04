import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function UserProfile() {
  const { user } = useAuth();
  const [userData2, setUserData2] = useState({});
  const [updateOpen, setUpdateOpen] = useState(false);

  //   const user = {
  //     email: "sakil@gmil.com",
  //     name: "sakil",
  //     img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  //     phone: "01700000000",
  //     address: "Dhaka,Bangladesh",
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      ...userData2,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      img: formData.get("img"),
    };
    fetch(`https://easy-bazar-server.vercel.app/users/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateOpen(false);
        formData.reset();
      });
  };
  useEffect(() => {
    fetch(`https://easy-bazar-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData2(data);
      });
  }, [user?.email]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-6">
      <h1 className="text-3xl font-bold text-center my-6">User Information</h1>

      {!updateOpen ? (
        <div className="space-y-4">
          <div className="avatar flex justify-center items-center">
            <div className="w-64 rounded-full border-2 border-black">
              <img
                src={
                  userData2?.img || user?.photoURL || "/public/placeholder.jpg"
                }
              />
            </div>
          </div>
          <div className=" flex gap-2 text-xl justify-center">
            <h2 className="font-bold">Name</h2>
            <p>{userData2?.name || "N/A"}</p>
          </div>
          <div className="justify-center text-xl flex gap-2">
            <h2 className="font-bold">Email :</h2>
            <p>{userData2.email || "N/A"}</p>
          </div>
          <div className="justify-center text-xl flex gap-2">
            <h2 className="font-bold">Phone :</h2>
            <p>{userData2?.phone || "N/A"}</p>
          </div>
          <div className="justify-center text-xl flex gap-2">
            <h2 className="font-bold">Address :</h2>
            <p>{userData2?.address || "N/A"}</p>
          </div>

          <div>
            <button
              onClick={() => setUpdateOpen(true)}
              className="btn btn-outline btn-warning w-full"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={userData2?.name || ""}
                className="input input-primary w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={userData2?.email || ""}
                className="input input-primary w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                defaultValue={userData2?.phone || ""}
                className="input input-primary w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                defaultValue={userData2?.address || ""}
                className="input input-primary w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="img">Profile Picture</label>
              <input
                type="text"
                id="img"
                name="img"
                defaultValue={userData2?.img || ""}
                className="input input-primary w-full"
              />
            </div>
            <div>
              <button className="btn btn-primary  w-full">Update</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserProfile;