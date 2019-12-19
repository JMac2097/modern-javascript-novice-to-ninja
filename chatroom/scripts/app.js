// dom query
const chatlist = document.querySelector('.chat-list');



//class instances
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'yoshi');

// get the chats and render
chatroom.getChats(data => chatUI.render(data));
