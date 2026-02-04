// ==========================================
// 1. DADOS DOS PRODUTOS
// ==========================================
const actionFigures = [
    {
        id: 1,
        name: "Iron Man - Model IV",
        description: "Escala 1/10 - Marvel Comics",
        price: 2599.99,
        images: [
            "https://m.media-amazon.com/images/I/612fwlNcZhS._AC_UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/61Vx2TWNlqS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61U9j1fPocS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61C8d6115RS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61K75tGyvTS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51rtTrNXxUS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61cvTyuTPmS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61UE+XoP4LS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61if0gGr09S._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61tvhBYZXmS._AC_SL1000_.jpg",
        ]
    },
    {
        id: 2,
        name: "Estátua Darth Vader",
        description: "Escala 1/10 - Star Wars - Mythos",
        price: 8299.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/7369142_1024x1024.jpg?v=1765823263",
            "https://ironstudios.com.br/cdn/shop/files/7369143_1024x1024.jpg?v=1765823263",
            "https://ironstudios.com.br/cdn/shop/files/7369144_1024x1024.jpg?v=1765823263",
            "https://ironstudios.com.br/cdn/shop/files/7369148_1024x1024.jpg?v=1765823263",
            "https://ironstudios.com.br/cdn/shop/files/7369141_1024x1024.jpg?v=1765823263",
            "https://ironstudios.com.br/cdn/shop/files/7369146_1024x1024.jpg?v=1765823263",
        ]
    },
    {
        id: 3,
        name: "Estátua Batman Trinity",
        description: "Escala 1/4 - DC Comics - Legacy",
        price: 10599.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090986_2_3a166793-5535-4000-97e2-c1d26cd1dc33_1024x1024.jpg?v=1757558786",
            "https://ironstudios.com.br/cdn/shop/files/090986_3_d30eb4f5-367c-4306-8f0d-5a6693fe1a73_1024x1024.jpg?v=1757558786",
            "https://ironstudios.com.br/cdn/shop/files/090986_4_de6eae2c-4143-432c-a93d-cea440fd57fc_1024x1024.jpg?v=1757558787",
            "https://ironstudios.com.br/cdn/shop/files/090986_6_15c52861-049a-49a9-819f-10eb6bb26280_1024x1024.jpg?v=1757558786",
            "https://ironstudios.com.br/cdn/shop/files/090986_8_bf5ecf25-b77a-403d-9dbb-562d7b780df1_1024x1024.jpg?v=1757558786",
            "https://ironstudios.com.br/cdn/shop/files/090986_11_1024x1024.jpg?v=1757558786",
        ]
    },
    {
        id: 4,
        name: "Estátua Spider-Man Classic",
        description: "Escala 1/10 - Gamerverse",
        price: 2699.99,
        images: [
            "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912902/spider-man_marvel_gallery_655409babf370.jpg",
            "https://ironstudios.com.br/cdn/shop/files/6898429_4dadc766-397b-4ab7-905c-b3181a093327_1024x1024.png?v=1767632863",
        ]
    },
    {
        id: 5,
        name: "Captain America - Infinity Gauntlet",
        description: "BDS Art Scale 1/10 - Iron Studios",
        price: 12299.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090859_6_1024x1024.jpg?v=1754163324",
            "https://ironstudios.com.br/cdn/shop/files/090859_10_1024x1024.jpg?v=1754163324",
            "https://ironstudios.com.br/cdn/shop/files/090859_7_2dd6cc7d-82a8-42b5-851a-db22076ecaa4_1024x1024.jpg?v=1754163324",
            "https://ironstudios.com.br/cdn/shop/files/090859_8_1024x1024.jpg?v=1754163324",
            "https://ironstudios.com.br/cdn/shop/files/090859_9_255cec19-7a14-472d-ae1b-cc048aa95af6_1024x1024.jpg?v=1754163324",
            "https://ironstudios.com.br/cdn/shop/files/090859_2_1024x1024.jpg?v=1754163323",
            "https://ironstudios.com.br/cdn/shop/files/090859_3_87aa2689-69ff-469a-93f3-83f53d9da71f_1024x1024.jpg?v=1754163323",
            "https://ironstudios.com.br/cdn/shop/files/090859_4_1024x1024.jpg?v=1754163324",
            "https://ironstudios.com.br/cdn/shop/files/090859_5_1024x1024.jpg?v=1754163325",

        ]
    },
    {
        id: 6,
        name: "Estátua Wolverine",
        description: "Escala 1/4 - Classic Suit",
        price: 13099.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/Photo_Comp_ab5eab49-85f7-4736-9c6f-7aaab6e7fe34_1024x1024.jpg?v=1764871563",
            "https://ironstudios.com.br/cdn/shop/files/01-Details_Color_fbe53175-b7c5-4945-a17c-01133be79856_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/01-Details_Grey_90eca3b1-57ed-4436-9afa-55e80ef4783b_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/01-Details_Grey_Bullets_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/01-Details_Grey_Head2_b36dad8b-3b19-45f9-b498-9df5994b0af2_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/02-Details_Color_c5b21d90-08b4-4d09-8310-92e3a39b2966_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/02-Details_Grey_5b5e67cc-569c-4d96-ade0-fbefcec75325_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/02-Details_Grey_Hand2_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/02-Details_Grey_Head2_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/03-Details_Color_e6235d59-cc34-4554-a6b0-158bfdccabd5_1024x1024.jpg?v=1764801016",
            "https://ironstudios.com.br/cdn/shop/files/03-Details_Grey_c3a7493d-57a8-4bf9-bef7-e2da8e0245d6_1024x1024.jpg?v=1764801016",
        ]
    },
    {
        id: 7,
        name: "Estátua Thor Avengers",
        description: "BDS Art Scale 1/10",
        price: 8499.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090818_0_1024x1024.jpg?v=1762226812",
            "https://ironstudios.com.br/cdn/shop/files/090818_6_1884646e-f6ab-4bff-951a-5faa19b5c8e1_1024x1024.jpg?v=1752566517",
            "https://ironstudios.com.br/cdn/shop/files/090818_3_0a12c1d6-a51b-4bec-a67d-4363115c816a_1024x1024.jpg?v=1752566517",
            "https://ironstudios.com.br/cdn/shop/files/090818_4_1024x1024.jpg?v=1752566517",
            "https://ironstudios.com.br/cdn/shop/files/090818_5_6ed09db6-76ea-41df-858d-7d027ffabf0f_1024x1024.jpg?v=1752566517",
        ]
    },
    {
        id: 8,
        name: "Estátua Venom",
        description: "Art Scale 1/10",
        price: 8299.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090710_2_832142df-5934-4764-a235-d844393e1a17_1024x1024.jpg?v=1753848739",
            "https://ironstudios.com.br/cdn/shop/files/090710_3_183d7b12-2807-495d-aafa-07928ee02735_1024x1024.jpg?v=1753848740",
            "https://ironstudios.com.br/cdn/shop/files/090710_4_1024x1024.jpg?v=1753848739",
            "https://ironstudios.com.br/cdn/shop/files/090710_5_1024x1024.jpg?v=1753848740",
            "https://ironstudios.com.br/cdn/shop/files/090710_6_1024x1024.jpg?v=1753848739",
            "https://ironstudios.com.br/cdn/shop/files/090710_7_21b71f45-c669-4e63-bfcf-39855dab0206_1024x1024.jpg?v=1753848739",
            "https://ironstudios.com.br/cdn/shop/files/090710_8_e6879800-e2ad-478b-9464-b5b61219198a_1024x1024.jpg?v=1753848739",
            "https://ironstudios.com.br/cdn/shop/files/090710_9_c4616e16-0868-4e68-98e1-ce41123d5e59_1024x1024.jpg?v=1753848740c",
            "https://ironstudios.com.br/cdn/shop/files/090710_10_1024x1024.jpg?v=1753848740",
            "https://ironstudios.com.br/cdn/shop/files/090710_13_1024x1024.jpg?v=1753848739",
        ]
    }
];

// ==========================================
// 2. LÓGICA DO SLIDER DE PRODUTOS
// ==========================================
const container = document.getElementById('products-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderProducts() {
    container.innerHTML = "";

    actionFigures.forEach(figure => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(figure.price);

        // GERA AS MINIATURAS (THUMBNAILS)
        let thumbsHTML = '';
        if (figure.images.length > 1) {
            thumbsHTML = `<div class="thumb-gallery">`;
            figure.images.forEach((imgUrl, index) => {
                const activeClass = index === 0 ? 'active' : '';
                thumbsHTML += `<img src="${imgUrl}" class="thumb-img ${activeClass}" data-index="${index}" alt="thumb">`;
            });
            thumbsHTML += `</div>`;
        } else {
            thumbsHTML = `<div class="thumb-gallery" style="opacity:0; pointer-events:none;"></div>`;
        }

        // MONTA O CARD
        card.innerHTML = `
            <div class="image-container">
                <img src="${figure.images[0]}" alt="${figure.name}" class="card-img" id="main-img-${figure.id}">
            </div>
            
            ${thumbsHTML}

            <div class="card-info">
                <h3>${figure.name}</h3>
                <p>${figure.description}</p>
                <div class="price">${formattedPrice}</div>
            </div>
        `;

        // --- LÓGICA DE TROCA DE IMAGEM ---
        if (figure.images.length > 1) {
            const mainImg = card.querySelector(`#main-img-${figure.id}`);
            const thumbs = card.querySelectorAll('.thumb-img');

            // 1. Ao passar o mouse na miniatura, troca a imagem
            thumbs.forEach(thumb => {
                thumb.addEventListener('mouseenter', () => {
                    const index = thumb.getAttribute('data-index');
                    mainImg.src = figure.images[index];

                    // Atualiza a borda ativa
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });

            // 2. [NOVO] Ao tirar o mouse do CARD, volta para a imagem padrão (0)
            card.addEventListener('mouseleave', () => {
                // Volta a imagem principal para a primeira (index 0)
                mainImg.src = figure.images[0];

                // Reseta a classe active para a primeira miniatura
                thumbs.forEach(t => t.classList.remove('active'));

                // Encontra a primeira miniatura e adiciona active
                const firstThumb = card.querySelector('.thumb-img[data-index="0"]');
                if (firstThumb) firstThumb.classList.add('active');
            });
        }

        container.appendChild(card);
    });
}

renderProducts();

// Scroll Manual
const scrollAmount = () => container.offsetWidth;
nextBtn.addEventListener('click', () => { container.scrollLeft += scrollAmount(); });
prevBtn.addEventListener('click', () => { container.scrollLeft -= scrollAmount(); });


// ==========================================
// 3. LÓGICA DO HERO BANNER (SLIDER TOPO)
// ==========================================

const heroImages = [
    'https://images.wallpapersden.com/image/download/spider-man-in-the-web-digital-art_bGhsbGmUmZqaraWkpJRobWllrWdma2U.jpg',
    'https://www.sideshow.com/wp/wp-content/uploads/2020/05/Wolverine-Bust-Theater-1.jpg',
    'https://mcfarlane.com/wp-content/uploads/2025/04/MarvelMay2025WebBanner1214x625.jpg',
];

const heroBgContainer = document.getElementById('hero-background-slider');
let currentHeroIndex = 0;

function initHeroSlider() {
    heroImages.forEach((imgSrc, index) => {
        const slide = document.createElement('div');
        slide.classList.add('hero-bg-slide');
        slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('${imgSrc}')`;
        if (index === 0) slide.classList.add('active');
        heroBgContainer.appendChild(slide);
    });
}

function rotateHeroImage() {
    const slides = document.querySelectorAll('.hero-bg-slide');
    slides[currentHeroIndex].classList.remove('active');
    currentHeroIndex = (currentHeroIndex + 1) % slides.length;
    slides[currentHeroIndex].classList.add('active');
}

initHeroSlider();
setInterval(rotateHeroImage, 5000);