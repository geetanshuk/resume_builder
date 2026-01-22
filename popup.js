jobDesc = document.getElementById('jd');
//document.getElementById('resume').addEventListener('click', resume);
jobDesc.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("hi")
    // run any logic
    const jdInput = jd.elements.fname.value;
    console.log(jdInput);
    extractkeywords();
    // Then submit the form programmatically
    //jd.submit();
});

function extractkeywords() {
    
}

function resume() {
    alert("Upload resume clicked");
}