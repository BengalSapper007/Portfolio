let setHintFn = null;

export function registerHintSetter(fn) {
  setHintFn = fn;
}

export function showWhoamiHint() {
  if (setHintFn) {
    setHintFn(true);
    setTimeout(() => setHintFn(false), 1200); // hint duration
  }
}

