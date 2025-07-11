import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PreviewClient from "./NotePreview.client";
import { fetchNoteByIdServer } from "@/lib/api/serverApi";

type PreviewProps = {
  params: Promise<{ id: string }>;
};

export default async function Preview({ params }: PreviewProps) {
  const { id } = await params;
  const parsedId = String(id);
  console.log("Modal server", parsedId);

  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["note", parsedId],
    queryFn: () => fetchNoteByIdServer(parsedId),
  });
  console.log("Modal server", queryClient);
  

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreviewClient />
    </HydrationBoundary>
  );
}
