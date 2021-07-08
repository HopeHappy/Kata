const instructorWithLongestName = instructors => {
    let lengthOfLongest = instructors[0]['name'].length;
    let indexs = [0];

    for (let i = 1; i < instructors.length; i++) {
        if (instructors[i]['name'].length > lengthOfLongest) {
            indexs.splice(0, indexs.length, i);
            lengthOfLongest = instructors[i]['name'].length;
        } else if (instructors[i]['name'].length === lengthOfLongest) {
            indexs.push(i);
        }
    }

    for (let index of indexs) {
        console.log(instructors[index]);
    }
}

instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
]);
instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
]);