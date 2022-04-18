import * as prismic from "@prismicio/client";
import fetch from "node-fetch";

export function getPrismicClient() {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch,
  });

  return client;
}
