// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  [""],
  ["am i being bullied online how do you tell the difference between a joke and bullying", "am i being bullied online how do you tell the difference between a joke and bullying"],
  ["how do you tell the difference between a joke and bullying", "the difference between joke and bullying"],
  ["am i being bullied online", "am i bullied online", "am i onnline bullied"],
  ["what are the effects of cyber bullying", "the effects of cyber bullying", "effects of cyber bullying"],
  ["who should I talk to if someone is bullying me online why is reporting important", "to whom should i talk if someone is bullying me", "why is reporting cyberbullying important"],
  ["i am experiencing cyberbullying, but i am afraid to talk to my parents about it. how can i approach them",
    "i am experiencing cyberbullying, but i am afraid to talk to my parents about it. how should i approach them",
    "i am experiencing cyberbullying, but i am scared to talk to my parents about it. how can i approach them",
    "i am experiencing cyberbullying, but i am scared to talk to my parents about it. how should i approach them",
    "i am experiencing cyberbullying, but i am afraid to talk to my parents about it. how can i talk to them about it them",
    "i am experiencing cyberbullying, but i am afraid to talk to my parents about it. how should i talk to them about it them",
    "i am experiencing cyberbullying, but i am scared to talk to my parents about it. how can i talk to them about it them",
    "i am experiencing cyberbullying, but i am scared to talk to my parents about it. how should i talk to them about it them",
  ],
  [
    "how can i help my friends report a case of cyberbullying especially if they don’t want to do it",
    "how can i help my friend report a case of cyberbullying especially if he doesn’t want to do it",
    "how can i help my friend report a case of cyberbullying especially if she doesn’t want to do it",
  ],
  [
    "how do we stop cyberbullying without giving up access to the Internet",
    "how can i stop cyberbullying without giving up access to the Internet",
    "how should we stop cyberbullying without giving up access to the Internet",
    "how should i stop cyberbullying without giving up access to the Internet"
  ],
  [
    "how do i prevent my personal information from being used to manipulate or humiliate me on social media",
    "how should i prevent my personal information from being used to manipulate or humiliate me on social media",
    "how can i prevent my personal information from being used to manipulate or humiliate me on social media",
    "how do we prevent my personal information from being used to manipulate or humiliate me on social media",
    "how should we prevent my personal information from being used to manipulate or humiliate me on social media",
    "how can we prevent my personal information from being used to manipulate or humiliate me on social media"
  ],
  [
    "is there a punishment for cyberbullying",
    "a punishment for cyberbullying"
  ],
  ["internet companies do not seem to care about online bullying and harassment. are they being held responsible"],
  [
    "are there any online anti-bullying tools for children or young people",
    "are there any online anti-bullying tools for children and young people",
    "is there any online anti-bullying tools for us",
    "are there any online anti-bullying tools for young people",
    "are there any online anti-bullying tools for children"
  ],
  ["what is harassment"],
  ["where can i obtain additional information for preventing cyber bullying","where can i obtain additional information for preventing cyber bullying"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Great",
    "Pretty well",
    "Fantastic"
  ],
  [
    "Nothing much, Just helping others :)"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot."],
  ["I can be named anything"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza", "Burger"],
  ["Please say something :("],
  ["Thats, not sure but, I fortunately,can answer your second question : All friends joke around with each other, but sometimes it’s hard to tell if someone is just having fun or trying to hurt you, especially online. Sometimes they’ll laugh it off with a “just kidding,” or “don’t take it so seriously.”   \n But if you feel hurt or think others are laughing at you instead of with you, then the joke has gone too far. If it continues even after you’ve asked the person to stop and you are still feeling upset about it, then this could be bullying.\n And when the bullying takes place online, it can result in unwanted attention from a wide range of people including strangers. Wherever it may happen, if you are not happy about it, you should not have to stand for it.\n Call it what you will – if you feel bad and it doesn’t stop, then it’s worth getting help. Stopping cyberbullying is not just about calling out bullies, it’s also about recognizing that everyone deserves respect – online and in real life."],
  ["All friends joke around with each other, but sometimes it’s hard to tell if someone is just having fun or trying to hurt you, especially online. Sometimes they’ll laugh it off with a “just kidding,” or “don’t take it so seriously.”   \n But if you feel hurt or think others are laughing at you instead of with you, then the joke has gone too far. If it continues even after you’ve asked the person to stop and you are still feeling upset about it, then this could be bullying.\n And when the bullying takes place online, it can result in unwanted attention from a wide range of people including strangers. Wherever it may happen, if you are not happy about it, you should not have to stand for it.\n Call it what you will – if you feel bad and it doesn’t stop, then it’s worth getting help. Stopping cyberbullying is not just about calling out bullies, it’s also about recognizing that everyone deserves respect – online and in real life."],
  ["It's hard to tell but You can ask/tell me 'The difference between joke and bullying'"],
  ["When bullying happens online it can feel as if you’re being attacked everywhere, even inside your own home. It can seem like there’s no escape. The effects can last a long time and affect a person in many ways: \nMentally — feeling upset, embarrassed, stupid, even angry\nEmotionally — feeling ashamed or losing interest in the things you love\nPhysically — tired (loss of sleep), or experiencing symptoms like stomach aches and headaches\nThe feeling of being laughed at or harassed by others, can prevent people from speaking up or trying to deal with the problem. In extreme cases, cyberbullying can even lead to people taking their own lives.\nCyberbullying can affect us in many ways. But these can be overcome and people can regain their confidence and health."],
  ["If you think you’re being bullied, the first step is to seek help from someone you trust such as your parents, a close family member or another trusted adult.\nIn your school you can reach out to a counsellor, the sports coach or your favourite teacher.\nAnd if you are not comfortable talking to someone you know, search for a helpline in your country to talk to a professional counsellor.\nIf the bullying is happening on a social platform, consider blocking the bully and formally reporting their behaviour on the platform itself. Social media companies are obligated to keep their users safe.\nIt can be helpful to collect evidence – text messages and screen shots of social media posts – to show what’s been going on.\nFor bullying to stop, it needs to be identified and reporting it is key. It can also help to show the bully that their behaviour is unacceptable.\nIf you are in immediate danger, then you should contact the police or emergency services in your country."],
  ["If you are experiencing cyberbullying, speaking to a trusted adult – someone you feel safe talking to – is one of the most important first steps you can take.\nTalking to parents isn’t easy for everyone. But there are things you can do to help the conversation. Choose a time to talk when you know you have their full attention. Explain how serious the problem is for you. Remember, they might not be as familiar with technology as you are, so you might need to help them to understand what’s happening.\nThey might not have instant answers for you, but they are likely to want to help and together you can find a solution. Two heads are always better than one! If you are still unsure about what to do, consider reaching out to other trusted people. There are often more people who care about you and are willing to help than you might think!"],
  ["Anyone can become a victim of cyberbullying. If you see this happening to someone you know, try to offer support.\nIt is important to listen to your friend. Why don’t they want to report being cyberbullied? How are they feeling? Let them know that they don’t have to formally report anything, but it’s crucial to talk to someone who might be able to help.\nRemember, your friend may be feeling fragile. Be kind to them. Help them think through what they might say and to whom. Offer to go with them if they decide to report. Most importantly, remind them that you’re there for them and you want to help.\nIf your friend still does not want to report the incident, then support them in finding a trusted adult who can help them deal with the situation. Remember that in certain situations the consequences of cyberbullying can be life threatening.\nDoing nothing can leave the person feeling that everyone is against them or that nobody cares. Your words can make a difference."],
  ["Being online has so many benefits. However, like many things in life, it comes with risks that you need to protect against.\nIf you experience cyberbullying, you may want to delete certain apps or stay offline for a while to give yourself time to recover. But getting off the Internet is not a long-term solution. You did nothing wrong, so why should you be disadvantaged? It may even send the bullies the wrong signal — encouraging their unacceptable behaviour. \nWe all want cyberbullying to stop, which is one of the reasons reporting cyberbullying is so important. But creating the Internet we want goes beyond calling out bullying. We need to be thoughtful about what we share or say that may hurt others. We need to be kind to one another online and in real life. It's up to all of us!"],
  ["Think twice before posting or sharing anything online – it may stay online forever and could be used to harm you later. Don’t give out personal details such as your address, telephone number or the name of your school.\nLearn about the privacy settings of your favourite social media apps. Here are some actions you can take on many of them: \nYou can decide who can see your profile, send you direct messages or comment on your posts by adjusting your account privacy settings. \nYou can report hurtful comments, messages and photos and request they be removed.\nBesides ‘unfriending’, you can completely block people to stop them from seeing your profile or contacting you.\nYou can also choose to have comments by certain people to appear only to them without completely blocking them.\nYou can delete posts on your profile or hide them from specific people. \nOn most of your favourite social media, people aren't notified when you block, restrict or report them."],
  ["Most schools take bullying seriously and will take action against it. If you are being cyberbullied by other students, report it to your school.\nPeople who are victims of any form of violence, including bullying and cyberbullying, have a right to justice and to have the offender held accountable.  \nLaws against bullying, particularly on cyberbullying, are relatively new and still do not exist everywhere. This is why many countries rely on other relevant laws, such as ones against harassment, to punish cyberbullies.  \nIn countries that have specific laws on cyberbullying, online behaviour that deliberately causes serious emotional distress is seen as criminal activity. In some of these countries, victims of cyberbullying can seek protection, prohibit communication from a specified person and restrict the use of electronic devices used by that person for cyberbullying, temporarily or permanently.\nHowever, it is important to remember that punishment is not always the most effective way to change the behaviour of bullies. It is often better to focus on repairing the harm and mending the relationship."],
  ["Internet companies are increasingly paying attention to the issue of online bullying.\nMany of them are introducing ways to address it and better protect their users with new tools, guidance and ways to report online abuse.\nBut it is true that even more is needed. Many young people experience cyberbullying every day. Some face extreme forms of online abuse. Some have taken their own lives as a result.\nTechnology companies have a responsibility to protect their users especially children and young people.\nIt is up to all of us to hold them accountable when they’re not living up to these responsibilities."],
  ["Each social platform offers different tools (see available ones below) that allow you to restrict who can comment on or view your posts or who can connect automatically as a friend, and to report cases of bullying. Many of them involve simple steps to block, mute or report cyberbullying. We encourage you to explore them.\nSocial media companies also provide educational tools and guidance for children, parents and teachers to learn about risks and ways to stay safe online.  \nAlso, the first line of defense against cyberbullying could be you. Think about where cyberbullying happens in your community and ways you can help – by raising your voice, calling out bullies, reaching out to trusted adults or by creating awareness of the issue. Even a simple act of kindness can go a long way.  \nIf you are worried about your safety or something that has happened to you online, urgently speak to an adult you trust. Many countries have a special helpline you can call for free and talk to someone anonymously. Visit childhelplineinternational.org to find help in your country."],
  ["Harassment (also known as cyber harassment) is the use of email, instant messaging, and websites to bully or harass an individual or group through personal attacks. Harassment can be in the form of derogatory or insulting comments made in chat rooms, e-mail, block postings or comments on social networking sites. Those responsible for harassment are often difficult to track as the perpetrator is often anonymous. Harassment is very difficult to verify because we often do not understand the history or context of the situation. For purposes of this FAQ, consider harassment to include communication between adults."],
  ["Please visit this site for additional useful information about bullying: http://www.microsoft.com/about/corporatecitizenship/en-us/youthspark/youthsparkhub/programs/onlinesafety/\nThere are many web service resources on the World Wide Web you can try, including:\nwww.bullying.org\nhttp://cyberbullying.us\nhttp://www.bullybust.org/resources/key_resources"]
]

// Random for any other user input

const alternative = [
  "Sorry I didn't understand but here's a answer from google : \n"
  // "Same",
  // "Go on...",
  // "Bro...",
  // "Try again",
  // "I'm listening...",
  // "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
