import React, { useEffect, useRef } from "react";

const AdsterraBannerAd = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    // Configuration script (Embedded)
    window.atOptions = {
      key: "5892302f445b468a744a75ccaadc913b",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    // Load the Adsterra script dynamically
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "https://www.profitablegatecpm.com/5892302f445b468a744a75ccaadc913b/invoke.js";
    adScript.async = true;

    // Append script inside the container
    bannerRef.current.appendChild(adScript);

    return () => {
      // Cleanup: Remove script on unmount to prevent memory leaks
      if (bannerRef.current) {
        bannerRef.current.innerHTML = ""; // Clears the ad
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      style={{
        width: "320px",
        height: "50px",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default AdsterraBannerAd;
