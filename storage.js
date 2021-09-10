const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;


    //
    if (id && value) {
        localStorage.setItem(id, value);
    }

    localStorage.setItem("an array", JSON.stringify(arr));
    localStorage.setItem('an obj', JSON.stringify(obj));


    idInput.value = '';
    valueInput.value = '';
}
const arr = [45, 12, 36];
const obj = {
    name: 'fahim',
    age: 21,
    profession: 'web dev'
}