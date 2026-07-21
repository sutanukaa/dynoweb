// Runnable check for the rage-click window. No framework: `node rage.test.mjs`.
// Mirrors pushClick/isRage in Nudge.tsx — kept in sync by hand because importing
// a .tsx from plain node would need a build step for four lines of logic.
import assert from "node:assert/strict";

const RAGE_WINDOW_MS = 1500;
const RAGE_CLICKS = 3;
const pushClick = (log, now, windowMs = RAGE_WINDOW_MS) => [
  ...log.filter((t) => now - t < windowMs),
  now,
];
const isRage = (log) => log.length >= RAGE_CLICKS;

// Three clicks inside the window trip it.
let log = [];
for (const t of [0, 300, 600]) log = pushClick(log, t);
assert.equal(log.length, 3);
assert.equal(isRage(log), true, "3 clicks in 600ms should be rage");

// Three clicks spread beyond the window do not — each one ages the last out.
log = [];
for (const t of [0, 2000, 4000]) log = pushClick(log, t);
assert.equal(log.length, 1, "clicks 2s apart should never accumulate");
assert.equal(isRage(log), false);

// Two fast then a late one: the late click starts a fresh run.
log = [];
for (const t of [0, 200, 5000]) log = pushClick(log, t);
assert.equal(log.length, 1);
assert.equal(isRage(log), false);

// Exactly on the boundary is excluded (strict <), so the window can't creep.
log = pushClick([0], RAGE_WINDOW_MS);
assert.equal(log.length, 1, "a click exactly one window later drops the first");

// A realistic human triple-click: ~150ms apart.
log = [];
for (const t of [0, 150, 300]) log = pushClick(log, t);
assert.equal(isRage(log), true, "normal triple-click speed must register");

// Four fast clicks keep firing rather than jamming.
log = [];
for (const t of [0, 150, 300, 450]) log = pushClick(log, t);
assert.equal(log.length, 4);
assert.equal(isRage(log), true);

console.log("rage detection: all checks passed");
