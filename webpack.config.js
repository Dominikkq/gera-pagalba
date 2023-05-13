module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  node: {
    child_process: "empty",
    // fs: "empty", // if unable to resolve "fs"
  },
};
