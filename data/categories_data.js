const tranding_category_filter = [
  {
    id: 0,
    text: "all",
  },
  {
    id: 1,
    svg: "art",
    text: "art",
  },

  {
    id: 2,
    svg: "collection",
    text: "Collectibles",
  },
  {
    id: 3,
    svg: "domain",
    text: "domain",
  },
  {
    id: 4,
    svg: "music",
    text: "music",
  },
  {
    id: 5,
    svg: "photography",
    text: "photography",
  },
  {
    id: 6,
    svg: "world",
    text: "virtual world",
  },
];

var trendingCategoryData = [
  {
    image: "none",
    id: "Flourishing Cat #1800",
    category: "art",
    title: "Flourishing Cat #180=",
    nfsw: true,
    lazyMinted: false,
    verified: true,
    addDate: 1,
    sortPrice: 8.49,
    price: "From 8.49 ETH",
    bidLimit: 8,
    bidCount: 2,
    likes: 15,
    creator: {
      name: "Sussygirl",
      image: "/images/avatars/creator_1.png",
    },
    owner: {
      name: "Sussygirl",
      image: "/images/avatars/owner_1.png",
    },
  },
  {
    image: "/images/products/item_4.jpg",
    id: "Amazing NFT art1",
    category: "Collectibles",
    title: "Amazing NFT art",
    nfsw: true,
    lazyMinted: false,
    verified: false,
    addDate: 2,
    sortPrice: 5.9,
    price: "From 5.9 ETH",
    bidLimit: 7,
    bidCount: 1,
    likes: 188,
    creator: {
      name: "Sussygirl",
      image: "/images/avatars/creator_2.png",
    },
    owner: {
      name: "Sussygirl",
      image: "/images/avatars/owner_2.png",
    },
  },
  {
    image: "/images/products/item_7.jpg",
    id: "SwagFox#1332",
    category: "domain",
    title: "SwagFox#133",
    nfsw: false,
    lazyMinted: true,
    verified: true,
    addDate: 3,
    sortPrice: 0.078,
    price: "0.078 ETH",
    bidLimit: 3,
    bidCount: 1,
    likes: 160,
    creator: {
      name: "Sussygirl",
      image: "/images/avatars/creator_3.png",
    },
    owner: {
      name: "Sussygirl",
      image: "/images/avatars/owner_3.png",
    },
  },
];

export { tranding_category_filter, trendingCategoryData };
