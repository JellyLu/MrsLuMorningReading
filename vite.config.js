import { defineConfig } from 'vite';
import Paths from "vite-tsconfig-paths";
import React from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
// https://vite.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        React(),
        legacy({
            targets: [">0.2%", "not dead", "not op_mini all"],
        }),
        Paths(),
    ],
    base: '/MrsLuMorningReading'
});
