/*
 * Thanks fontastic.me (Font Awesome 4.4 as SVG Icons).
 * Do you want to use other icons?
 * Go to https://fontastic.me > Create account > Select icons > Customize > Publish (SVG Sprite) > Paste .js here
 */

/*
Important!
/css/svg-icons.css is required. 
*/

/**
 * Self-executing function to load SVG icons asynchronously and replace <use> tags.
 * This script monitors the document for `<use>` tags referencing external SVG sprites,
 * fetches the sprite via XHR, and injects the corresponding SVG content inline.
 *
 * @param {Document} doc - The global document object.
 * @param {HTMLCollectionOf<SVGUseElement>} useElements - Live collection of <use> elements in the document.
 * @param {Function} scheduler - Function to schedule the next check (requestAnimationFrame or setTimeout).
 * @param {Object} xhrCache - Cache object to store XMLHttpRequest instances for different URLs.
 */
(function(doc, useElements, scheduler, xhrCache) {

  /**
   * Copies SVG content from a source element (from the sprite) to a target element (in the DOM).
   * It moves all child nodes from the source to the target and copies the viewBox attribute.
   *
   * @param {Element} targetElement - The DOM element to append content to (the parent of the original <use> tag).
   * @param {Element} sourceElement - The source SVG element (from the fetched sprite).
   * @returns {void}
   */
  function copySvgContent(targetElement, sourceElement) {
    if (sourceElement) {
      var viewBox = sourceElement.getAttribute('viewBox');
      var fragment = doc.createDocumentFragment();
      var clone = sourceElement.cloneNode(true);

      if (viewBox) {
        targetElement.setAttribute('viewBox', viewBox);
      }

      while (clone.childNodes.length) {
        fragment.appendChild(clone.childNodes[0]);
      }
      targetElement.appendChild(fragment);
    }
  }

  /**
   * Handler for the XMLHttpRequest load event.
   * Parses the response text as HTML/SVG and processes the queued icon requests.
   *
   * @this {XMLHttpRequest}
   * @returns {void}
   */
  function onXhrLoad() {
    var xhr = this;
    var tempContainer = doc.createElement('x');
    var queue = xhr.queue;

    tempContainer.innerHTML = xhr.responseText;

    // Override onload to process the queue immediately for subsequent calls
    xhr.onload = function() {
      queue.splice(0).map(function(item) {
        var parentElement = item[0];
        var iconId = item[1];
        // Escape non-word characters for querySelector
        var sourceId = '#' + iconId.replace(/(\W)/g, '\\$1');
        var sourceElement = tempContainer.querySelector(sourceId);
        copySvgContent(parentElement, sourceElement);
      });
    };

    // Trigger the processing immediately
    xhr.onload();
  }

  /**
   * Main loop to process `<use>` elements.
   * Iterates through the live collection of `<use>` tags. For each tag, it removes it from the DOM,
   * fetches the referenced SVG sprite (if not already fetched), and queues the replacement operation.
   *
   * @returns {void}
   */
  function processUseElements() {
    var useElement;
    // Loop consumes the live collection as elements are removed from DOM
    while ((useElement = useElements[0])) {
      var parentElement = useElement.parentNode;
      var hrefAttribute = useElement.getAttribute('xlink:href');

      if (!hrefAttribute) {
          parentElement.removeChild(useElement);
          continue;
      }

      var splitHref = hrefAttribute.split('#');
      var iconId = splitHref[1];
      // Hardcoded URL as per original script
      var spriteUrl = 'https://file.myfontastic.com/bLfXNBF36ByeujCbT5PohZ/sprites/1477146123.svg';

      parentElement.removeChild(useElement);

      // Get existing XHR or create new one
      var xhr = xhrCache[spriteUrl] = xhrCache[spriteUrl] || new XMLHttpRequest();

      if (!xhr.queue) {
        xhr.queue = [];
        xhr.open('GET', spriteUrl);
        xhr.onload = onXhrLoad;
        xhr.send();
      }

      xhr.queue.push([parentElement, iconId]);

      // If request is already complete, trigger handler
      if (xhr.readyState === 4) {
        xhr.onload();
      }
    }
    // Schedule next check
    scheduler(processUseElements);
  }

  // Start the loop
  processUseElements();

})(document, document.getElementsByTagName('use'), window.requestAnimationFrame || window.setTimeout, {});
