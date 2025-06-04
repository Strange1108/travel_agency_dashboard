// import { reactRouter } from "@react-router/dev/vite";
// import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
// import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "vite";
// import tsconfigPaths from "vite-tsconfig-paths";

// const sentryConfig: SentryReactRouterBuildOptions = {
//   org: "mern-kd",
//   project: "travel_agency",
//   // An auth token is required for uploading source maps.
//   authToken: "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"
//   // ...
// };


// export default defineConfig(config => {
//   return {
//     plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
//     sentryConfig,
//     ssr: {
//       noExternal: [/@syncfusion/]
//     }
//   };
// });


import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-yx",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});