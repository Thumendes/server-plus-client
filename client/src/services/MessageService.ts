import { useMutation } from "react-query";
import { api } from "./api";

interface SendMessagePayload {
  text: string;
  channel: string;
}

export const sendMessageMutation = () =>
  useMutation((message: SendMessagePayload) => {
    return api.post("/bot/send-message", message);
  });
