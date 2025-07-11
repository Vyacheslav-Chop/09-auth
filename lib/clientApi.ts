import { NewNote, Note } from "@/types/note";
import { nextServer } from "./api";
import { NewUser, User, UserRes } from "@/types/user";

export type FetchNotesProps = {
  notes: Note[];
  totalPages: number;
};

export async function fetchNotes(
  searchText: string,
  page: number,
  tag?: string
): Promise<FetchNotesProps> {
  const res = await nextServer.get<FetchNotesProps>("/notes", {
    params: {
      ...(searchText && { search: searchText }),
      ...(tag && { tag }),
      page,
      perPage: 12,
    },
  });
  return res.data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const res = await nextServer.post<Note>("/notes", newNote);
  return res.data;
}

export async function deleteNote(id: number): Promise<Note> {
  const res = await nextServer.delete<Note>(`/notes/${id}`);
  return res.data;
}

export async function fetchNoteById(id: number): Promise<Note> {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
}

export async function register(newUser: NewUser): Promise<User> {
  const res = await nextServer.post<User>("/auth/register", newUser);
  return res.data;
}

export async function login(newUser: NewUser): Promise<UserRes> {
  const res = await nextServer.post<UserRes>("/auth/login", newUser);
  return res.data;
}
