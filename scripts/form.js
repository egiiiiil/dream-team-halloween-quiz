//this file sends data to html

/* 

*can be stored in a separate js file to avaid merge conflicts
categoryA [list of movies from cat. A]
categoryB [list of movies from cat. B]
categoryC [list of movies from cat. C]
categoryD [list of movies from cat. D]



starting page:
create form in js with input field for user name and submit button w/ text "start the quiz"
show the submit form
ON SUBMIT:
    read the input value 
    save input to variable userName
    send userName to firebase / new id is created in firebase and linked to that name
THEN scroll to first question


questions and answers:
ON LOAD {
    GET text(answers and questions) from firebase 
    FOR each question fetched from firebase
    GET 4 buttons (create element)
    FOR each button populate with answer
}


register click
    send answers to array answerArray (on client js side) 
    animation to indicate click
    delay before scroll, 
    scroll 100vh to next question

press send/get result
calculate from array answerArray which category is highest
get category 
save category to variable quizResult
send variable quizResult to firebase
scroll down to result page

result page:
GET result from 
IF quizResult = A, show random movie from array CategoryA 
ELSE IF quizResult = B, show random movie from array CategoryB
ELSE IF quizResult = C, show random movie from array CategoryC
ELSE quizResult = D, show random movie from array CategoryD

SEND id from movie to api


*/