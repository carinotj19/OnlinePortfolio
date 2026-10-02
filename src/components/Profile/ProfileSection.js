import React, { useRef } from "react";

function ProfileSection({ children }) {
  const scrollRef = useRef(null);

  const handleWheel = (event) => {
    const el = scrollRef.current;
    if (!el || !event.deltaY) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight) return;

    const movingDown = event.deltaY > 0;
    const movingUp = event.deltaY < 0;
    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

    if ((movingDown && !atBottom) || (movingUp && !atTop)) {
      event.stopPropagation();
    }
  };

  return (
    <div className="profile-section">
      <div
        className="profile-scroll-area"
        ref={scrollRef}
        onWheel={handleWheel}
      >
        {children}
      </div>
    </div>
  );
}

export default ProfileSection;
