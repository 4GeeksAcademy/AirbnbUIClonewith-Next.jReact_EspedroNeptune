import { RoomDetailClient } from "@/components/RoomDetailClient";

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <RoomDetailClient id={id} />;
}