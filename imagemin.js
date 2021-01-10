/* eslint-disable */
const requireContext = require('require-context');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

const imagesFolder = 'src/assets/img';

const minify = (path) => {
  const fullPath = imagesFolder + '/' + path;
  const folderWithImages = fullPath.substring(0, fullPath.lastIndexOf('/'));

  console.log(fullPath)

  const files = imagemin([folderWithImages + '/*.png'], {
    destination: folderWithImages,
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
    ]
  });
}

const stack = requireContext(`../../${imagesFolder}`, true, /^.*\.png$/);
stack
  .keys()
  .forEach(minify)
