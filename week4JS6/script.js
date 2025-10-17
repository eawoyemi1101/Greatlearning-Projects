// Function to handle user registration
function register() {
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const user = { fullname, username, email, contact, password };
    localStorage.setItem(username, JSON.stringify(user));
    alert('Registration successful');
    window.location.href = 'signin.html';
}

// Function to handle user sign-in
function signIn() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}

// Function to handle logout
function logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'signin.html';
}

// Function to load content on the home page
function loadContent() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        loadSignInPage();
        return;
    }

    fetchAndLoadData();
}

// Function to fetch and load data
async function fetchAndLoadData() {
    try {
        const urls = fetchURLs();
        const listElements = loadListElements();
        
        for (const [key, url] of Object.entries(urls)) {
            const data = await fetchData(url);
            displayData(data, listElements[key]);
        }
    } catch (error) {
        console.error('Error fetching and loading data:', error);
    }
}

// Function to fetch data from an API
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

// Function to display fetched data
function displayData(data, listElement) {
    data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="purple" alt="${item.name}"> ${item.name}`;
        listElement.appendChild(li);
    });
}

// Function to fetch URLs
function fetchURLs() {
    return {
        cuisines: 'https://foodorder-api-elti.onrender.com/v1/cuisines',
        categories: 'https://foodorder-api-elti.onrender.com/v1/categories',
        restaurants: 'https://foodorder-api-elti.onrender.com/v1/restaurants'
    };
}

// Function to fetch list elements
function loadListElements() {
    return {
        cuisines: document.getElementById('cuisine-list'),
        categories: document.getElementById('category-list'),
        restaurants: document.getElementById('restaurant-list')
    };
}

// Function to load the sign-in page
function loadSignInPage() {
    window.location.href = 'signin.html';
}
