import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//your-adsterra-code.js"; // Replace with your actual Adsterra script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  return <div>Advertisement</div>;
};

export default AdsterraAd;
