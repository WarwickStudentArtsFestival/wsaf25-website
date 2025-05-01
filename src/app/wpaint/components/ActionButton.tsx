import React from 'react';
import { IconType } from 'react-icons';

interface ActionButtonProps {
  onClick: () => void;
  icon: IconType;
  text: string;
  bgColor: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, icon: Icon, text, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${bgColor} px-6 py-3 hover:scale-105 transition-transform text-white`}
    >
      <Icon className="text-2xl" />
      <span className="text-base font-semibold">{text}</span>
    </button>
  );
};

export default ActionButton;
