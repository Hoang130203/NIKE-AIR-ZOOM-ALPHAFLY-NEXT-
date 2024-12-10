import React, { useState, useEffect } from 'react';

const Nike3DModel = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    // Ẩn phần tử khi iframe đã load
    useEffect(() => {

        if (iframeLoaded) {
            const hideControls = () => {
                const controls = document.getElementsByClassName('controls')
                console.log(controls?.length)
                if (controls) {
                    controls[0].style.display = 'none'; // Ẩn phần tử
                }
            };

            // Kiểm tra liên tục để đảm bảo class được ẩn
            const interval = setInterval(() => {
                hideControls();
            }, 500);

            // Xóa interval khi component bị unmount
            return () => clearInterval(interval);
        }
    }, [iframeLoaded]);

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <div class="sketchfab-embed-wrapper"> <iframe title="Nike Air Zoom AlphaFly Next% “Rawdacious”" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/b27cc72d3a67425199dcb43e63c7b939/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0&dnt=1&ui_infos=0&controls=false"> </iframe> </div>

        </div>
    );
};

export default Nike3DModel;
