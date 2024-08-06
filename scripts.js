document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('[data-toggle="payment"]');
    const paymentOptions = document.querySelectorAll('.payment-option');

    items.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            items.forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            this.classList.add('active');

            // Hide all payment options
            paymentOptions.forEach(option => option.classList.add('d-none'));
            // Show the targeted payment option
            const target = document.querySelector(this.dataset.target);
            target.classList.remove('d-none');
        });
    });
});



