function foo() {
    let tmpl = _.template('<div class="first-open-switch-var" id="first-radio-open-text">\n' +
        '<div class="second-part-open">\n' +
        '                            <h3 class="second-open-title">Описание Жилого Комплекса</h3>\n' +
        '                            <p class="second-open-paragraph">Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sedyteLorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
        '                                incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
        '                                minim veniam, quis nostrud exercitation ullamco laboris\n' +
        '                                nisi ut aliquip ex ea commodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        '                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                                non proident, sunt in culpa qui officia deserunt mollit\n' +
        '                                anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium,\n' +
        '                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo.\n' +
        '                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur\n' +
        '                                aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                                qui ratione voluptatem sequi nesciunt. Neque porro quisquam\n' +
        '                                est, qui dolorem ipsum quia dolor sit amet, consectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                    <div class="second-first-open">\n' +
        '                            <div class="first-second-open-block">\n' +
        '                                <div class="second-part-open">\n' +
        '                                    <h3 class="second-open-title">Описание Жилого Комплекса</h3>\n' +
        '                                    <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyteLorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        '                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate t.\n' +
        '                                        elit, sed quia non numquam eius modi tempora incidunt ut labore et dolore\n' +
        '                                        magnam aliquam quaerat voluptatem.</p>\n' +
        '                                </div>\n' +
        '                                <iframe class="map" src="https://yandex.by/map-widget/v1/-/CBeTvZshoC"\n' +
        '                                        frameborder="0"></iframe>\n' +
        '                            </div>\n' +
        '                            <div class="second-second-open-block">\n' +
        '                                <div class="second-part-open">\n' +
        '                                    <h3 class="second-open-title">Описание Жилого Комплекса</h3>\n' +
        '                                    <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                                        elit, sedyteLorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n' +
        '                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
        '                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n' +
        '                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n' +
        '                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
        '                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n' +
        '                                        id est laborum. Sed ut perspiciatis unde omnis iste natus error sit</p>\n' +
        '                                    <p class="second-open-paragraph">Мoluptatem accusantium doloremque laudantium,\n' +
        '                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n' +
        '                                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem\n' +
        '                                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni\n' +
        '                                        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam\n' +
        '                                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,\n' +
        '                                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                                        aliquam quaerat voluptatem.</p>\n' +
        '                                    <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyteLorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
        '                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        '                                        irure dolor in reprehenderit in voluptate velit esLorem ipsum dolor\n' +
        '                                        sit amet, consectetur adipisicing elit, sedyteLorem ipsum dolor sit\n' +
        '                                        amet, consmet, consectetur adipisicing elit, sedyteLorem ipsum dolor\n' +
        '                                        sit amet, comet, consectetur adipisicing elit, sedyteLorem ipsum dolor\n' +
        '                                        sit amet, coectetur adipisicing  culpa qui officia deserunt mollit\n' +
        '                                        anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                                        sitse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
        '                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n' +
        '                                        id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            </div>\n' +

        '                        </div>');
    var tmp2 = _.template('<div class="second-open-switch-var">\n' +
        '                        <div class="second-part-open">\n' +
        '                            <h3 class="second-open-title">Квартиры и Планировки</h3>\n' +
        '                            <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sedyteLorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
        '                                magna aliqua. Ut enim ad minim veniam, qesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                                aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="buttons-part-open">\n' +
        '                            <input type="radio" class="input-button-part" onclick="funcFlats()" id="button-part1" name="button-part">\n' +
        '                            <label for="button-part1" class="button-open" >Квартира-студия</label>\n' +

        '                            <input type="radio" class="input-button-part" onclick="funcFlats()" checked id="button-part2" name="button-part">\n' +
        '                            <label for="button-part2" class="button-open" >1-x комнатная кв.</label>\n' +

        '                            <input type="radio" class="input-button-part" onclick="funcFlats()" id="button-part3" name="button-part">\n' +
        '                            <label for="button-part3" class="button-open" >2-x комнатная кв.</label>\n' +

        '                            <input type="radio" class="input-button-part" onclick="funcFlats()" id="button-part4" name="button-part">\n' +
        '                            <label for="button-part4" class="button-open" >3-x комнатная кв.</label>\n' +

        '                            <input type="radio" class="input-button-part" onclick="funcFlats()" id="button-part5" name="button-part">\n' +
        '                            <label for="button-part5" class="button-open" >4-x комнатная кв.</label>\n' +
        '                        </div>\n' +
        '                        <div class="flats-set-open" id="flats-set-open">\n' +
        '                        </div>\n' +
        '                    </div>');

    var tmp3 = _.template('<div class="third-open-switch-var">\n' +
        '                        <div class="second-part-open">\n' +
        '                            <h3 class="second-open-title">Скидки и Акции</h3>\n' +
        '                            <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
        '                                sedyteLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                                tempor incididunt ut labore et dolore magna aliqua. onsequuntur magni dolores\n' +
        '                                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n' +
        '                                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam\n' +
        '                                eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                        <div class="third-second-part-open">\n' +
        '                            <div class="first-column-third-open">\n' +
        '                                <div class="sale-img">\n' +
        '                                    <span>Скидка!</span>\n' +
        '                                </div>\n' +
        '                                <div class="sale-text sale-text-third">\n' +
        '                                    <h5 class="sale-text-title">Описание Скидки</h5>\n' +
        '                                    <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyte\n' +
        '                                    </p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <div class="second-column-third-open">\n' +
        '                                <div class="second-part-open second-part-open-second">\n' +
        '                                    <h3 class="second-open-title">Детальное пояснение скидки</h3>\n' +
        '                                    <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyteLorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                                        dolore magna aliqua. onsequuntur magni dolores eos qui ratione\n' +
        '                                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n' +
        '                                        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia\n' +
        '                                        non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                                        aliquam quaerat voluptatem.\n' +
        '                                    </p>\n' +
        '                                    <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyteLorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma\n' +
        '                                    </p>\n' +
        '                                    <p class="second-open-paragraph">gna aliqua. onsequuntur magni dolores eos qui\n' +
        '                                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n' +
        '                                        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non\n' +
        '                                        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n' +
        '                                        quaerat voluptatem.\n' +
        '                                    </p>\n' +
        '                                    <p class="second-open-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyteLorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
        '                                        magna aliqua. onsequuntur magni dolores eos qui ratione voluptatem\n' +
        '                                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n' +
        '                                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n' +
        '                                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n' +
        '                                    </p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <div class="third-column-third-open">\n' +
        '                                <div class="sale-img">\n' +
        '                                    <span>АКЦИЯ!</span>\n' +
        '                                </div>\n' +
        '                                <div class="sale-text sale-text-third">\n' +
        '                                    <h5 class="sale-text-title">Описание Акции</h5>\n' +
        '                                    <p class="sale-text-paragraph">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                        adipisicing elit, sedyte\n' +
        '                                    </p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>');

    let root = document.getElementById("flat-changeable");

    let firstSwitch = document.getElementById("first-radio-open");
    let secondSwitch = document.getElementById("second-radio-open");
    let thirdSwitch = document.getElementById("third-radio-open");


    if(firstSwitch.checked){
        root.innerHTML = tmpl();
    } else if(secondSwitch.checked){
        root.innerHTML = tmp2();
        funcFlats();
    }
    else if(thirdSwitch.checked){
        root.innerHTML = tmp3();
    }
}

foo();

function funcFlats() {
    let root2 = document.getElementById("flats-set-open");
    console.log(root2);
    let buttonStudia = document.getElementById("button-part1");
    let buttonOneRoom = document.getElementById("button-part2");
    let buttonSecondRoom = document.getElementById("button-part3");
    let buttonThirdRoom = document.getElementById("button-part4");
    let buttonFourRoom = document.getElementById("button-part5");


    let oneRoom = _.template('                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 1-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 1-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 1-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n');

    let studia = _.template('                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> Студия</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> Студия</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> Студия</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n');

    let twoRoom = _.template('                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 2-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 2-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 2-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n');

    let threeRoom = _.template('                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 3-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 3-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 3-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n');

    let fourRoom = _.template('                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 4-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 4-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n' +
        '                            <div class="flat-open-item">\n' +
        '                                <div class="img-flat-open"></div>\n' +
        '                                <div class="caption-flat-open">\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Квартира:</span> 4-х комнатная</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Площадь:</span> 42.9м</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Этаж:</span> 17</p>\n' +
        '                                    <p class="line-flat"><span class="point-line-flat">Цена:</span> 4 266 тыс. руб.</p>\n' +
        '                                </div>\n' +
        '                                <button class="button-open button-item-flat">Оформить заявку</button>\n' +
        '                            </div>\n');

    if(buttonStudia.checked){
        root2.innerHTML = studia();
    } else if(buttonOneRoom.checked){
        root2.innerHTML = oneRoom();
    }
    else if(buttonSecondRoom.checked){
        root2.innerHTML = twoRoom();
    } else if(buttonThirdRoom.checked){
        root2.innerHTML = threeRoom();
    } else if(buttonFourRoom.checked){
        root2.innerHTML = fourRoom();
    }
}

