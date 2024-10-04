import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-img">
        <img src="https://ritulv.github.io/image-hosting/1.png"></img>
      </div>
      <div className="nav-items-container">
        <div className="nav-items">Search</div>
        <div className="nav-items">Offers</div>
        <div className="nav-items">Sign in</div>
        <div className="nav-items">Cart</div>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  return (
    <div className="res-card ">
      <img src={props.resImage} className="res-card-img"></img>
      <p>{props.resName}</p>
      <p>{props.resCuisine}</p>
      <p>{props.resRating}⭐</p>
      <p>Price for 2: ${props.resPrice}</p>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "384540",
      name: "#Shawarma",
      cloudinaryImageId: "84f521eb4eb0c8d93744781b4fc1027e",
      locality: "Ambawadi",
      areaName: "Navrangpura",
      costForTwo: "₹250 for two",
      cuisines: ["Arabian", "Continental", "American", "Turkish"],
      avgRating: 4.3,
      parentId: "408883",
      avgRatingString: "4.3",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/-shawarma-ambawadi-navrangpura-rest384540",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "52630",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/84693242-19ca-41e9-be7b-99c2b54fccad_52630.jpg",
      locality: "Ellis Bridge",
      areaName: "Ashram Road",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 04:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹209",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "9.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/mcdonalds-ellis-bridge-ashram-road-rest52630",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "395939",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_395939.JPG",
      locality: "Panchwati Cross",
      areaName: "Paldi & Ambawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "5.8K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/kfc-panchwati-cross-paldi-and-ambawadi-rest395939",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "81814",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_81814.JPG",
      locality: "CG Road",
      areaName: "CG Road",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "31K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "2.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/burger-king-cg-road-rest81814",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "657726",
      name: "Martino'z Pizza - Navrangpura",
      cloudinaryImageId: "0cc87048cede3de2c85be4368ec88259",
      locality: "University Road",
      areaName: "Navrangpura",
      costForTwo: "₹250 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Desserts",
        "Beverages",
        "Fast Food",
        "Snacks",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "443166",
      avgRatingString: "4.3",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/martinoz-pizza-navrangpura-university-road-navrangpura-rest657726",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "348290",
      name: "The Poutinerie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/0e879597-1d27-48f9-b4f5-26f8d6c49248_348290.jpg",
      locality: "Navrangpura",
      areaName: "H L Road",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "Coffee", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.5,
      parentId: "212760",
      avgRatingString: "4.5",
      totalRatingsString: "711",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 03:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "152",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/the-poutinerie-navrangpura-h-l-road-rest348290",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "37996",
      name: "Vittle Box",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/12/96504ada-05ca-471b-b2c9-eeb1d6e9f905_37996.jpg",
      locality: "Vasant Vihar Society",
      areaName: "Navrangpura",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Continental",
        "Italian",
        "Healthy Food",
        "Thalis",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "488896",
      avgRatingString: "4.3",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 02:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/vittle-box-vasant-vihar-society-navrangpura-rest37996",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "675031",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId: "7e651e00dbf998af59ae7c5e3296c982",
      locality: "Ambawadi",
      areaName: "ELLIS BRIDGE",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-05 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "112",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c29bda96-b3b9-4cdf-8ed5-855df803ba98",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/olio-the-wood-fired-pizzeria-ambawadi-ellis-bridge-rest675031",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <p>&nbsp;</p>
      </div>

      <div className="res-card-container">
        <RestroCard
          resName="Subway"
          resCuisine="Subs, Salads, Cookies"
          resRating="5"
          resPrice="15"
          resImage="https://imgs.search.brave.com/YcasNzYOTi2BQoPq6k8p5XsiiXPxjUNm573M4jLxp2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/NTAyMjEwMC9waG90/by9zdWJ3YXktYnVy/Z2VyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RVUc5cTYy/QTFDZ0lGNGhxMGlS/dG1zLVdNbzIyUmpq/eURLai16VUo0ZWxz/PQ"
        />
        <RestroCard
          resName="Dunkin' Donuts"
          resCuisine="Subs, Drinks"
          resRating="4.3"
          resPrice="8"
          resImage="https://imgs.search.brave.com/yP02Co2cIeEEH-zO52K9sHyufsDCMkHi_uSyM9UIU24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzI5/LzMzLzgwMjkzMzU2/YWM5ZGRkZDU1YTY5/NDQxMDViZTE4Mzg0/LmpwZw"
        />
        <RestroCard
          resName="KFC"
          resCuisine="Wings, Burgers"
          resRating="3.7"
          resPrice="10"
          resImage="https://imgs.search.brave.com/qQCe_blcV0nyoYB0vI2YRG56en7CT-OupXBtCMVQxEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzIzLzI3Lzg3/LzM2MF9GXzYyMzI3/ODc4NV8ybm94RFFC/MXlEMnR6N1pGR2Nm/bVlkclJFd3ZsSDVw/ai5qcGc"
        />
        <RestroCard
          resName="McDonalds"
          resCuisine="Burgers, Fries, Softies"
          resRating="4.7"
          resPrice="9"
          resImage="https://imgs.search.brave.com/zIaMljPfw7wzZYmBDbaUww4TpmdSJWtnhCHw9EETbAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NzAzMzE5L3Bob3Rv/L21jZG9uYWxkcy1i/aWctbWFjLXZhbHVl/LW1lYWwuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNDbVp4/UVdkelE5VXVLSGtx/TWttbHRZWXYxbU9H/WDJBQTFwOEJ1dWI1/UXM9"
        />
        <RestroCard
          resName="Lapinoz Pizza"
          resCuisine="Pizza, Drinks"
          resRating="4.5"
          resPrice="13"
          resImage="https://imgs.search.brave.com/ild7m0464EarDAuB-CwrV8FMmMNK19JIYjp227f8wkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ"
        />
        <RestroCard
          resName="Icontrast"
          resCuisine="Shakes, Ice Cream"
          resRating="4.9"
          resPrice="4"
          resImage="https://imgs.search.brave.com/mPbBji0TH_xyPUerxjMQcJg9La56ML5SGnQA_Ze0TCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9n/TVVpQ1pBaTMxWS1B/RlA2d0d3V2Z0QXUz/cUU9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9jb29raWVzLWFu/ZC1jcmVhbS1taWxr/c2hha2UtNTA5MzUw/NC1oZXJvLTAxLTVk/Mjg5ZThhMTZkMzQx/M2RhMDM0MzBiNWU0/OGIyZmMwLmpwZw"
        />
        <RestroCard
          resName="MMV"
          resCuisine="Misal Thali, Vadapav"
          resRating="4.1"
          resPrice="5"
          resImage="https://imgs.search.brave.com/E2bVB-vRiiwQiHyj1WnLjxD5YhmY04Tl9FG4-1tR2Is/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YWhtZWRhYmFkL3c2/LzA3OXB4eDc5Lnh4/NzkuMjIwNDA1MjEy/NDMwLmM2dzYvY2F0/YWxvZ3VlL211bWJh/aXlhLW1pc2FsLWFu/ZC12YWRhcGF2LXJl/bGllZi1yb2FkLWFo/bWVkYWJhZC1taXNh/bC1wYXYtY2VudHJl/cy0wNmlobmV0aXU3/LmpwZz93PTM4NDAm/cT03NQ"
        />
        <RestroCard
          resName="Theobroma"
          resCuisine="Bakery, Desserts"
          resRating="4.6"
          resPrice="6"
          resImage="https://imgs.search.brave.com/fW9lpr8JrUSaJpVKMiqaS5JuRpiJVJ2oBPK8VNTriyU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c25kaW1nLmNvbS9m/b29kL2ltYWdlL3Vw/bG9hZC93XzU1NSxo/XzQxNixjX2ZpdCxm/bF9wcm9ncmVzc2l2/ZSxxXzk1L3YxL2lt/Zy9yZWNpcGVzLzE4/LzExLzYvQXltMmY0/OE9RYmFiNGxhbW5T/cWNfdW50aXRsZWQt/Nzc4Ni5qcGc"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="app-down-container">
        <div className="app-down-promo">Download LunchBox app now</div>

        <div className="app-down-info">
          <div className="app-down-item">
            <img src="https://imgs.search.brave.com/Kme4F67YuI8Nyg-oX9X6xhmjVTwEi27SyH0eCapBCI8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3pX/WUpVcHBmVS1UdW5I/U3hLTUE2aTFMUnB2/MlBPV2FHQ09PY3Z3/UjJoMUVfUjhMWjNS/Q2lNVWdieXhKREdG/UXFlUFIzRzVCQTNN/ZHBVdzRfQnRRX21l/ZlYzNldIM3RuQnJW/M1prdVNqPWUzNjUt/cGEtbnUtczA"></img>
          </div>
          <div className="app-down-item">
            <img src="https://imgs.search.brave.com/zkbUGVgXn1M8tiHBbiwr2UTWR9JF2yfXDK_8aSFwz40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXIuYXBwbGUu/Y29tL2Fzc2V0cy9l/bGVtZW50cy9iYWRn/ZXMvZG93bmxvYWQt/b24tdGhlLWFwcC1z/dG9yZS5zdmc"></img>
          </div>
        </div>
      </div>

      <div className="app-info-container">
        <div className="company">
          <div className="company-info">
            <h1>
              <img src="https://imgs.search.brave.com/cqeznmNGQOyAKZ97F0xORO7MbgbIwEpSQdhaPlUF--g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXhz/dC5pY29uczguY29t/L3Z1ZS1zdGF0aWMv/aWNvbi9tZW51L2xv/Z28uc3Zn"></img>
              &nbsp;LunchBox
            </h1>
            <p>©️ 2024 Big Tech</p>
          </div>
        </div>
        <div className="sidebar1">
          <div className="company-details-container">
            <h2>Company</h2>
            {/* https://imgs.search.brave.com/_QyFIbyj2dD2fMBmHATNX5D5BhOf1EuvmHk75S7tJLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFkLzc4/L2JmLzFkNzhiZmJm/ODE3YzVhZWM1NDYy/NjAxYzI5OTA0N2Jj/LmpwZw */}
            <div className="company-details-items">About</div>
            <div className="company-details-items">Careers</div>
            <div className="company-details-items">Team</div>
          </div>
        </div>
        <div className="sidebar2">
          <div className="delivery-details-container">
            <h2>Now delivering to:</h2>
            <div className="delivery-details-items">Bangalore</div>
            <div className="delivery-details-items">Hyderabad</div>
            <div className="delivery-details-items">Pune</div>
            <div className="delivery-details-items">Chennai</div>
            <div className="delivery-details-items">Ahmedabad</div>
            <div className="delivery-details-items">Jaipur</div>
          </div>
        </div>
        <div className="content1">
          <div className="content1-details-container">
            <h2>Contact us</h2>
            <div className="content1-details-items">Help & Support</div>
            <div className="content1-details-items">Partnership</div>
          </div>
        </div>
        <div className="content2">
          <div className="content2-details-container">
            <h2>Legal</h2>
            <div className="content2-details-items">Terms & Condition</div>
            <div className="content2-details-items">Cookie Policy</div>
            <div className="content2-details-items">Privacy Policy</div>
            <div className="content2-details-items">Investment Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
