import React from "react";
import './signup.scss';

<div class="modal" data-modal-signUp tabindex="-1">
    <form action="#" method="post" class="modal__wrapper">
        <div class="modal__text">
            Welcome! Your coffee adventure starts here.
        </div>
        <div class="modal__wrapper-input">
            <label for="name" class="modal__label">Name</label>
            <input type="text" name="name" id="name" class="modal__input" tabindex="1" required>
        </div>
        <div class="modal__wrapper-input">
            <label for="email" class="modal__label">Email</label>
            <input type="text" name="email" id="email" class="modal__input" tabindex="2" required>
        </div>
        <div class="modal__wrapper-input">
            <label for="address" class="modal__label">Address</label>
            <input list="cities" type="text" name="address" id="address" class="modal__input" tabindex="3" required>
            <datalist id="cities">
                <option>Moscow
                <option>Saint-Petersburg
                <option>Chelyabinsk
                <option>Orenburg
                <option>Yaroslavl
                <option>Samara
            </datalist>
        </div>
        <div class="modal__wrapper-input">
            <label for="password" class="modal__label">Password</label>
            <input type="text" name="password" id="password" class="modal__input" tabindex="4" required>
        </div>
        <button type="submit" class="btn modal__btn" tabindex="5" data-btn-signUp>To Send</button>
        <div class="modal__link" data-linkRegistration>already have an account?</div>
    </form>
</div>