var reasons = [

"you always make me laugh", "you make me happier than words can explain", 
"you can make me feel better about myself when I feel low", "you are so goddamn cute",
"you are the sweetest", "you are a gentleman (no fedora shit)", "you are beautiful",
"you are sexy as hell", "you exude big dick energy", "you show me so much love", 
"you care about me", "you take care of me even though I'm high maintenance", 
"you take care of me even when it's hard", "you let me take care of you", 
"you make me feel special", "you are loyal", "you are funny", "we understand each other",
"we get along", "even when we fight, I know you care about me", "your head game is absolutely unbelievable",
"you are incredibly intelligent", "we have fun together", "your dick is HUGE",
"we have great conversations together", "you give me a different perspective",
"we don't always agree, but we can always discuss something", "your tummy",
"you allowed me to love sex", "you take great naps with me", "you give really great hugs", 
"my mom loves you", "you get along with my family", "holding your hand is one of the greatest pleasures",
"you are a great cuddler", "you are an incredibly skilled musician", "I can see a future with you",
"you understand my mental health and try your best to help me cope",
"you have a beautiful back", "you have a great butt :)", "you have really nice legs",
"your tummy is cute, beautiful, and manly all in one", "I love your body hair even though everyone elses' grosses me out",
"your strong arms", "you carry me up the stairs", "you are a sex god", 
"you are compassionate", "you make a genuine effort to improve yourself as a person",
"I am honored to watch you grow as a person and become an adult", "you trust me",
"you are my best friend", "you confide in me even though it's hard", 
"you can make me giggle even when I'm crying", "your lizard impression is the best", 
"you are my lil puppy", "your puppy impression makes me melt", "you put me on to spirit blacks",
"you have the best lap for lap sits", "your shoulders are super sexy", 
"you are a lovely singer", "you support my interests and dreams", "you are photogenic", 
"you let me take your phone and take pictures", "you tell me I'm doing well at FIFA even when I'm not",
"you put me on to soccer", "you hype me up", "you are one of the best people I've ever met",
"you make me proud every single day", "I can't wait to see what you do in the future",
"you are resourceful", "you are a dream come true", "you make me cum"


]

function newReason () {
    var randomNumber = Math.floor(Math.random() * reasons.length);
    document.getElementById("reasonGenerator").innerHTML = reasons[randomNumber];
}









