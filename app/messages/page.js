import Messages from "@/components/messages";
import { unstable_noStore } from "next/cache";

// export const revalidate = 5;
// export const dynamic = "force-dynamic"; => equals to cache = 'no-store' on the fetch object.

export default async function MessagesPage() {
  unstable_noStore();
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
