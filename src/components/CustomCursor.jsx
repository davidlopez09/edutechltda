import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
    };

    const loop = () => {
      currentX += (targetX - currentX - 18) * 0.15;
      currentY += (targetY - currentY - 18) * 0.15;
      setFollowerPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".service-card") ||
        target.closest(".project-card") ||
        target.closest(".client-logo")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${pos.x - 6}px`,
          top: `${pos.y - 6}px`,
        }}
      />
      <div
        className={`cursor-follower ${isHovered ? "hovered" : ""}`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
        }}
      />
    </>
  );
};
