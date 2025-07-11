"use client";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useParams, useRouter } from "next/navigation";

export default function PreviewClient() {
  const { id } = useParams();
  const parsedId = String(id);
console.log("Modal client", parsedId);

  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <Modal onClose={closeModal}>
      <NotePreview id={parsedId} onClose={closeModal} />
    </Modal>
  );
}
