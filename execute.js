const cloudinary = require('cloudinary');

cloudinary.v2.uploader.upload("https://youtu.be/bA2LjfsYK7k",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
  cloudinary.config({
  cloud_name: 'yourCloudName',
  api_key: 'yourAPIKey',
  api_secret: 'yourAPISecret'
});