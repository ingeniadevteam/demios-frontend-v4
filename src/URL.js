let URL = process.env.API_URL || "https://api.demios.es/api";

if (process.env.NODE_ENV === 'development') {
  URL = "http://localhost:1337/api"
}

export default URL;
