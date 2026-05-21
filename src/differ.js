let previousContent = null;

// Compares current content to last snapshot — snapshot lives in memory, lost on restart
const hasChanged = (current) => {
  if (previousContent === null) {
    previousContent = current;
    return false;
  }
  const changed = current !== previousContent;
  previousContent = current;
  return changed;
};

module.exports = { hasChanged };