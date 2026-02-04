// DADOS DA COLEÇÃO COMPLETA (Com múltiplas imagens)
const catalog = [
    {
        id: 1,
        name: "Estátua Duende Verde - Spider-man vs Villains",
        category: "Iron Studios - 1/10",
        price: 16999.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090970_2_424d032e-9580-4a7d-a169-c3d0502540b3_1024x1024.jpg?v=1757559045",
            "https://ironstudios.com.br/cdn/shop/files/090970_3_b144cc6d-9398-42b9-9432-2affdafe178b_1024x1024.jpg?v=1757559046", // (Exemplo fictício para testar hover)
            "https://ironstudios.com.br/cdn/shop/files/090970_4_c8e7be25-ae00-4717-8bba-16f807806905_1024x1024.jpg?v=1757559045",
            "https://ironstudios.com.br/cdn/shop/files/090970_5_894b8767-ab32-4b9a-9499-904a55dd7514_1024x1024.jpg?v=1757559046",
            "https://ironstudios.com.br/cdn/shop/files/090970_6_9093d511-0b11-4755-ae14-fdef29e04876_1024x1024.jpg?v=1757559046",
            "https://ironstudios.com.br/cdn/shop/files/090970_8_dcdb4d58-6dc6-4c08-a2e1-160863a071d6_1024x1024.jpg?v=1757559046",
        ]
    },
    {
        id: 2,
        name: "Estátua Mistério  - Spider-Man vs Villains",
        category: "Iron Studios - 1/10",
        price: 15999.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090874_2_1024x1024.jpg?v=1753715660",
            "https://ironstudios.com.br/cdn/shop/files/090874_3_1024x1024.jpg?v=1753715660",
            "https://ironstudios.com.br/cdn/shop/files/090874_4_1024x1024.jpg?v=1753715660",
            "https://ironstudios.com.br/cdn/shop/files/090874_5_1024x1024.jpg?v=1753715659",
            "https://ironstudios.com.br/cdn/shop/files/090874_6_1024x1024.jpg?v=1753715659",
            "https://ironstudios.com.br/cdn/shop/files/090874_7_1024x1024.jpg?v=1753715660",



        ]
    },
    {
        id: 3,
        name: "Estátua Rhino - Spider-man vs Villains",
        category: "Iron Studios - 1/10",
        price: 14999.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090935_3_1024x1024.jpg?v=1754167181",
            "https://ironstudios.com.br/cdn/shop/files/090935_4_1024x1024.jpg?v=1754167181",
            "https://ironstudios.com.br/cdn/shop/files/090935_5_381a741e-4542-4344-a104-788012f1f5b9_1024x1024.jpg?v=1754167181",
            "https://ironstudios.com.br/cdn/shop/files/090935_6_1024x1024.jpg?v=1754167182",
            "https://ironstudios.com.br/cdn/shop/files/090935_7_0ef83f9e-d7ce-4054-952f-1e5b8e28fe89_1024x1024.jpg?v=1754167181",
            "https://ironstudios.com.br/cdn/shop/files/090935_8_1024x1024.jpg?v=1754167181",

        ]
    },
    {
        id: 4,
        name: "Estátua Lizard - Spider-Man vs Villains",
        category: "Iron Studios - 1/10",
        price: 10199.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090837_2_1024x1024.jpg?v=1757563070",
            "https://ironstudios.com.br/cdn/shop/files/090837_3_6f530698-7082-4f36-a489-104297e8d498_1024x1024.jpg?v=1757563071",
            "https://ironstudios.com.br/cdn/shop/files/090837_4_1024x1024.jpg?v=1757563070",
            "https://ironstudios.com.br/cdn/shop/files/090837_5_1024x1024.jpg?v=1757563071",
            "https://ironstudios.com.br/cdn/shop/files/090837_12_faa93a46-4958-422c-8f99-2086e755d13a_1024x1024.jpg?v=1757563071",
            "https://ironstudios.com.br/cdn/shop/files/090837_13_1024x1024.jpg?v=1757563071",

        ]
    },
    {
        id: 5,
        name: "Estátua Venom - Spider-man vs Villains",
        category: "Iron Studios - 1/10",
        price: 15099.99,
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
    },
    {
        id: 6,
        name: "Estátua Doctor Octopus - Spider-man",
        category: "BDS Art Scale 1/10",
        price: 13199.99,
        images: [
            "https://ironstudios.com.br/cdn/shop/files/090819_2_1024x1024.jpg?v=1754160657",
            "https://ironstudios.com.br/cdn/shop/files/090819_3_1024x1024.jpg?v=1754160657",
            "https://ironstudios.com.br/cdn/shop/files/090819_4_b834f4d3-a154-46c9-b1a7-5c1a962779cf_1024x1024.jpg?v=1754160657",
            "https://ironstudios.com.br/cdn/shop/files/090819_5_1024x1024.jpg?v=1754160657",
            "https://ironstudios.com.br/cdn/shop/files/090819_12_5209e56b-6b77-4200-af02-e027841f80a7_1024x1024.jpg?v=1754160657",
            "https://ironstudios.com.br/cdn/shop/files/090819_13_1024x1024.jpg?v=1754160658",
        ]
    },
    {
        id: 7,
        name: "Iron Man - Model IV",
        category: "Iron Studios - 1/10",
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
        id: 8,
        name: "Estátua Spider-Man Classic",
        category: "Gamerverse - 1/10",
        price: 2699.99,
        images: [
            "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912902/spider-man_marvel_gallery_655409babf370.jpg",
            "https://ironstudios.com.br/cdn/shop/files/6898429_4dadc766-397b-4ab7-905c-b3181a093327_1024x1024.png?v=1767632863"
        ]
    },
    {
        id: 9,
        name: "Estátua Darth Vader",
        category: "Star Wars - Mythos 1/4",
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
        id: 10,
        name: "Estátua Wolverine",
        category: "Iron Studios - 1/10",
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
    }
];

const gridContainer = document.getElementById('catalog-grid');

function renderCatalog() {
    gridContainer.innerHTML = "";

    catalog.forEach(item => {
        const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price);

        const card = document.createElement('div');
        card.classList.add('catalog-card');

        // GERA AS MINIATURAS (THUMBNAILS) - Igual ao index.js
        let thumbsHTML = '';
        if (item.images.length > 1) {
            thumbsHTML = `<div class="thumb-gallery">`;
            item.images.forEach((imgUrl, index) => {
                const activeClass = index === 0 ? 'active' : '';
                thumbsHTML += `<img src="${imgUrl}" class="thumb-img ${activeClass}" data-index="${index}" alt="thumb">`;
            });
            thumbsHTML += `</div>`;
        } else {
            // Espaço vazio para manter altura se não tiver thumbs
            thumbsHTML = `<div class="thumb-gallery" style="opacity:0; pointer-events:none;"></div>`;
        }

        // MONTA O HTML DO CARD
        card.innerHTML = `
            <div class="catalog-img-box">
                <img src="${item.images[0]}" alt="${item.name}" id="cat-img-${item.id}">
            </div>
            
            ${thumbsHTML}

            <div class="catalog-info">
                <div>
                    <span>${item.category}</span>
                    <h3>${item.name}</h3>
                </div>
                <div>
                    <div class="catalog-price">${formattedPrice}</div>
                    <button class="add-btn" onclick="alert('Produto adicionado ao carrinho!')">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;

        // --- LÓGICA DE HOVER NAS THUMBNAILS ---
        if (item.images.length > 1) {
            const mainImg = card.querySelector(`#cat-img-${item.id}`);
            const thumbs = card.querySelectorAll('.thumb-img');

            // 1. Hover na miniatura troca a imagem principal
            thumbs.forEach(thumb => {
                thumb.addEventListener('mouseenter', () => {
                    const index = thumb.getAttribute('data-index');
                    mainImg.src = item.images[index];

                    // Atualiza a borda da thumb ativa
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });

            // 2. Mouse sai do card -> Reseta para a primeira imagem
            card.addEventListener('mouseleave', () => {
                mainImg.src = item.images[0];
                thumbs.forEach(t => t.classList.remove('active'));

                const firstThumb = card.querySelector('.thumb-img[data-index="0"]');
                if (firstThumb) firstThumb.classList.add('active');
            });
        }

        gridContainer.appendChild(card);
    });
}

// Inicia a renderização
renderCatalog();