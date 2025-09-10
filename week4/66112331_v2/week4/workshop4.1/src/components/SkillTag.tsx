import React from "react";

interface SkillTagProps {
  SkillName: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const SkillTag: React.FC<SkillTagProps> = ({ SkillName, level }) => {
  let background = "";

  if (level === 'Beginner') {
    background = "#d4edda";
  } else if (level === 'Intermediate') {
    background = "#fff3cd";
  } else if (level === 'Advanced') {
    background = "#f8d7da";
  }

  return (
     <span
      style={{
        backgroundColor: background,
        padding: '2px 8px',
        borderRadius: '6px',
        margin: '3px 4px 4px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        fontSize: '12px',
        display: 'inline-block',
        fontFamily: 'sans-serif',
        color: "black",
        whiteSpace: 'nowrap', // ป้องกันขึ้นบรรทัดใหม่ใน tag เดียว
      }}
    >
      {SkillName}
      {level && (
        <span style={{ fontStyle: "italic", opacity: 0.8 }}> ({level})</span>
      )}
    </span>
  );
};

export default SkillTag;


