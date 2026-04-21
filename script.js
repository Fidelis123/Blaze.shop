
const header = document.getElementById('header');
// console.log(header);

const headContent = `
       <div class="navBrand">
            <a href="./blaze.html"><img src="images/4e383d5c-7eb5-4276-b635-c5e500225c24.jpg" alt=""><h1>BL<span>AZE</span></h1></a>
        </div>
         <!-- ///open// -->
            <button class="open-nav">Open</button>


       <nav>
            
            <ul class="navbar flexCenter" id="navbar">

                    <!-- close -->
            <li><button class="close-nav">Close</button></li>

                <li><a class="active" href="./blaze.html">Home</a></li>
                <li><a href="Shop.html">Shop</a></li>
                <li><a href="Blog.html">Blog</a></li>
                <li><a href="Contact.html">Contact</a></li>
                <li><a href="About.html">About</a></li>
                <li><a href="cart.html"><i class="bi bi-cart2"></i></a></li>
            </ul>
        </nav>    

    `;
    header.innerHTML = headContent;

        const openBtn = document.querySelector('.open-nav');
        const closeBtn = document.querySelector('.close-nav');
        const nav = document.querySelector('header nav');

    openBtn.addEventListener('click',() => {
        nav.classList.add('active');
    });
     closeBtn.addEventListener('click',()=>{
        nav.classList.remove('active');
    });

        // current page link//
        const links = document.querySelectorAll('#navbar a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        console.log(link.getAttribute('href'). currentPath);

        if(link.getAttribute('href') === currentPath ||
            currentPath.endsWith(link.getAttribute('href'))){
                link.classList.add('active');
            }else{
                link.classList.remove('active');
            }
    });

    // head-page //
    // const page = document.getElementById("page-head");

    // const pageContent =`
        
    // `;
    // page.innerHTML = pageContent;

    // dynamic products// 
function renderfeatured(locationLink, imgsrc, size, name, price) {
    const div = document.createElement('div');
    div.classList.add('feat-box');
    div.innerHTML = `
        <img src="${imgsrc}" alt="${name}">
        <div class="imgunder">
            <span>${size}</span>
            <h5>${name}</h5>
            <div class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
            </div>
            <p>${price}</p>
        </div>
        <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
    `;
    div.addEventListener('click', () => {
        window.location.href = locationLink;
    });
    featured.appendChild(div);
    }
    
        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/d7136c6c-65c3-4f44-aaf1-c13e2ec9beb9.jpg",
            "Mens hand bag purse",
            "Mens purse",
            "₦20,000"
        );


        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/Desire tees .jpg",
            "Medium size",
            "meat pie",
            "₦20,000"
        );


        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/slippers.jpg",
            "Large size",
            "plantain",
            "5k"
        );


        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/Shape_ Slim,Regular,Loose Button_ Single Breasted….jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/red beads.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/Red cap.jpeg",
            "small size",
            "meat pie",
            "₦20,000"
        );
        

        renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/better gucci shoe.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


         renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/L v.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


         renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/white vintage.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


         renderfeatured(
            "window.location.href='sfeatures.html';",
            "images/kitted tee.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


         renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/glasses.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );


         renderfeatured(
            "window.location.href='sfeatures.html';",
            "./images/d7136c6c-65c3-4f44-aaf1-c13e2ec9beb9.jpg",
            "small size",
            "meat pie",
            "₦20,000"
        );

        //featured scroll

            
            

        // Dynamics newsletter
    
    document.addEventListener("DOMContentLoaded", function (){
    const newsLetter = document.getElementById("newsLetter"); 
    const newsText =`
        <div class="newstext">
            <h4>sign up for newletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
            <form action="" class="form flexCenter">
                <input type="text" name="" placeholder="your email address" required>
                <button class="" required="">sign up</button>
            </form>
        `;
    newsLetter.insertAdjacentHTML("beforeend", newsText);


    //  Dynamics footer tag
    const footer = document.getElementById("footer");
    const footerHtml = `
    <div class="col">
                <img class="logo" src="images/4e383d5c-7eb5-4276-b635-c5e500225c24.jpg" alt=""
                style="position: absolute; bottom: -1px;border-radius: 50%;border: #ca9c9f solid;">
                <h4 style="text-decoration: underline;">Contact</h4>

                <p> <strong>Address:</strong>no.3b hhatchery road Nkaliki</p>
                <p> <strong>phone:</strong> +2348103628432</p>
                <p> <strong>hours:</strong>10:00 - 18:00, Mon - Sat</p>
                <div class="follow">
                    <h4>follow us</h4>
                    <div class="icon">
                        <i class="bi bi-whatsapp"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter-x"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-pinterest"></i>
                        <i class="bi bi-youtube"></i>
                    </div>
                </div> 
            </div>

            <div class="col">
                <h4>About</h4>
                <a href="">About us</a>
                <a href="">Delivery information</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Condition</a>
                <a href="">Contact us</a>
            </div>

            <div class="col">
                <h4>My account</h4>
                <a href="">Sign In </a>
                <a href="">View cart</a>
                <a href="">My wishlist</a>
                <a href="">Track my order</a>
                <a href="">Help</a>
            </div>

            <div class="col">
                <h4>Install App</h4>
                <p>From App Store or Google play</p>
                <div class="row">
                    <img src="./c63de450df4c84bc4f7d1b0a762d8d56.jpg" alt="">
                    <img src="./f37da494b60e3b7ed6e3e08a1ddba2fa.jpg" alt="">
                </div>
                <p>Secure payment gateway</p>             
            </div>
    </div>

    <div class="copy-right">
            <p>© 2025, the shopping app</p>
        </div>
    `;
    if (footer) {
        footer.insertAdjacentHTML("beforeend", footerHtml);
    }
    });