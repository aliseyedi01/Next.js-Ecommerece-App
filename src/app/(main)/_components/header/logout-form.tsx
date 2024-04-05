import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  DialogClose,
} from "@components/ui";
import { cn } from "@lib/utils";
import { LogOut } from "lucide-react";
import { FC } from "react";

type LogoutProps = {
  place?: "header" | "navbar" | "command";
  open?: boolean;
  onOpen?: any;
};

export const LogoutForm: FC<LogoutProps> = ({
  open,
  onOpen,
  place = "header",
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogTrigger
        asChild
        className={cn(place === "command" ? "hidden" : "")}
      >
        {place === "header" ? (
          <div
            className={cn(
              "flex items-center justify-start gap-2 rounded-md py-1 pl-2 text-base hover:!bg-blue-600/20",
            )}
          >
            <LogOut className="size-4" />
            <div className="cursor-pointer pl-1 text-sm">Log Out</div>
          </div>
        ) : (
          <div
            className={cn(
              "ml-3 mt-2 flex items-center justify-start gap-3 rounded-md py-1 hover:bg-muted-foreground/20",
            )}
          >
            <LogOut className="fill-slate-400 stroke-slate-500  stroke-1" />
            <div className="cursor-pointer pl-1 text-sm">Log Out</div>
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="flex w-10/12  flex-col rounded-md md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-left">Logout</DialogTitle>
        </DialogHeader>
        <div className=""> Are you sure you want to logout ?</div>
        <DialogFooter className="flex flex-row gap-3 self-end md:gap-0">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>

          <Button type="submit" className="px-6">
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
