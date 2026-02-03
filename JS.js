let selectedSentence = [];
let authenticatedUser = null;

function showLogin() {
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function showSignup() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
}

function goBack() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.add('hidden');
    document.querySelector('.auth-options').classList.remove('hidden');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple client-side authentication
    if (username === "user" && password === "password") {
        authenticatedUser = username;
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('category').classList.remove('hidden');
    } else {
        alert("Invalid credentials");
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Simple client-side signup (storing in local storage)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    authenticatedUser = username;
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('category').classList.remove('hidden');
}

function logout() {
    authenticatedUser = null;
    document.getElementById('category').classList.add('hidden');
    document.getElementById('auth').classList.remove('hidden');
    document.querySelector('.auth-options').classList.remove('hidden');
}
function selectCategory(category) {
    document.getElementById('category').classList.add('hidden');
    document.getElementById('pictures').classList.remove('hidden');

    const pictureList = document.getElementById('picture-list');
    pictureList.innerHTML = '';

    let pictures;
    switch (category) {
        case 'CreateCard':
            pictures = [{ name: 'Create your own card', src: 'path/to/create_card_image.jpg' }];
            break;
        case 'Verb':
           pictures = [
                { name: 'Want', src:'https://images.unsplash.com/photo-1524677380467-30abe3c55345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDY2NzN8&ixlib=rb-4.0.3&q=80&w=400' },
             { name: 'Is', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZYCoNhl4h1-Q9NWAqf2PO4O-zz4N-PIJ5g&s' },
             { name: 'Am', src:'https://i.ytimg.com/vi/WJomEny3pis/maxresdefault.jpg' },
             { name: 'Like', src:'https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg?wp=1&w=1084.125&h=609' },
             { name: 'Yes', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykWnY6NIcg7CZ5QIZXssv3RwXyjbonj6aYg&s' },
             { name: 'No', src:'https://img.freepik.com/premium-photo/traffic-icon_1263326-66061.jpg' },
             { name: 'feel', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Sl_q1aiqn6NPEEv0awXq2JsGo7PZfpVyiIa_bWoao2pNKwfxDB_iyKBcSxcYYxmuHk&usqp=CAU' }
             ];
             break;
        case 'Food':
            pictures = [
                { name: 'Bread', src: 'https://images.unsplash.com/photo-1505491589101-5c7976eeb482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDAxNzh8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Noodles', src: 'https://images.unsplash.com/photo-1518536671722-8fa717aafde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDAyNzB8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Chapati', src: 'https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDAzMDF8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Rice', src: 'https://images.unsplash.com/photo-1670518044782-92c72b2c71d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDAzMjZ8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Chocolates', src: 'https://images.unsplash.com/photo-1486845678663-56f8b786a89f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDAzNzd8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Juice', src: 'https://images.unsplash.com/photo-1524439786248-e168955562d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA0MDN8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Water', src: 'https://images.unsplash.com/photo-1640375022816-32fa22ecb747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA0MzF8&ixlib=rb-4.0.3&q=80&w=400' }
            ];
            break;
        case 'People':
            pictures = [
                { name: 'I', src: 'https://cdn.prod.website-files.com/6391e721afddd644cb772637/642b3a2e9bd04833fc47f04e_pick-me.webp' },
                { name: 'We', src: 'https://www.mediavine.com/wp-content/uploads/2020/06/wswy-800px-2.jpg.webp' }, 
                { name: 'My', src: 'https://slideplayer.com/slide/1607663/6/images/7/my+Word+list+A.jpg' },
                { name: 'He', src: 'https://menshaircuts.com/wp-content/uploads/2024/08/tp-boys-haircuts.jpg' },
                { name: 'She', src: 'https://m.media-amazon.com/images/M/MV5BNTc3N2EyNWItOTIwNC00ZTZmLWFlM2QtM2QzMjY2MWEzNzNjXkEyXkFqcGc@._V1_.jpg' },
                { name: 'It', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVFaUCT7zF2MMN-gdXd000v5KZ8DMW1Jtrw&s' },
                { name: 'They', src: 'https://www.dictionary.com/e/wp-content/uploads/2020/09/20200914_they_1000x700-1.png' }
            ];
            break;
        case 'Animals':
            pictures = [
                { name: 'Dog', src: 'https://images.unsplash.com/photo-1524641234638-4c303747c310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA2MTd8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Cat', src: 'https://images.unsplash.com/photo-1496522650602-5988dce09660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA2NTF8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Crow', src: 'https://images.unsplash.com/photo-1618422962576-5b3fccfb071d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA2Nzd8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Cow', src: 'https://images.unsplash.com/photo-1535376311202-25673871a926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA3MDF8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Goat', src: 'https://images.unsplash.com/photo-1534941725085-38c6e5f65f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA3MjJ8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Squirrel', src: 'https://images.unsplash.com/photo-1645729404951-4da4bee5b13d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA3NDl8&ixlib=rb-4.0.3&q=80&w=400' },
                { name: 'Lion', src: 'https://images.unsplash.com/photo-1486667970798-b29d1090ff95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYwNDA3Nzd8&ixlib=rb-4.0.3&q=80&w=400' }
            ];
            break;
        case 'Body':
            pictures = [
                { name: 'Hand', src: 'https://images.unsplash.com/photo-1530227660117-9acaaf3a67af?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5Mzg5MDN8&ixlib=rb-4.0.3&q=85' },
              { name: 'Leg', src: 'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MzkyNjV8&ixlib=rb-4.0.3&q=85' },
              { name: 'Head', src: 'https://images.unsplash.com/photo-1576294858573-7d5e8134702f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTQ0NDV8&ixlib=rb-4.0.3&q=85' },
              { name: 'Eyes', src: 'https://images.unsplash.com/photo-1615652431553-6e2a40ff06cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTQ1NTl8&ixlib=rb-4.0.3&q=85' },
              { name: 'Lips', src: 'https://images.unsplash.com/photo-1584457361626-06effef61a7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTQ2MTN8&ixlib=rb-4.0.3&q=85' },
              { name: 'Hair', src: 'https://images.unsplash.com/photo-1605980625600-88b46abafa8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTQ3Mzd8&ixlib=rb-4.0.3&q=85' },
              { name: 'Hair', src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzUzMTh8&ixlib=rb-4.0.3&q=85' }
              ];
              break;
        case 'Clothes':
            pictures = [
                { name: 'Shirt', src: 'https://images.unsplash.com/photo-1717127354833-e4d10625d3e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTQ4NjZ8&ixlib=rb-4.0.3&q=85' },
              { name: 'Gown',src: 'https://images.unsplash.com/photo-1656574780557-c0fa5e447c29?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTQ5ODZ8&ixlib=rb-4.0.3&q=85' },
              { name: 'Pants', src: 'https://images.unsplash.com/photo-1542574621-e088a4464f7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTUwMzl8&ixlib=rb-4.0.3&q=85' },
              { name: 'Skirt', src: 'https://images.unsplash.com/photo-1556747439-3b96858b9d8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTUxMzN8&ixlib=rb-4.0.3&q=85' },
              { name: 'Top', src: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTUyMTV8&ixlib=rb-4.0.3&q=85' },
              { name: 'Shoes', src: 'https://images.unsplash.com/photo-1579446650032-86effeeb3389?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTUzMjR8&ixlib=rb-4.0.3&q=85' },
              { name: 'Flip Flops', src: 'https://images.unsplash.com/photo-1607958674115-05b24858a945?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTU1MjJ8&ixlib=rb-4.0.3&q=85' }
              ];
              break;
        case 'Location':
            pictures = [
                { name: 'Home', src: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTU1OTN8&ixlib=rb-4.0.3&q=85' },
              { name: 'Toilet',src: 'https://images.unsplash.com/photo-1656646523886-2a2e2fc438d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTU2MzN8&ixlib=rb-4.0.3&q=85' },
              { name: 'Bathroom', src: 'https://images.unsplash.com/photo-1623114112821-08b8c8d4e42d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTU2OTZ8&ixlib=rb-4.0.3&q=85' },
              { name: 'School', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTU4MDB8&ixlib=rb-4.0.3&q=85' },
              { name: 'Park', src: 'https://images.unsplash.com/photo-1636044399257-e820cc11ebaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTU5NDh8&ixlib=rb-4.0.3&q=85' },
              { name: 'Restaurant', src: 'https://images.unsplash.com/photo-1494346480775-936a9f0d0877?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTYwNTJ8&ixlib=rb-4.0.3&q=85' },
              { name: 'Swimming Pool', src: 'https://images.unsplash.com/photo-1509577330292-0532d33c053e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5OTYxODN8&ixlib=rb-4.0.3&q=85' }
              ];
              break;
        case 'Time':
            pictures = [
                { name: 'Morning', src: 'https://images.unsplash.com/photo-1518007053594-fa70a4717f43?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzU3Njh8&ixlib=rb-4.0.3&q=85' },
              { name: 'Afternoon', src: 'https://images.unsplash.com/photo-1489945891631-ec3f0d557901?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzY0NTZ8&ixlib=rb-4.0.3&q=85' },
              { name: 'Evening', src: 'https://images.unsplash.com/photo-1619387897882-56cedf760e42?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzU4MzV8&ixlib=rb-4.0.3&q=85' },
              { name: 'Midnight', src: 'https://images.unsplash.com/photo-1502218670253-c4193007b068?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzY1MzN8&ixlib=rb-4.0.3&q=85' }
              ];
              break;
        case 'Action':
            pictures = [
                { name: 'Run', src: 'https://images.unsplash.com/photo-1542173840-8b47ae33a715?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzY3NDh8&ixlib=rb-4.0.3&q=85' },
              { name: 'Talk', src: 'https://images.unsplash.com/photo-1592829238140-d5b194da621f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzg4MjN8&ixlib=rb-4.0.3&q=85' },
              { name: 'Play', src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzg5MDd8&ixlib=rb-4.0.3&q=85' },
              { name: 'Eat', src: 'https://images.unsplash.com/photo-1544829832-c8047d6b9d89?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzkwMDR8&ixlib=rb-4.0.3&q=85' },
              { name: 'Walk', src: 'https://images.unsplash.com/photo-1540660183014-f456819b8cdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzkwNjF8&ixlib=rb-4.0.3&q=85' },
              { name: 'Drink', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHdRtXF-Yl0DmDWNZSK3cnYN8EDZ1QQhBnQ&s' },
              { name: 'Reading', src: 'https://images.unsplash.com/photo-1666888736026-62d89f6cc7a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxMzg5MDd8&ixlib=rb-4.0.3&q=85' }
              ];
              break;
        case 'Feeling':
            pictures = [
                { name: 'Happy', src: 'https://images.unsplash.com/photo-1500771181897-517651ae4eda?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxNDA0NDV8&ixlib=rb-4.0.3&q=85' },
              { name: 'Sad', src: 'https://images.unsplash.com/photo-1594053722286-bbc4ad2decf3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxNDA2MjB8&ixlib=rb-4.0.3&q=85' },
              { name: 'Hungry', src: 'https://www.shutterstock.com/image-vector/man-hungry-wants-eat-hand-260nw-2289601749.jpg' },
              { name: 'Angry', src: 'https://images.unsplash.com/photo-1603815671596-31aa538d8809?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxNDA2OTV8&ixlib=rb-4.0.3&q=85' },
              { name: 'Scared', src: 'https://images.unsplash.com/photo-1545671651-123c322b7f47?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxNDA3Nzl8&ixlib=rb-4.0.3&q=85' },
              { name: 'Paining', src: 'https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/blogs/May2024/4kFgwozWcQW272rOkww4.webp' },
              { name: 'Sleepy', src: 'https://images.unsplash.com/photo-1676664489194-ac4c0ded0a05?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgxNDA5MjN8&ixlib=rb-4.0.3&q=85' }
              ];
              break;
        default:
            pictures = [];
            break;
    }

    pictures.forEach(pic => {
        const img = document.createElement('img');
        img.alt = pic.name;
        img.src = pic.src;
        img.onclick = () => addPictureToSentence(pic.name, pic.src); // Pass src
        pictureList.appendChild(img);
    });
}

function goBackToCategory() {
    document.getElementById('pictures').classList.add('hidden');
    document.getElementById('category').classList.remove('hidden');
}

function addPictureToSentence(name, src) {
    const sentenceDiv = document.getElementById('sentence');
    const img = document.createElement('img');
    img.alt = name;
    img.src = src; // Set src for the sentence
    img.onclick = () => removePictureFromSentence(img);
    sentenceDiv.appendChild(img);

    selectedSentence.push(name); // Assuming `selectedSentence` is an array

    document.getElementById('sentence-formation').classList.remove('hidden');
}

function removePictureFromSentence(img) {
    img.remove();
    const index = selectedSentence.indexOf(img.alt);
    if (index > -1) {
        selectedSentence.splice(index, 1);
    }
}

function playSentence() {
    const sentence = selectedSentence.join(' ');
    const utterance = new SpeechSynthesisUtterance(sentence);
    speechSynthesis.speak(utterance);
}

function clearSentence() {
    const sentenceDiv = document.getElementById('sentence');
    sentenceDiv.innerHTML = '';
    selectedSentence = [];
    document.getElementById('sentence-formation').classList.add('hidden');
}

function goBackToPictures() {
    document.getElementById('sentence-formation').classList.add('hidden');
    document.getElementById('pictures').classList.remove('hidden');
}

function saveSettings() {
    alert('Settings saved!');
}

function saveData() {
    alert('Data saved!');
}

function shareData() {
    alert('Data shared!');
}

function speakDescription() {
    const description = document.getElementById('description').textContent;
    const utterance = new SpeechSynthesisUtterance(description);
    speechSynthesis.speak(utterance);
}
