import { Header } from "@/components";
import Router from "./router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
import { useCookies } from "react-cookie";
import { useQueryClient } from "@tanstack/react-query";
import { Beadal } from "@/assets/audios";
import toast from "react-hot-toast";

function App() {
  const location = useLocation();
  const [cookies] = useCookies();
  const queryClient = useQueryClient();

  let AudioContext;

  window.addEventListener("load", function () {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        new AudioContext();
      })
      .catch(e => {
        console.error(`Audio permissions denied: ${e}`);
      });
  });

  const audio = new Audio(Beadal);

  useEffect(() => {
    const eventSource = new EventSourcePolyfill(`${import.meta.env.VITE_BASE_URL}/order`, {
      headers: {
        Authorization: `Bearer ${cookies.access_token}`,
      },
    });

    eventSource.addEventListener("order", () => {
      audio.play();
      queryClient.invalidateQueries({ queryKey: ["getOrderList"] });
      toast.success("주문이 들어왔어요.");
    });

    return () => {
      eventSource.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!location.pathname.includes("signin") && <Header />}
      <Router />
    </>
  );
}

export default App;
