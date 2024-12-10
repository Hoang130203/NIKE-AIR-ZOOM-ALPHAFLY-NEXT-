import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import image from '../assets/images/image.png';
function Header() {
    return (
        <div className="header">
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Nike Air Zoom Alphafly NEXT%
            </motion.h1>
            <motion.img
                src={image}
                alt="Nike Air Zoom"
                className="shoe-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
        </div>
    );
}

export default Header;
