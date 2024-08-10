setTimeout(function () {
           
    var chatbot__init = document.createElement('div');
    chatbot__init.setAttribute('id', 'chatbot__wrapper');
    document.body.appendChild(chatbot__init);

    var chatbot__style = document.createElement('link');
    chatbot__style.setAttribute('href', 'https://d2c826xns9flnw.cloudfront.net/chatbot.styles.css');
    chatbot__style.setAttribute('rel', 'stylesheet');
    chatbot__style.setAttribute('id', 'chatbot__css');
    document.head.appendChild(chatbot__style);

    var chatbot__script = document.createElement('script');
    chatbot__script.setAttribute('src', 'https://d2c826xns9flnw.cloudfront.net/chatbot.bundle.js');
    chatbot__script.setAttribute('id', 'chatbotjs');
    document.body.appendChild(chatbot__script);
  }, 3500);