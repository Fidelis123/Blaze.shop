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
