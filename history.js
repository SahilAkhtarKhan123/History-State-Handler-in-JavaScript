// ========================= Handling history states ========================
(function() {
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    // Override pushState
    history.pushState = function() {
        originalPushState.apply(history, arguments);
        // Custom event for pushstate
        const pushStateEvent = new Event('pushstate');
        window.dispatchEvent(pushStateEvent);
    };

    // Override replaceState
    history.replaceState = function() {
        originalReplaceState.apply(history, arguments);
        // Custom event for replacestate
        const replaceStateEvent = new Event('replacestate');
        window.dispatchEvent(replaceStateEvent);
    };
})();

// Listen for the custom pushstate and replacestate events
window.addEventListener('pushstate', function(event) {
    console.log('Forward navigation detected');
    // code
});

window.addEventListener('replacestate', function(event) {
    console.log('Replace state detected');
    // code
});


// Handling go back
// Add event listener for popstate
window.addEventListener('popstate', function(event) {
    console.log("Pop state detected....")
});

// ============= End Handling history states =======================
