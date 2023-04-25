export const FILE_CONSTANT = {
  EXT: {
    IMAGE: [".jpg", ".jpeg", ".png"],
  },
  SIZE: {
    "10MB": 1024 * 1024 * 10,
  },
};

export const  FILE_URL =  {
    IMAGES: process.env.APP_URL + 'get-file/images/',
    UPLOADS: process.env.APP_URL + 'get-file/uploads/',
}