import react from "react";

import { QuoteContainer, QuoteH1, SpanContainer } from "./quote.styled";

export default function Quote() {
  return (
    <QuoteContainer>
      <QuoteH1>
        "Don't be into trends. Dont make fashion own you, but you decide what
        you are...
      </QuoteH1>

      <SpanContainer>- Gianni Versace</SpanContainer>
    </QuoteContainer>
  );
}
