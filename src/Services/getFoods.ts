import http from "./httpServices";

const getFoods = () => http.get("/food-database-api");

export default getFoods;