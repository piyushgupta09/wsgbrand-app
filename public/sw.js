/**
 * Listens for push events from the server.
 * Displays a notification if the push event includes data.
 */
self.addEventListener("push", function (e) {
    console.log("Push event received.");
    // Checks if notifications are supported and permission is granted.
    if (!(self.Notification && self.Notification.permission === "granted")) {
        console.log(
            "Notifications aren't supported or permission not granted."
        );
        return;
    }

    // Processes the push event data to show a notification.
    if (e.data) {
        var msg = e.data.json();
        console.log("Push data received:", msg);

        // Ensure the data object is passed to the notification options
        e.waitUntil(
            self.registration.showNotification(msg.title, {
                body: msg.body,
                icon: msg.icon,
                actions: msg.actions,
                data: msg.data, // Include the data object here
            })
        );
    }
});

/**
 * Handles notification click events.
 * Opens a URL based on the notification's action or data.
 */
self.addEventListener("notificationclick", function (event) {
    // Assuming the action URL is stored in the notification's data
    const baseUrl = "https://app.wsgbrand.in/";
    const notificationData = event.notification.data.url;
    const query = event.notification.data.url;
    if (query) {
        var actionUrl = baseUrl + '?notify=' + query;
    } else {
        var actionUrl = baseUrl;
    }

    event.notification.close(); // Closes the notification

    // Opens the action URL in a new window/tab or focuses if already opened.
    event.waitUntil(
        clients.matchAll({ type: "window" }).then((windowClients) => {
            for (let client of windowClients) {
                // Check if there is already a window/tab open with the target URL
                if (client.url === actionUrl && "focus" in client) {
                    return client.focus();
                }
            }
            // If no window/tab is open with the URL, open a new one
            if (clients.openWindow) {
                return clients.openWindow(actionUrl);
            }
        })
    );
});
