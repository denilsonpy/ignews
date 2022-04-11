import faunadb from "faunadb";

export const fauna = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
  scheme: "https",
  domain: "db.us.fauna.com",
});
