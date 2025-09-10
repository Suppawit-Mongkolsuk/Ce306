import React from 'react';
import SkillTag from './SkillTag';


interface Skill {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface UserData {
  id: number | string;
  name: string;
  email: string;
  avatarUrl?: string;
  isOnline: boolean;
  skills: Skill[];
}

interface Props {
  user: UserData;
  onViewDetails: (userId: number | string) => void;
}

const UserProfileCard: React.FC<Props> = ({ user, onViewDetails }) => {
  return (
    
    <div
        style={{
        width: '250px',
        borderRadius: '10px',
        padding: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'sans-serif',
        margin: '10px',
        textAlign: 'center',
  }}
>
  {/*Avatar + email + status */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      justifyContent: 'center',
      marginBottom: '10px',
    }}
  >
    <img
      src={user.avatarUrl}
      alt={user.name}
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>{user.email}</p>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '14px',
          color: user.isOnline ? 'green' : 'gray',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: user.isOnline ? 'green' : 'gray',
            display: 'inline-block',
          }}
        />
        {user.isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  </div>

  {/* Skills */}
  <div style={{ marginBottom: '10px' }}>
    <h3>Skills:</h3>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginTop: '4px',
      }}
    >
      {user.skills.map((skill, index) => (
        <SkillTag key={index} SkillName={skill.name} level={skill.level} />
      ))}
    </div>
  </div>

  {/*ปุ่ม View Details */}
  <div>
    <button
      onClick={() => onViewDetails(user.id)}
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '6px 12px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      View Details
    </button>
  </div>
</div>


      
  );
};

export default UserProfileCard;


     