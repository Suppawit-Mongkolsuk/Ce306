const student = [
    {name:"A",score:76},
    {name:"B",score:59},
    {name:"C",score:49},
    {name:"D",score:70},
    {name:"E",score:82},
    {name:"F",score:86}
];
function filterPassedStudents(minScore){
    student.forEach(function(student){
        if (student.score >= minScore){
            console.log(`นาย:${student.name} passed with score: ${student.score}`)
        }
    })
}

filterPassedStudents(10)