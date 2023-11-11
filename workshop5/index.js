let products = [];
const getData = () => {
    fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => (products = data));
};
