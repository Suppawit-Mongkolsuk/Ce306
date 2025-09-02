const Student = [
    {
        name:"Title",
        grade:"Grade:A"
    },
    {
        name:"Gus",
        grade:"Grade:F"
    },
    {
        name:"Boss",
        grade:"Grade:A"
    }
];

Student.forEach(function(student,index)  {
    console.log(`Student ${index + 1}:${student.name} ${student.grade}`)
});


function showStudentCount() {
    console.log("Total students:"+Student.length+"คน");
}

showStudentCount()

w