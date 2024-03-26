"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui";
import React, { useEffect, useState } from "react";
import { BeforeInstallPromptEvent } from "@type/common";

export default function PWADialog() {
  const [showDialog, setShowDialog] = useState(false);
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [promptTriggered, setPromptTriggered] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setPrompt(event as BeforeInstallPromptEvent);

      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShowDialog(true);
      }

      setPromptTriggered(true);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };

    if (!promptTriggered) {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, [promptTriggered]);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleInstall = () => {
    if (prompt) {
      console.log("prompt", prompt);
      prompt.prompt();
      prompt.userChoice.then(
        (choiceResult: { outcome: "accepted" | "dismissed" }) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          setShowDialog(false);
          setPrompt(null);
        },
      );
    }
  };

  return (
    <div>
      <Dialog open={showDialog}>
        <DialogContent className="w-5/6 rounded-md sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-left md:text-xl">
              🚀 Install The App{" "}
            </DialogTitle>
          </DialogHeader>
          <div className="font-ubuntu font-medium leading-6">
            Enjoy the perks of our PWA : <br />
            seamless offline access and faster loading times
          </div>
          <DialogFooter>
            <div className="flex items-center justify-end gap-1 md:gap-3 ">
              <Button onClick={handleInstall} className="w-[5.2rem]  md:w-32">
                Install
              </Button>
              <Button
                variant="destructive"
                onClick={closeDialog}
                className="w-12 md:w-16"
              >
                Close
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
