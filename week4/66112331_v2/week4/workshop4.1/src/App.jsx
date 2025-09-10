import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import { Userdata } from "./components/UserList";

function App() {
  const handleViewDetails = (id) => {
    console.log("User clicked:", id);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Userdata
        .filter(user => user.email) // กรอง user ที่ยังไม่มี email ออก
        .map((user) => (
          <UserProfileCard key={user.id} user={user} onViewDetails={handleViewDetails} />
        ))}
    </div>
  );
}

export default App;
