const stripHtmlFormQuestion = (question) => {

    const div = document.createElement('div');
    div.innerHTML = question;
    const questionText = div.textContent || div.innerText || "";

    return questionText;

};

export { stripHtmlFormQuestion };