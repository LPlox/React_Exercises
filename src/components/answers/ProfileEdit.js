import { useState } from "react";

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: "john",
    email: "john@doe.com",
    age: 0,
  });

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <p>name: {profile.name}</p>
      <p>email: {profile.email}</p>
      <p>age: {profile.age}</p>
      <br />
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={profile.name}
        placeholder="name"
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={profile.email}
        placeholder="email"
      />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        value={profile.age}
        placeholder="age"
      />
    </div>
  );
};

export default ProfileEdit;
