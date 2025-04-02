import React from "react";
import './signin.scss';

<div class="modal" data-modal-signIn tabindex="-1">
    <form action="#" method="post" class="modal__wrapper">
        <div class="modal__text">
            Welcome back! The best coffee moments are waiting for you.
        </div>
        <div class="modal__wrapper-input">
            <label for="email-authorization" class="modal__label">Email</label>
            <input type="text" name="email-signIn" id="email-authorization" class="modal__input" tabindex="1" required>
        </div>
        <div class="modal__wrapper-input">
            <label for="password-authorization" class="modal__label">Password</label>
            <input type="text" name="password-signIn" id="password-authorization" class="modal__input" tabindex="2" required>
        </div>
        <button type="submit" class="btn modal__btn" tabindex="3" data-btn-signIn>To send</button>
        <div class="modal__wrapper-link">
            <div class="modal__link" data-linkAuthorization>new account</div>
            <div class="modal__link">forgot password?</div>
        </div>
    </form>
</div>