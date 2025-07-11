import { cookies } from "next/headers";
import { nextServer } from "./api";
import { FetchNotesProps } from "./clientApi";
import { Note } from "@/types/note";
import { api } from "@/app/api/api";

export async function fetchNotesServer(
  search: string,
  page: number,
  tag?: string
): Promise<FetchNotesProps> {
  const cookieStore = await cookies();
  const res = await nextServer.get<FetchNotesProps>("/notes", {
    params: {
      ...(search && { search }),
      page,
      perPage: 12,
      ...(tag && { tag }),
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res.data;
}

export async function fetchNoteByIdServer(id: string): Promise<Note> {
  const cookieStore = await cookies();
  const res = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  console.log("Server Api", res.data);
  
  return res.data;
}
