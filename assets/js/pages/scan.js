import { f as template } from "../chunks/dom-events.js";
import { e as push, f as pop } from "../chunks/runtime.js";
import { h as head } from "../chunks/dom-attributes.js";
import { L as Logo } from "../chunks/each.js";

var scanTemplate = template(`<div class="min-h-dvh flex items-center justify-center px-6"><div class="text-center"><h1 class="text-4xl font-bold mb-4">Scan</h1> <p class="text-text-muted text-lg mb-8">Scan functionality coming soon.</p> <a href="/" class="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">Back to Home</a></div></div>`);

function Scan(root) {
  push(root);
  var fragment = scanTemplate();
  pop(root, fragment);
}

export { Scan as component };
