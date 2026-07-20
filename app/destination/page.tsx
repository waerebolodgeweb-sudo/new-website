import { redirect } from "next/navigation";
import { destinations } from "./data";

export default function DestinationIndexPage() {
  redirect(`/destination/${destinations[0].slug}`);
}
