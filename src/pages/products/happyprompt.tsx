import { useEffect } from "react";
import type { ReactNode } from "react";

const REDIRECT_URL = "https://www.happyprompt.net/";

export default function HappyPromptRedirect(): ReactNode {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
}
