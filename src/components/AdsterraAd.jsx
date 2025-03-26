import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://wormdistressedunit.com/5892302f445b468a744a75ccaadc913b/invoke.js"; // Adsterra script URL
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <iframe
        src="https://wormdistressedunit.com/5892302f445b468a744a75ccaadc913b/invoke.js"
        width="320"
        height="50"
        scrolling="no"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default AdsterraAd;
