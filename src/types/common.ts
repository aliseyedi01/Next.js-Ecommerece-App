
export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: ReadonlyArray<string>;
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
  prompt(): Promise<void>;
}

type CommandItem = {
  id: number;
  title: string;
  icon: JSX.Element;
  route?: string;
  shortcut?: string;
  disabled?: boolean;
  onSelect?: () => void;
};

type CommandGroup = {
  title: string;
  items: CommandItem[];
};

export type CommandRegistry = CommandGroup[];


export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;