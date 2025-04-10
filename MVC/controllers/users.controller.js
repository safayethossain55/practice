const express = require("express");
const path = require("path");
const users = require("../models/users.model.js");


exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname+ "/../views/index.html"));
};

exports.saveUser = (req,res) => {
    const {fullName,  email} =req.body;

    const user = {
        fullName,
        email,
    };
    users.push(user);
    res.status(201).json({
        success: true,
        users,
    });

};