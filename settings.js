// Change the url to the domain of your app
exports.url = 'https://lv-app-sub.herokuapp.com/';

exports.senderEmail = "sarahl@lolovee.com;
exports.senderName = "Sarah Lee";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = "3a633cd9-2c38-42ef-b9ad-d1c20f4ca244";

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "testnotif@lolovee.com";
