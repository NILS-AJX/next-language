"use client"; // Asegúrate de que este archivo es un componente del cliente

import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../../../useClickOutside"; // Ajusta la ruta según tu estructura de archivos

const VideoPopup_ = ({ close, videoID }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
              >
                ×
              </button>
              <iframe
                src={`${videoID}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const VideoPopup = () => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.href.includes("https://www.youtube.com")) {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            setVideoValue(link.href);
            setVideo(true);
          });
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {video && (
        <VideoPopup_ close={() => setVideo(false)} videoID={videoValue} />
      )}
    </Fragment>
  );
};

export default VideoPopup;
