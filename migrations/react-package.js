export default {
    name: "react-template",
    version: "0.1.0",
    private: true,
    dependencies: {
        "@testing-library/jest-dom": "^5.12.0",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "@types/jest": "^26.0.23",
        "@types/node": "^12.20.13",
        "@types/react": "^17.0.6",
        "@types/react-dom": "^17.0.5",
        react: "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "4.0.3",
        typescript: "^4.2.4",
        "web-vitals": "^1.1.2",
    },
    scripts: {
        start: "react-scripts start",
        build: "react-scripts build",
        test: "react-scripts test",
        eject: "react-scripts eject",
    },
    eslintConfig: {
        extends: ["react-app", "react-app/jest"],
    },
    browserslist: {
        production: [">0.2%", "not dead", "not op_mini all"],
        development: [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version",
        ],
    },
};
