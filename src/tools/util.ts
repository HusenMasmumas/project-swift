export interface KeyboardEvent extends React.KeyboardEvent<HTMLFormElement> {
  target: EventTarget & { id: string; value: string };
}

export const enterNextInput = (event: KeyboardEvent, key: string) => {
  if (event?.code === "Enter") {
    const element = document?.getElementById(key);
    const inputElement = element?.getElementsByTagName("input") || [];
    let index = 0;
    for (let i = 0; i < inputElement?.length; i++) {
      let item = inputElement?.[i];
      if (document?.activeElement === item) {
        index = i;
        break;
      }
    }

    document.getElementById(inputElement?.[index + 1]?.id)?.focus();
  }
};
