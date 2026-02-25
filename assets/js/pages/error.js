import { f as template } from "../chunks/dom-events.js";
import { e as push, f as pop, $ as attr } from "../chunks/runtime.js";
import { h as head } from "../chunks/dom-attributes.js";
import { L as Logo } from "../chunks/each.js";

var errorTemplate = template(`<div class="min-h-dvh flex items-center justify-center px-6"><div class="text-center"><h1 class="text-6xl font-bold text-accent mb-4">Error</h1> <p class="text-text-muted text-lg mb-8">Something went wrong. Please try again later.</p> <a href="/" class="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">Back to Home</a></div></div>`);

function Error(root) {
  push(root);
  var fragment = errorTemplate();
  pop(root, fragment);
}

export { Error as component };
