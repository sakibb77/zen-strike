/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#94A3B8",
        dark: "#1f2937",
        accent1: " #06b6d4", //#65B48F #f11ca2
        accent2: "#ef4444",
      },
      // backgroundImage: {
      //   slideImg1:
      //     "url('https://img.freepik.com/free-photo/young-woman-doing-karate_23-2148993568.jpg?w=826&t=st=1690794433~exp=1690795033~hmac=302f3399b8ce37f721839f0f9e016dcded56df9c5b2d858ec95d8cfe5e6d7d1f')",
      //   slideImg2:
      //     "url('https://img.freepik.com/free-photo/young-woman-doing-karate_23-2148993569.jpg?w=826&t=st=1690794214~exp=1690794814~hmac=8ea55986578e143a11eaeabd90d8d67e2464a83c0e308137ae13cf7ad5aa0f19')",
      //   slideImg3:
      //     "url('https://img.freepik.com/free-photo/unrecognizable-fighter-showing-thumbs-up_23-2148446225.jpg?w=900&t=st=1690795066~exp=1690795666~hmac=05d3f787ad8750b6f53a410aa75039329ec1f8293f0a6ecf4f692c38e4404ecc')",
      //   slideImg4:
      //     "url('https://img.freepik.com/free-photo/unrecognizable-fighter-pointing-copy-space_23-2148446223.jpg?w=900&t=st=1690795119~exp=1690795719~hmac=a87e60a65a9956f2d095db216c035c2f71d225dca06b468396cc2111cb493326')",
      // },
    },
  },
  plugins: [],
};
