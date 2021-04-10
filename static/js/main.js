var curr_value = 0,
    curr_index = 0,
    char = "";

showSlides();

function showSlides() {
    delay_time = 100
    quality = ["Software Developer", "Web Designer", "Python Developer", "Freelancer"]
    char += quality[curr_value][curr_index]
    $(".type_quality").text(char)
    curr_index += 1
    if (quality[curr_value].length === curr_index) {
        curr_value += 1
        if (curr_value === quality.length) {
            curr_value = 0
        }
        curr_index = 0
        char = ""
        delay_time = 3000
    }
    setTimeout(showSlides, delay_time);
}