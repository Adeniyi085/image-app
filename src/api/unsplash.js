import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 243ffb4e93eef213f932be694fff3d84b823eaa2f014befc5691c35c917870df"
  }
});
