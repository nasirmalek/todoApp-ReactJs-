import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://wormdistressedunit.com/d9tnr74r2?key=4dc6ce55eb631b5e1a77d3e90250a000"; // Use your actual Adsterra script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <p>Loading Ad...</p>
      <div id="adsterra-container"></div> {/* The ad will be placed here */}
    </div>
  );
};

export default AdsterraAd;
