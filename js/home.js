showMessage("Summer Sale"); // function definied in util.js
changePercentOff(30);

const btn = document.getElementById('see-review');
btn.addEventListener('click', function() {
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')){
        review.classList.remove('d-none');
        btn.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        btn.textContent = 'SEE REVIEW';
    }
});
