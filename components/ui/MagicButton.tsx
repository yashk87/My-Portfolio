const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // Button code
    <button
      onClick={handleClick}
      className=" inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-2xl border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-white-100 transition-colors focus:outline-none "
    >
      <span className="text-[#6d56ff]">{position === "left" && icon}</span>
      <span className="text-xs lg:text-base md:text-sm">{title}</span>
      <span className="text-[#6d56ff]">{position === "right" && icon}</span>
    </button>
  );
};

export default MagicButton;
