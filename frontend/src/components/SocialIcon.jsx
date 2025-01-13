import { IconButton } from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <>
        <div className="d-flex justify-content-center align-items-center">
          <IconButton>
            <FaFacebookF size={20} color="#4267B2" />
          </IconButton>
          <IconButton>
            <FaTwitter size={20} color="#52A2F3" />
          </IconButton>
          <IconButton>
            <FaGithub size={20} color="#2B272A" />
          </IconButton>
          <IconButton>
            <FaGoogle size={20} color="#DD443D" />
          </IconButton>
        </div>
    </>
  );
};

export default SocialIcon;
