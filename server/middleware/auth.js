import express from "express";

const authorize = (roles) => {
  return (req, res, next) => {
    const userRole = req.headers.role;

    if (!userRole) {
      return res.status(401).json({ message: "No role provided" });
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

export default authorize;