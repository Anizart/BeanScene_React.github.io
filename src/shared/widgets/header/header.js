import React from "react";
import './header.scss';

<header class="header">
            <div class="container">
                <div class="header__wrapper d-flex">
                    <div class="header__wrapper-img">
                        <a href="index.html" class="header__link-logo">
                            <img src="img/svg/logo.svg" alt="logo" class="header__img">
                        </a>
                    </div>
                    <div class="header__wrapper-nav">
                        
                

                        <div class="header__wrapper-elem">
                            <div class="header__toggle-container" id="toggle-dark-mode">
                                <div class="header__circle"></div>
                            </div>
                            <a href="basket.html" class="header__basket"><img src="img/svg/basket.svg" alt="basket" class="header__basket"></a>
                            <button type="button" class="header__btn-search"><img src="img/svg/header_search.svg" alt="search" class="header__search"></button>
                            <button type="button" class="header__sign-in" data-open-signIn>Sign In</button>
                            <button type="button" class="btn header__sing-up" data-open-signUp>SignUp</button> 
                        </div>
                    </div>
                    <span class="header__burger"></span>
                </div>
            </div>
        </header>