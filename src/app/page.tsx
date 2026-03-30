"use client";

import { Deck } from "@/components/deck/Deck";
import { sections } from "@/data/slides";

export default function VisionPage() {
  return <Deck sections={sections} />;
}
