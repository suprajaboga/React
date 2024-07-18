//image CDN URL for restaurant card
export const IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

//image CDN URL for restaurant menu
export const ITEM_IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/`;
 
//Swiggy API to get restaurant data
export const TASTYEATS_API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

//Swiggy API to get restaurant menu data
export const MENU_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&submitAction=ENTER&restaurantId=";

//restaurant logo
export const LOGO_URL = "https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Symbol.png";

export const shimmer_card_unit = 20;
export const shimmer_menu_card_unit = 4;

//Github username
export const Github_Username = "suprajaboga";
export const Github_Repository_Name = "React";

//Github API for User
export const Github_API_User = "https://api.github.com/users/";

//Social media links
export const Github_Link = "https://github.com/suprajaboga";
export const Linkedin_Link = "https://www.linkedin.com/in/supraja-boga-52245b146";
export const Email_Link = "mailto:suprajaboga15@gmail.com";

//Github Authorization token
export const options = {
    method: "GET",
    headers: {
        Authorization: "",
    }
}

// menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
export const CATEGORY_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
