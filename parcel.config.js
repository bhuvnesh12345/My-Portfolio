// parcel.config.js

module.exports = {
    // Provide custom SVGO configuration
    defaultConfig: {
      optimizers: {
        svgo: {
          // Specify custom SVGO options
          plugins: [
            { removeViewBox: false },
            { removeDimensions: true }, // Prevent removing width and height attributes
          ],
        },
      },
    },
  };
  