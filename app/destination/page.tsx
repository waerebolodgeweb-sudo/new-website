import { permanentRedirect } from "next/navigation";
import { destinations } from "./data";

export default function DestinationIndexPage() {
  permanentRedirect(`/destination/${destinations[0].slug}`);
}
