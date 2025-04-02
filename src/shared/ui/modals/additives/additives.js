import React from "react";
import './additives.scss';

<div class="modal modal-additives" data-modal-additives>
    <div class="modal__wrapper modal__wrapper-additives">
        <div class="modal__text">
            Add to coffee
        </div>
        <div class="modal__wrapper-elements">
            <div class="modal__additives">
                <div class="modal__wrapper-img">
                    <img src="img/coconut.png" alt="Сoconut" class="modal__img">
                </div>
                <div class="modal__additives-text">
                    Сoconut
                </div>
                <button type="submit" class="btn modal__btn" tabindex="1" data-btn-add="1">add</button>
            </div>
            <div class="modal__additives">
                <div class="modal__wrapper-img">
                    <img src="img/banana.png" alt="Banana" class="modal__img">
                </div>
                <div class="modal__additives-text">
                    Banana
                </div>
                <button type="submit" class="btn modal__btn" tabindex="2" data-btn-add="2">add</button>
            </div>
            <div class="modal__additives">
                <div class="modal__wrapper-img">
                    <img src="img/sugar.png" alt="Sugar" class="modal__img">
                </div>
                <div class="modal__additives-text">
                    Sugar
                </div>
                <button type="submit" class="btn modal__btn" tabindex="2" data-btn-add="3">add</button>
            </div>
        </div>
        <div class="modal__wrapper-btn">
            <button type="submit" class="btn modal__btn-cancellation" tabindex="4" data-btn-cancellation>cancellation</button>
            <button type="submit" class="btn modal__btn" tabindex="3" data-btn-done>done</button>
        </div>
    </div>
</div>