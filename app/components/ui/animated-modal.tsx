import React from "react";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative z-50">{children}</div>;
};

export const ModalTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <button className={className}>{children}</button>;
};

export const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};
