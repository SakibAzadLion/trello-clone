const CardFloat = ({ mousePosition, dragCardPosition, children }) => {
  const top = '-' + dragCardPosition.top + 'px';
  const left = '-' + dragCardPosition.left + 'px';

  return (
    <div
      className={`fixed top-[${top}] left-[${left}] w-[236px] skew-y-2 pointer-events-none`}
      style={{
        top: top,
        left: left,
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) skewY(2deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default CardFloat;
