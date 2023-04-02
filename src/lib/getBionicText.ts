import { textVide } from "text-vide"

export const getBionicText = (text: string): string => {
  return textVide(text).replace(/\n/g, "<br />")
}
