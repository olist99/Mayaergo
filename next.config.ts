import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/om-os", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/services", destination: "/ydelser", permanent: true },
    ];
  },
};

export default nextConfig;
