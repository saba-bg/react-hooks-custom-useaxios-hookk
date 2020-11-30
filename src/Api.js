import axios from "axios";

process.env.githubEndpoint = "https://www.googleapis.com/youtube/v3";
process.env.twitterEndpoint = "";

export const githubApi = axios.create({
  baseURL: process.env.githubEndpoint,
});

export const twitterApi = axios.create({
  baseURL: process.env.twitterEndpoint,
});
