import * as genresAPI from "./fakeGenreService";

const mobiles = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone 11" },
    platform: "iOS",
    os_version: "13",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/Black/Apple-iPhone-11-Black-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone 11 Pro" },
    platform: "iOS",
    os_version: "13",
    type: "Phone",
    status: "AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro/Midnight-Green/Apple-iPhone-11-Pro-Midnight-Green-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone 11 Pro Max" },
    platform: "iOS",
    os_version: "13",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro-Max/Silver/Apple-iPhone-11-Pro-Max-Silver-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    device: {_id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy Note10"},
    platform: "Android",
    os_version: "9",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-Note10/Aura-Black/Samsung-Galaxy-Note10-Aura-Black-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy Note10+" },
    platform: "Android",
    os_version: "9",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-Note10-Plus-5G/Aura-Glow/Samsung-Galaxy-Note10-Plus-5G-Aura-Glow-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy Note10 5G" },
    platform: "Android",
    os_version: "9",
    type: "Phone",
    status: "AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-Note10/Aura-Black/Samsung-Galaxy-Note10-Aura-Black-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy Note10+ 5G" },
    platform: "Android",
    os_version: "9",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-Note10-Plus-5G/Aura-Glow/Samsung-Galaxy-Note10-Plus-5G-Aura-Glow-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone XS" },
    platform: "iOS",
    os_version: "12",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xs/gold/Apple-iPhoneXs-Gold-1-3x.jpg" 
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone XS Max" },
    platform: "iOS",
    os_version: "12",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xs-max/silver/Apple-iPhoneXsMax-Silver-1-3x.jpg" 
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy S20 5G" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S20-5G/Cosmic-Gray/Samsung-Galaxy-S20-5G-Cosmic-Gray-frontimage.png"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy S20+ 5G" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S20-Plus-5G/Cloud-Blue/Samsung-Galaxy-S20-Plus-5G-Cloud-Blue-frontimage.png"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy S20 Ultra 5G" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S20-Ultra-5G/Cosmic-Black/Samsung-Galaxy-S20-Ultra-5G-Cosmic-Black-frontimage.png"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182e",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy S10e" },
    platform: "Android",
    os_version: "9",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s10e/prism-black/Samsung-Galaxy-S10e-Prism-Black-1-3x.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471831",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy S10" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s10/prism-black/Samsung-Galaxy-S10-Prism-Black-1-3x.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471834",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Pixel 4" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/Google/Google-Pixel-4/Just-Black/Google-Pixel-4-Just-Black-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471837",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Pixel 4 XL" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/Google/Google-Pixel-4-XL/Clearly-White/Google-Pixel-4-XL-Clearly-White-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183a",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "7T Pro 5G McLaren" },
    platform: "Android",
    os_version: "10",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/OnePlus/OnePlus-7T-Pro-5G-McLaren/Papaya-Orange/OnePlus-7T-Pro-5G-McLaren-Papaya-Orange-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183d",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone XR" },
    platform: "iOS",
    os_version: "12",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xr/black/Apple-iPhoneXr-Black-1-3x.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471841",
    device: { _id: "5b21ca3eeb7f6fbccd471814", name: "Galaxy A20" },
    platform: "Android",
    os_version: "9",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-A20/Black/Samsung-Galaxy-A20-Black-frontimage.jpg"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471845",
    device: { _id: "5b21ca3eeb7f6fbccd471818", name: "iPhone 8 Plus" },
    platform: "iOS",
    os_version: "11",
    type: "Phone",
    status: "HIGHLY_AVAILABLE",
    image: "imageLink => https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-8-plus/space-gray/apple-iphone8plus-space-gray-1-3x.jpg"
  }
];

export function getMobiles() {
  return mobiles;
}

export function getMobile(id) {
  return mobiles.find(m => m._id === id);
}

/*{export function saveMobile(mobile) {
  let mobileInDb = mobiles.find(m => m._id === mobile._id) || {};
  mobileInDb.Device = mobile.Device;
  mobileInDb.genre = genresAPI.genres.find(g => g._id === mobile.genreId);
  mobileInDb.Platform = mobile.Platform;
  mobileInDb.OS_version = mobile.OS_version;

  if (!mobileInDb._id) {
    mobileInDb._id = Date.now();
    mobiles.push(mobileInDb);
  }

  return mobileInDb;
}

export function deleteMobile(id) {
  let mobileInDb = mobiles.find(m => m._id === id);
  mobiles.splice(mobiles.indexOf(mobileInDb), 1);
  return mobileInDb;
}*/
