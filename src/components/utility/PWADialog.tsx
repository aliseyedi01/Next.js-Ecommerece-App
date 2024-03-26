"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@components/ui";
import React, { useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { BeforeInstallPromptEvent } from "@type/common";

export default function PWADialog() {
  const [showDialog, setShowDialog] = useState(false);
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setPrompt(event);

      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShowDialog(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">🚀 Install The App </DialogTitle>
            {/* <DialogDescription className="pt-4 font-semibold text-foreground">
              Click The Button Below To Install App on your device.
            </DialogDescription> */}
          </DialogHeader>
          <div className="font-ubuntu font-medium leading-7">
            Enjoy the perks of our PWA : <br />
            seamless offline access and faster loading times. <br />
            Install now!
          </div>
          <DialogFooter>
            <Button onClick={handleInstall}>Install App</Button>
            <Button variant="destructive" onClick={closeDialog}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
