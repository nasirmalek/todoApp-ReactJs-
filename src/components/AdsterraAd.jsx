import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://wormdistressedunit.com/5892302f445b468a744a75ccaadc913b/invoke.js"; // Adsterra script
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when unmounting
    };
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      {/* Placeholder for the ad */}
      <div id="ad-container"></div>
    </div>
  );
};

export default AdsterraAd;
