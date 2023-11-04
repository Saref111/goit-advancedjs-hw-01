
import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const onInput = throttle((e) => {
    const feedback = {};
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => {
        feedback[name] = value;
    });
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}, 500);
const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
};

feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener('submit', onSubmit);

const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));

if (feedback) {
    const { email, message } = feedback;
    feedbackForm.elements.email.value = email;
    feedbackForm.elements.message.value = message;
}
