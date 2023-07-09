function openModal() {
    var modalOverlay = document.getElementById('modalOverlay');
    var modal = document.getElementById('modal');
    var body = document.getElementsByTagName('body')[0];

    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
    body.classList.add('modal-open');
}

function closeModal() {
    var modalOverlay = document.getElementById('modalOverlay');
    var modal = document.getElementById('modal');
    var body = document.getElementsByTagName('body')[0];

    modalOverlay.style.display = 'none';
    modal.style.display = 'none';
    body.classList.remove('modal-open');
}