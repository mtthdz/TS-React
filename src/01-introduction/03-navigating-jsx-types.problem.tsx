export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={0 || undefined}

      // How do I figure out what type onChange expects?
      // React.FormEventHandler<HTMLDivElement> | undefined
      //     type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
      //          type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];
      // definitely passing an event
      // e is a react form event (React.FormEvent)
      onChange={(e) => {}}

      // How do I get autocomplete with JSX?
      // ctrl + space hotkey
    />
  );
};
