/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        orange: {
          200: "#FD892233",
          600: "#FD8922",
        },
        pri: {
          1: "#F07100",
          2: "#FF8323",
          3: "#FF9C4F",
          4: "#FFA865",
          5: "#FFB57B",
          6: "#FFC191",
          7: "#FFD8BA",
          8: "#FFE7D4",
          9: "#FFF4EA",
          10: "#FFF9F4",
        },
        aux: {
          1: "#7AB540",
          2: "#B3E62A",
          3: "#C7F050",
          4: "#D4F083",
          5: "#E0F2AD",
          6: "#EAF3CF",
          7: "#F2F7E2",
        },
        purple: {
          1: "#A061F1",
          2: "#B683F6",
          3: "#CDA6FF",
          4: "#DDC3FF",
          5: "#E8D7FF",
          6: "#F6EFFF",
          7: "#F8F2FF",
        },
        red: {
          1: "#FF5F66",
          2: "#FFADD9",
        },
        yellow: {
          1: "#FFE253",
        },
        blue: {
          1: "#4FBDFB",
        },
        gray: {
          1: "#000000",
          2: "#333333",
          3: "#595959",
          4: "#808080",
          5: "#999999",
          6: "#B3B3B3",
          7: "#CCCCCC",
          8: "#E6E6E6",
          9: "#F2F2F2",
          10: "#F7F7F7",
        },
        brown: {
          1: "#654932",
          2: "#856042",
          3: "#A98060",
          4: "#CEA17E",
          5: "#DFC3AC",
          6: "#F5E0D0",
          10: "#FFF9F4",
        },
        black: {
          1: "#000000", // 100%
          2: "#000000CC", // 80%
          3: "#000000A6", // 65%
          4: "#00000080", // 50%
          5: "#00000066", // 40%
          6: "#0000004D", // 30%
          7: "#00000033", // 20%
          8: "#0000001A", // 10%
          9: "#0000000D", // 5%
          10: "#00000008", // 3%
        },
        white: {
          1: "#FFFFFF", // 100%
          2: "#FFFFFFCC", // 80%
          3: "#FFFFFFA6", // 65%
          4: "#FFFFFF80", // 50%
          5: "#FFFFFF66", // 40%
          6: "#FFFFFF4D", // 30%
          7: "#FFFFFF33", // 20%
          8: "#FFFFFF1A", // 10%
          9: "#FFFFFF0D", // 5%
          10: "#FFFFFF08", // 3%
        },
        fontSize: {
          "4xl": ["32px", "48px"],
          "3xl": ["28px", "42px"],
          "2xl": ["24px", "36px"],
          xl: ["20px", "30px"],
          lg: ["18px", "28px"],
          base: ["16px", "24px"],
          sm: ["14px", "22px"],
          xs: ["12px", "18px"],
          "2xs": ["10px", "16px"],
        },
        /**
         * tailwindcss-animate插件对arbitrary-value的支持有问题
         * 例：duration-[400ms]，delay-[3s]
         * 如果预定义的值不满足需求的话，请在这里扩展定义
         */
        animationDuration: {
          400: "400ms",
        },
        transitionDuration: {
          400: "400ms",
          600: "600ms",
        },
      },
      fontFamily: {
        sans: ["OPPOSans", "PingFang SC", "sans-serif"],
        "sans-serif": ["sans-serif"],
      },
      screens: {
        xs: "480px",
        pad: {raw: "(min-width: 500px) and (orientation: portrait)"},
      },
      animation: {
        pictureBookIcon: "pictureBookIcon 600ms ease-in-out both",
        pictureBookHint: "pictureBookHint 600ms ease-in-out both",
        infiniteBounce: "bounce 2s infinite",
        storeGoodsEnter: "storeGoodsEnter 150ms ease-in-out both",
        breath: "breath 1600ms ease-in-out infinite ",
        pulse: "pulse 1500ms ease-in-out infinite",
        pulseOnce: "pulse 1500ms ease-in-out",
        fadeOutDown: "fadeOutDown 1s ease-in-out forwards",
        blink: "blink 1s step-start infinite",
        rotateIn: "rotateIn 1000ms ease-out forwards",
      },
      keyframes: {
        pictureBookIcon: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "80%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        pictureBookHint: {
          "0%": {
            opacity: 0,
          },
          "16.7%": {
            opacity: 1,
          },
          "66.7%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        bounce: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-10%)"},
        },
        storeGoodsEnter: {
          "0%": {
            transform: "translate(10%, 0px)",
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        breath: {
          "50%": {
            transform: " translate(0, -6px)",
          },
        },
        pulse: {
          "0%, 100%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.2)"},
        },
        fadeOutDown: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
        },
        blink: {
          "0%, 100%": {opacity: "1"},
          "50%": {opacity: "0"},
        },
        rotateIn: {
          "0%": {
            transform: "scale(0.3, 0.3)",
          },
          "40%": {
            transform: "scale(1, 1)",
          },
          "100%": {
            transform: "scale(1, 1) rotate(90deg)",
          },
        },
      },
    },
    plugins: [
      require("tailwind-scrollbar-hide"),
      require("@tailwindcss/aspect-ratio"),
      require("tailwindcss-animate"),
    ],
  },
};
