import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a smart fridge: firmware update holds the ice maker
// hostage behind new terms, and the milk gets a breakup notification.
const ENTRY =
  "My fridge updated its firmware overnight and now the ice maker only dispenses cubes after I accept the new terms — it even sent my milk a push notification saying 'we need to talk.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
