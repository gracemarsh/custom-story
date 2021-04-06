// 1. Declare variables and capture input.

const name = prompt("What would you like your protagonist to be called?");
const magicObject = prompt("Type in the name of a random household item ...");
const steps = prompt("Choose a number between 1-10...");
const years = prompt("Choose a number between 1000-9999");
const insect = prompt("What's your favourite insect?");
const genie = prompt("What's the name of your best friend?");

// 2. Combine the input with other words to create a story.

const story = `<p>One blustery day ${name} was walking to school and chanced upon a mysterious looking ${magicObject}. This ${magicObject} seemed to be twinkly in a magical sort of way. ${name} reached down and picked up the ${magicObject} and took a closer look. Suddenly the ${magicObject} began shaking and a billowing cloud appeared. ${name} dropped the ${magicObject} in surprise and took ${steps} steps back. Suddenly a loud voice boomed from the ${magicObject} and said "FINALLY I AM FREE. It's been ${years} and this ${magicObject} ain't no five-star hotel." The magical figure from the ${magicObject} then looked down at ${name}, who by comparison looked like a tiny ${insect}, and said, "What's your name human?" About to wet themself, ${name} shakily replied, "${name}, and who are you? Or... what are you?" The magical figure then shrunk down to a normal human size and introduced himself as ${genie}. Then ${genie} said in a booming voice, almost like a game show host, "Well, today's your lucky day lil "${name}! In return for freeing me from my prison, I will grant you one of your heart's desires today." ${name}'s ears perked up and they replied "Like a wish?". "That's right. Tell me what you want, what you really, really want. And I can make it come true for you. Just beware, for with every wish there comes a price." ${name} started thinking about everything they could wish for, fame, power, wealth and then one little thought crosses their mind. "I know what I want. I would like for my grandma to get better." ${genie} replied, "Consider it done." Then disappeared in a flash of sparkles.  Standing there in disbelief ${name} ran all the way to the hospital to see if grandma had been miraculously healed. When ${name} ran to room 104 in the cancer ward they fell to their knees as they saw mum and dad surrounding grandma's bed in tears. Grandma was gone.  With hot tears running down their face ${name} ran out of the hospital and into the street wondering why ${genie} had lied. In fact, ${genie} had not lied and had granted ${name}'s wish. From that day on, in all their writing, speeches, and even twitter posts, ${name} had perfect grammar. Moral of the story? Avoid misunderstandings, make an effort to pronounce words clearly.</p>`

console.log(story);

// 3. Display the story as a <p> inside the <main> element.

document.querySelector("main").innerHTML = story;