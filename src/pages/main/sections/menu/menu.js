import React from "react";
import './menu.scss';

<section class="section menu">
    <div class="container">
        <h2 class="title" data-title>Enjoy a new blend of coffee style</h2>
        <div class="menu__description">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </div>
        <div class="menu__wrapper owl-carousel menu__owl-carousel">
            <div class="menu__card">
                <div class="menu__wrapper-img">
                    <img src="img/section_3_card_1.webp" alt="coffee card" class="menu__img">
                </div>
                <h3 class="menu__name">Cappuccino</h3>
                <div class="menu__weights">Coffee 50% | Milk 50%</div>
                <div class="menu__price">18.50</div>
                <a href="#" class="btn menu__btn" data-productId="1">Order now</a>
            </div>
            <div class="menu__card">
                <div class="menu__wrapper-img">
                    <img src="img/section_3_card_2.webp" alt="coffee card" class="menu__img">
                </div>
                <h3 class="menu__name">Chai Latte</h3>
                <div class="menu__weights">Coffee 50% | Milk 50%</div>
                <div class="menu__price">28.50</div>
                <a href="#" class="btn menu__btn" data-productId="2">Order now</a>
            </div>
            <div class="menu__card">
                <div class="menu__wrapper-img">
                    <img src="img/section_3_card_3.webp" alt="coffee card" class="menu__img">
                </div>
                <h3 class="menu__name">Macchiato</h3>
                <div class="menu__weights">Coffee 50% | Milk 50%</div>
                <div class="menu__price">38.50</div>
                <a href="#" class="btn menu__btn" data-productId="3">Order now</a>
            </div>
            <div class="menu__card">
                <div class="menu__wrapper-img">
                    <img src="img/section_3_card_4.webp" alt="coffee card" class="menu__img">
                </div>
                <h3 class="menu__name">Expresso</h3>
                <div class="menu__weights">Coffee 50% | Milk 50%</div>
                <div class="menu__price">48.50</div>
                <a href="#" class="btn menu__btn" data-productId="4">Order now</a>
            </div>
        </div>
        <a href="#" class="btn menu__btn-full">full menu</a>
    </div>
</section>