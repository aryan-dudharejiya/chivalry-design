import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "wej312l4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
