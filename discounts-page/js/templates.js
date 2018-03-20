let flatsTemplate = _.template('<div class="main-info-description">\n' +
    '                                <h2 class="main-info-header">\n' +
    '                                    Квартиры Дисконты\n' +
    '                                </h2>\n' +
    '                                <div class="main-info-paragraph">\n' +
    '                                    <p>\n' +
    '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                    </p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-info">\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img1">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img2">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img3">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img1">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img2">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img3">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img1">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img2">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-item">\n' +
    '                                    <div class="main-item-block">\n' +
    '                                        <div class="main-item-block-img img3">\n' +
    '                                            <div class="block-img-text">\n' +
    '                                                <span>13  999 руб.</span>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="main-item-block-caption">\n' +
    '                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>'
);

let complexSliderTemplate = _.template('<section class="section-slider section-complex-slider">\n' +
    '                <div class="slider__btn slider__btn-left"></div>\n' +
    '                <div class="complexes-slider">\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img1">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img2">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img3">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img2">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img1">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img3">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="slider-item-block">\n' +
    '                        <div class="slider-item-block-container">\n' +
    '                            <div class="main-item-block-img img1">\n' +
    '                                <div class="block-img-text">\n' +
    '                                    <span>13  999 руб.</span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="main-item-block-caption">\n' +
    '                                <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                <p class="info-paragraph">\n' +
    '                                    Lorem ipsum dolor sit amet,\n' +
    '                                    con- sectetur adipisicing elit, sedyte\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="slider__btn slider__btn-right"></div>\n' +
    '            </section>');

let salesTemplate =_.template('<section class="sale-block">\n' +
    '            <div class="inner-container">\n' +
    '                <div class="sale-block-content">\n' +
    '                    <div class="sale-item">\n' +
    '                        <div class="sale-img">\n' +
    '                            <span>АКЦИЯ!</span>\n' +
    '                        </div>\n' +
    '                        <div class="sale-text">\n' +
    '                            <h5 class="sale-text-title">Название Акции</h5>\n' +
    '                            <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
    '                                adipisic, consecte et dolore magnam aliquam quaerat voluptatem.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="sale-item">\n' +
    '                        <div class="sale-img">\n' +
    '                            <span>АКЦИЯ!</span>\n' +
    '                        </div>\n' +
    '                        <div class="sale-text">\n' +
    '                            <h5 class="sale-text-title">Название Акции</h5>\n' +
    '                            <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
    '                                adipisic, consecte et dolore magnam aliquam quaerat voluptatem.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="sale-item">\n' +
    '                        <div class="sale-img">\n' +
    '                            <span>АКЦИЯ!</span>\n' +
    '                        </div>\n' +
    '                        <div class="sale-text">\n' +
    '                            <h5 class="sale-text-title">Название Акции</h5>\n' +
    '                            <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
    '                                adipisic, consecte et dolore magnam aliquam quaerat voluptatem.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </section>'
);

let mortgageOffersTemplate = _.template('<div class="main-info-description">\n' +
    '                                <h2 class="main-info-header">\n' +
    '                                    Самые интересные<br/>\n' +
    '                                    предложения по ипотеке\n' +
    '                                </h2>\n' +
    '                                <div class="main-info-paragraph">\n' +
    '                                    <p>\n' +
    '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                    </p>\n' +
    '                                </div>\n' +
    '                                <div class="main-info-paragraph">\n' +
    '                                    <p>\n' +
    '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                    </p>\n' +
    '                                </div>\n' +
    '                                <img src="./img/mortgage-offers-poster.png" alt="image" class="mortgage-offers-poster"/>\n' +
    '                                <div class="main-info-paragraph">\n' +
    '                                    <p>\n' +
    '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occ\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        aecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                    </p>\n' +
    '                                </div>\n' +
    '                                <img src="./img/mortgage-offers-poster.png" alt="image" class="mortgage-offers-poster"/>\n' +
    '                                <h2 class="main-info-header">\n' +
    '                                    Уникальное название\n' +
    '                                </h2>\n' +
    '                                <div class="main-info-paragraph">\n' +
    '                                    <p>\n' +
    '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.aborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        aborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaaborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna.\n' +
    '                                    </p>\n' +
    '                                </div>\n' +
    '                            </div>'
);

let regionFlatsTemplate = _.template('<div class="region-block">\n' +
    '                                <div class="main-info-description">\n' +
    '                                    <h2 class="main-info-header">\n' +
    '                                        Самые дешёвые <br/>квартиры по районам\n' +
    '                                    </h2>\n' +
    '                                    <div class="main-info-paragraph">\n' +
    '                                        <p>\n' +
    '                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                        </p>\n' +
    '                                        <br/>\n' +
    '                                        <p>\n' +
    '                                            tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <ul class="region-block-list">\n' +
    '                                    <li class="region-block-item" id="first-region" onclick="fun(id)">\n' +
    '                                        <img src="./img/region-first.png" class="region-block-img"/>\n' +
    '                                        <div class="region-title">\n' +
    '                                            <h5 class="block-caption-title region-block-caption-title">\n' +
    '                                                Первомайский Р-н\n' +
    '                                            </h5>\n' +
    '                                            <p class="info-paragraph region-block-paragraph">\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedyte\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="region-block-item" id="second-region" onclick="fun(id)">\n' +
    '                                        <img src="./img/region-second.png" class="region-block-img"/>\n' +
    '                                        <div class="region-title">\n' +
    '                                            <h5 class="block-caption-title region-block-caption-title">\n' +
    '                                                Московский Р-н\n' +
    '                                            </h5>\n' +
    '                                            <p class="info-paragraph region-block-paragraph">\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedyte\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="region-block-item" id="third-region" onclick="fun(id)">\n' +
    '                                        <img src="./img/region-third.png" class="region-block-img"/>\n' +
    '                                        <div class="region-title">\n' +
    '                                            <h5 class="block-caption-title region-block-caption-title">\n' +
    '                                                Спортивный Р-н\n' +
    '                                            </h5>\n' +
    '                                            <p class="info-paragraph region-block-paragraph">\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedyte\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="region-block-item" id="fours-region" onclick="fun(id)">\n' +
    '                                        <img src="./img/region-third.png" class="region-block-img"/>\n' +
    '                                        <div class="region-title">\n' +
    '                                            <h5 class="block-caption-title region-block-caption-title">\n' +
    '                                                Спортивный Р-н\n' +
    '                                            </h5>\n' +
    '                                            <p class="info-paragraph region-block-paragraph">\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedyte\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="region-block-item" id="fives-region" onclick="fun(id)">\n' +
    '                                        <img src="./img/region-first.png" class="region-block-img"/>\n' +
    '                                        <div class="region-title">\n' +
    '                                            <h5 class="block-caption-title region-block-caption-title">\n' +
    '                                                Купаловский Р-н\n' +
    '                                            </h5>\n' +
    '                                            <p class="info-paragraph region-block-paragraph">\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedyte\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="region-block-item" id="sixes-region" onclick="fun(id)">\n' +
    '                                        <img src="./img/region-second.png" class="region-block-img"/>\n' +
    '                                        <div class="region-title">\n' +
    '                                            <h5 class="block-caption-title region-block-caption-title">\n' +
    '                                                Московский Р-н\n' +
    '                                            </h5>\n' +
    '                                            <p class="info-paragraph region-block-paragraph">\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedyte\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '                                <div id="region-content">\n' +
    '\n' +
    '                                </div>\n' +
    '                            </div>'
);

let regionContent = _.template('<div class="main-info-description">\n' +
    '                                        <h2 class="main-info-header">\n' +
    '                                            Первомайский район\n' +
    '                                        </h2>\n' +
    '                                        <div class="main-info-paragraph">\n' +
    '                                            <p>\n' +
    '                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                            </p>\n' +
    '                                            <br/>\n' +
    '                                            <p>\n' +
    '                                                tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                            </p>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <img src="./img/mortgage-offers-poster.png" alt="image" class="mortgage-offers-poster"/>\n' +
    '                                    <ul class="flats-list">\n' +
    '                                        <li class="flats-list-item main-info-item">\n' +
    '                                            <div class="main-item-block">\n' +
    '                                                <div class="main-item-block-img flat-item-block-img">\n' +
    '                                                    <img src="./img/flat-img1.png" class="flats-block-img "/>\n' +
    '                                                    <div class="block-img-text">\n' +
    '                                                        <span>13  999 руб.</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="main-item-block-caption">\n' +
    '                                                    <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                    <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                        con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </li>\n' +
    '                                        <li class="flats-list-item main-info-item">\n' +
    '                                            <div class="main-item-block">\n' +
    '                                                <div class="main-item-block-img flat-item-block-img">\n' +
    '                                                    <img src="./img/flat-img2.png" class="flats-block-img "/>\n' +
    '                                                    <div class="block-img-text">\n' +
    '                                                        <span>13  999 руб.</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="main-item-block-caption">\n' +
    '                                                    <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                    <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                        con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </li>\n' +
    '                                        <li class="flats-list-item main-info-item">\n' +
    '                                            <div class="main-item-block">\n' +
    '                                                <div class="main-item-block-img flat-item-block-img">\n' +
    '                                                    <img src="./img/flat-img3.png" class="flats-block-img "/>\n' +
    '                                                    <div class="block-img-text">\n' +
    '                                                        <span>13  999 руб.</span>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="main-item-block-caption">\n' +
    '                                                    <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                    <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                        con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </li>\n' +
    '                                    </ul>'
);

let flatSalesTemplate = _.template('<div class="complex-benefits-container">\n' +
    '                                <div class="main-info-description">\n' +
    '                                <h2 class="main-info-header">\n' +
    '                                    Скидки на ремонт и дизайн квартир\n' +
    '                                </h2>\n' +
    '                                <div class="main-info-paragraph">\n' +
    '                                    <p>\n' +
    '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                    </p>\n' +
    '                                    <br/>\n' +
    '                                    <p>\n' +
    '                                        tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
    '                                    </p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                                <div class="complex-benefits-block">\n' +
    '                                    <div class="complex-benefits-title">\n' +
    '                                        <h4 class="info-item-title">\n' +
    '                                            При покупке ЖК Белые Ночи\n' +
    '                                        </h4>\n' +
    '                                    </div>\n' +
    '                                    <div class="complex-benefits-content">\n' +
    '                                        <div class="complex-benefits-left-content">\n' +
    '                                            <div class="main-info-paragraph">\n' +
    '                                                <p>\n' +
    '                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu\n' +
    '                                                </p>\n' +
    '                                            </div>\n' +
    '                                            <div class="complex-description-part">\n' +
    '                                                <div class="main-info-item complex-benefits-block-item">\n' +
    '                                                    <div class="main-item-block">\n' +
    '                                                        <div class="main-item-block-img img1">\n' +
    '                                                            <div class="block-img-text">\n' +
    '                                                                <span>13  999 руб.</span>\n' +
    '                                                            </div>\n' +
    '                                                        </div>\n' +
    '                                                        <div class="main-item-block-caption">\n' +
    '                                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="description-part-text complex-benefits-block-item">\n' +
    '                                                    <div class="main-info-paragraph">\n' +
    '                                                        <p>\n' +
    '                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    '                                                        </p>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-info-paragraph">\n' +
    '                                                        <p>\n' +
    '                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    '                                                        </p>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-info-paragraph">\n' +
    '                                                        <p>\n' +
    '                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    '                                                        </p>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="complex-benefits-right-content">\n' +
    '                                            <div class="sale-item">\n' +
    '                                                <div class="sale-img">\n' +
    '                                                    <span>АКЦИЯ!</span>\n' +
    '                                                </div>\n' +
    '                                                <div class="sale-text">\n' +
    '                                                    <h5 class="sale-text-title">Название Акции</h5>\n' +
    '                                                    <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
    '                                                        adipisic, consecte et dolore magnam aliquam quaerat voluptatem.</p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="complex-benefits-block">\n' +
    '                                    <div class="complex-benefits-title">\n' +
    '                                        <h4 class="info-item-title">\n' +
    '                                            При покупке ЖК Белые Ночи\n' +
    '                                        </h4>\n' +
    '                                    </div>\n' +
    '                                    <div class="complex-benefits-content">\n' +
    '                                        <div class="complex-benefits-left-content">\n' +
    '                                            <div class="main-info-paragraph">\n' +
    '                                                <p>\n' +
    '                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu\n' +
    '                                                </p>\n' +
    '                                            </div>\n' +
    '                                            <div class="complex-description-part">\n' +
    '                                                <div class="main-info-item complex-benefits-block-item">\n' +
    '                                                    <div class="main-item-block">\n' +
    '                                                        <div class="main-item-block-img img1">\n' +
    '                                                            <div class="block-img-text">\n' +
    '                                                                <span>13  999 руб.</span>\n' +
    '                                                            </div>\n' +
    '                                                        </div>\n' +
    '                                                        <div class="main-item-block-caption">\n' +
    '                                                            <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                            <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                                con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="description-part-text complex-benefits-block-item">\n' +
    '                                                    <div class="main-info-paragraph">\n' +
    '                                                        <p>\n' +
    '                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    '                                                        </p>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-info-paragraph">\n' +
    '                                                        <p>\n' +
    '                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    '                                                        </p>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-info-paragraph">\n' +
    '                                                        <p>\n' +
    '                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    '                                                        </p>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="complex-benefits-right-content">\n' +
    '                                            <div class="sale-item">\n' +
    '                                                <div class="sale-img">\n' +
    '                                                    <span>АКЦИЯ!</span>\n' +
    '                                                </div>\n' +
    '                                                <div class="sale-text">\n' +
    '                                                    <h5 class="sale-text-title">Название Акции</h5>\n' +
    '                                                    <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
    '                                                        adipisic, consecte et dolore magnam aliquam quaerat voluptatem.</p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n'
);

let contractorsOffersTemplate = _.template('<div class="contractors-offers-block">\n' +
    '                                <div class="main-info-description">\n' +
    '                                    <h2 class="main-info-header">\n' +
    '                                        Самые интересные<br/>\n' +
    '                                        предложения от подрядчиков\n' +
    '                                    </h2>\n' +
    '                                    <div class="main-info-paragraph">\n' +
    '                                        <p>\n' +
    '                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna\n' +
    '                                        </p>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <ul class="contractors-offers-list">\n' +
    '                                    <li class="contractors-offers-list-item">\n' +
    '                                        <div class="offers-left-block">\n' +
    '                                            <div class="main-info-item">\n' +
    '                                                <div class="main-item-block">\n' +
    '                                                    <div class="main-item-block-img img1">\n' +
    '                                                        <div class="block-img-text">\n' +
    '                                                            <span>13  999 руб.</span>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-item-block-caption">\n' +
    '                                                        <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                        <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                            con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="offers-right-block">\n' +
    '                                            <div class="main-info-description">\n' +
    '                                                <h2 class="main-info-header">\n' +
    '                                                    ЖК Белые Ночи\n' +
    '                                                </h2>\n' +
    '                                                <div class="main-info-paragraph">\n' +
    '                                                    <p>\n' +
    '                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident\n' +
    '                                                    </p>\n' +
    '                                                    <br/>\n' +
    '                                                    <p>\n' +
    '                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident\n' +
    '                                                    </p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="info-blocks">\n' +
    '                                                <div class="info-blocks-row first-row">\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            Ипотека\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            100% оплаты\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            Рассрочка\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="info-blocks-row second-row">\n' +
    '                                                    <div class="contact-interplay">\n' +
    '                                                        <button class="open_popup more-button left-button" onclick="popup(\'request\')">\n' +
    '                                                            Оставить заявку\n' +
    '                                                        </button>\n' +
    '                                                        <button class="open_popup more-button interplay-right-button first-color-text" onclick="popup(\'request\')">\n' +
    '                                                            Узнать больше\n' +
    '                                                        </button>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="contractors-offers-list-item">\n' +
    '                                        <div class="offers-left-block">\n' +
    '                                            <div class="main-info-item">\n' +
    '                                                <div class="main-item-block">\n' +
    '                                                    <div class="main-item-block-img img1">\n' +
    '                                                        <div class="block-img-text">\n' +
    '                                                            <span>13  999 руб.</span>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-item-block-caption">\n' +
    '                                                        <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                        <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                            con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="offers-right-block">\n' +
    '                                            <div class="main-info-description">\n' +
    '                                                <h2 class="main-info-header">\n' +
    '                                                    ЖК Белые Ночи\n' +
    '                                                </h2>\n' +
    '                                                <div class="main-info-paragraph">\n' +
    '                                                    <p>\n' +
    '                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident\n' +
    '                                                    </p>\n' +
    '                                                    <br/>\n' +
    '                                                    <p>\n' +
    '                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident\n' +
    '                                                    </p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="info-blocks">\n' +
    '                                                <div class="info-blocks-row first-row">\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            Ипотека\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            100% оплаты\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            Рассрочка\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="info-blocks-row second-row">\n' +
    '                                                    <div class="contact-interplay">\n' +
    '                                                        <button class="open_popup more-button left-button" onclick="popup(\'request\')">\n' +
    '                                                            Оставить заявку\n' +
    '                                                        </button>\n' +
    '                                                        <button class="open_popup more-button interplay-right-button first-color-text" onclick="popup(\'request\')">\n' +
    '                                                            Узнать больше\n' +
    '                                                        </button>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                    <li class="contractors-offers-list-item">\n' +
    '                                        <div class="offers-left-block">\n' +
    '                                            <div class="main-info-item">\n' +
    '                                                <div class="main-item-block">\n' +
    '                                                    <div class="main-item-block-img img1">\n' +
    '                                                        <div class="block-img-text">\n' +
    '                                                            <span>13  999 руб.</span>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="main-item-block-caption">\n' +
    '                                                        <h5 class="block-caption-title">ЖК Белые Ночи</h5>\n' +
    '                                                        <p class="info-paragraph block-caption-paragraph">Lorem ipsum dolor sit amet,\n' +
    '                                                            con- sectetur adipisicing elit, sedyte</p>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="offers-right-block">\n' +
    '                                            <div class="main-info-description">\n' +
    '                                                <h2 class="main-info-header">\n' +
    '                                                    ЖК Белые Ночи\n' +
    '                                                </h2>\n' +
    '                                                <div class="main-info-paragraph">\n' +
    '                                                    <p>\n' +
    '                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident\n' +
    '                                                    </p>\n' +
    '                                                    <br/>\n' +
    '                                                    <p>\n' +
    '                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident\n' +
    '                                                    </p>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="info-blocks">\n' +
    '                                                <div class="info-blocks-row first-row">\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            Ипотека\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            100% оплаты\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="info-block">\n' +
    '                                                        <h5 class="info-block-caption">\n' +
    '                                                            Рассрочка\n' +
    '                                                        </h5>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                                <div class="info-blocks-row second-row">\n' +
    '                                                    <div class="contact-interplay">\n' +
    '                                                        <button class="open_popup more-button left-button" onclick="popup(\'request\')">\n' +
    '                                                            Оставить заявку\n' +
    '                                                        </button>\n' +
    '                                                        <button class="open_popup more-button interplay-right-button first-color-text" onclick="popup(\'request\')">\n' +
    '                                                            Узнать больше\n' +
    '                                                        </button>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '                            </div>'
);

let contentContainer = document.querySelector("#content-container");
let regionsContainer = null;
let bottomContentContainer = document.querySelector("#bottom-content-container");
bottomContentContainer.innerHTML = complexSliderTemplate();
initSlick();
let previousId = null;

function fun(targetId) {

    if (targetId===previousId) {
        return;
    }
    previousId = targetId;

    switch (targetId) {
        case "flats":
            contentContainer.innerHTML = flatsTemplate();
            bottomContentContainer.innerHTML = salesTemplate();
            break;
        case "region-flats":
            contentContainer.innerHTML = regionFlatsTemplate();
            bottomContentContainer.innerHTML = complexSliderTemplate();
            initSlick();
            regionsContainer = document.querySelector('#region-content');
            break;
        case "mortgage-offers":
            contentContainer.innerHTML = mortgageOffersTemplate();
            bottomContentContainer.innerHTML = salesTemplate();
            break;
        case "installment-plan":
            contentContainer.innerHTML = flatsTemplate();
            bottomContentContainer.innerHTML = complexSliderTemplate();
            initSlick();
            break;
        case "contractors-offers":
            contentContainer.innerHTML = contractorsOffersTemplate();
            bottomContentContainer.innerHTML = salesTemplate();
            break;
        case "flat-sales":
            contentContainer.innerHTML = flatSalesTemplate();
            bottomContentContainer.innerHTML = complexSliderTemplate();
            initSlick();
            break;
        case "first-region":
            regionsContainer.innerHTML = regionContent();
            break;
        case "second-region":
            regionsContainer.innerHTML = regionContent();
            break;
        case "third-region":
            regionsContainer.innerHTML = regionContent();
            break;
        case "fours-region":
            regionsContainer.innerHTML = regionContent();
            break;
        case "fives-region":
            regionsContainer.innerHTML = regionContent();
            break;
        case "sixes-region":
            regionsContainer.innerHTML = regionContent();
            break;
    }
}
