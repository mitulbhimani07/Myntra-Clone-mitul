$(document).ready(function() {
    // Remove address card
    $(document).on('click', '.btn-remove', function() {
        $(this).closest('.address-card').remove();
    });

    // Edit address card (simple alert for demo purposes)
    $(document).on('click', '.btn-edit', function() {
        alert('Edit functionality to be implemented.');
    });

    // Add new address card
    $('.add-new-address').click(function() {
        const newCard = `
        <div class="address-card">
            <div class="d-flex justify-content-between align-items-center">
                <span class="name">New Name</span>
                <span class="home-tag">HOME</span>
            </div>
            <div class="address">New Address</div>
            <div class="mobile">Mobile: <strong>0000000000</strong></div>
            <div class="pay-on-delivery">• Pay on Delivery available</div>
            <div class="mt-3">
                <button class="btn btn-outline-danger btn-remove">REMOVE</button>
                <button class="btn btn-outline-secondary btn-edit">EDIT</button>
            </div>
        </div>`;
        $(this).before(newCard);
    });
});