let color_picked = '#eb36d8';

const neon_input = document.querySelector('#neon_input');
const input_color_picker = document.querySelector('#color_picker');

input_color_picker.addEventListener('change',  () => {
    color_picked = input_color_picker.value;
    neon_input.style.borderColor = '#ffffff';
    neon_input.style.boxShadow = 'none';
});

neon_input.addEventListener('focus', () => {
    neon_input.style.borderColor = color_picked;
    neon_input.style.boxShadow = `0px 0px 16px 1px ${color_picked}`;
});