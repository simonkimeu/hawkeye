let previousContent = null;

function hasChanged(current) {
  if (previousContent === null) {
      previousContent = current;
          return false;
            }
              const changed = current !== previousContent;
                previousContent = current;
                  return changed;
                  }

                  module.exports = { hasChanged };