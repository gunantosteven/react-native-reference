import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aKeFewV0-dc2561rDYu1xODtsUpCe2S2Cp-jgMT_YEIu-IEKIsRWSAjpt078uHcsSThrp_gxXVjEXhe7wUtFPZTyGdpqE_Ey18QCEuKIjDPlxC5rZ8C2vlzkZKWqYnYx",
  },
});
