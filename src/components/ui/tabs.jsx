import React, { useState } from "react";

export function Tabs({ defaultValue, children }) {
  const [active, setActive] = useState(defaultValue);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, { active, setActive });
  });

  return <div>{childrenWithProps}</div>;
}

export function TabsList({ children }) {
  return <div style={{ display: "flex", marginBottom: "1rem" }}>{children}</div>;
}

export function TabsTrigger({ value, active, setActive, children }) {
  const isActive = active === value;
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        marginRight: "0.5rem",
        backgroundColor: isActive ? "#007bff" : "#e0e0e0",
        color: isActive ? "#fff" : "#000",
        border: "none",
        borderRadius: "4px",
      }}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, active, children }) {
  if (value !== active) return null;
  return <div>{children}</div>;
}
