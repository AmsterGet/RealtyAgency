let variable = false;

function renderFourPage() {
    let template1 = _.template('<div class="changeable-item" id="template-1">\n' +
        '                     <div class="first-block-main">\n' +
        '                        <div class="text-first-block-main">\n' +
        '                            <h2 class="title-four-main">Справочник районов СПБ</h2>\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n' +
        '                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n' +
        '                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n' +
        '                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
        '                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tem</p>\n' +
        '                            <p class="paragraph-four-main">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n' +
        '                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n' +
        '                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
        '                                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
        '                                sunt explicabo. Nemo enim ipsam\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">oluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n' +
        '                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, equat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n' +
        '                                occaecat cupidatat non proident, sunt in culpa e ab illo inventore veritatis et\n' +
        '                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamconsectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n' +
        '                                dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="img-first-block-main"></div>\n' +
        '                    </div>\n' +
        '                    <div class="second-block-main">\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        '                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '                            Sed ut perspiciatis unde omnis iste natus error\n' +
        '                        </p>\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
        '                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n' +
        '                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\n' +
        '                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                            aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur\n' +
        '                            adipisicing elit, sed do eiusmod tem.\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="third-block-main">\n' +
        '                        <div class="img-third-block-main"></div>\n' +
        '                        <div class="text-third-block-main">\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt  ommodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque\n' +
        '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo. aut fugit, sed quia\n' +
        '                                consequuntur magni dol\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">ores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectee magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sed do eiusmod tem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                        </div>\n' +
        '                    </div>');

    let template2 = _.template('<div class="changeable-item" id="template-2">\n' +
        '                       <div class="first-block-main">\n' +
        '                        <div class="text-first-block-main">\n' +
        '                            <h2 class="title-four-main">Аналитика Недвижимости</h2>\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n' +
        '                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n' +
        '                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n' +
        '                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
        '                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tem</p>\n' +
        '                            <p class="paragraph-four-main">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n' +
        '                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n' +
        '                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
        '                                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
        '                                sunt explicabo. Nemo enim ipsam\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">oluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n' +
        '                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, equat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n' +
        '                                occaecat cupidatat non proident, sunt in culpa e ab illo inventore veritatis et\n' +
        '                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamconsectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n' +
        '                                dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="img-first-block-main"></div>\n' +
        '                    </div>\n' +
        '                    <div class="second-block-main">\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        '                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '                            Sed ut perspiciatis unde omnis iste natus error\n' +
        '                        </p>\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
        '                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n' +
        '                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\n' +
        '                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                            aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur\n' +
        '                            adipisicing elit, sed do eiusmod tem.\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="third-block-main">\n' +
        '                        <div class="img-third-block-main"></div>\n' +
        '                        <div class="text-third-block-main">\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt  ommodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque\n' +
        '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo. aut fugit, sed quia\n' +
        '                                consequuntur magni dol\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">ores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectee magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sed do eiusmod tem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                        </div>\n' +
        '                    </div>');

    let template3 = _.template('<div class="changeable-item" id="template-3">\n' +
        '                       <div class="first-block-main">\n' +
        '                        <div class="text-first-block-main">\n' +
        '                            <h2 class="title-four-main">Ипотека и финансы</h2>\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n' +
        '                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n' +
        '                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n' +
        '                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
        '                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tem</p>\n' +
        '                            <p class="paragraph-four-main">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n' +
        '                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n' +
        '                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
        '                                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
        '                                sunt explicabo. Nemo enim ipsam\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">oluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n' +
        '                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, equat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n' +
        '                                occaecat cupidatat non proident, sunt in culpa e ab illo inventore veritatis et\n' +
        '                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamconsectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n' +
        '                                dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="img-first-block-main"></div>\n' +
        '                    </div>\n' +
        '                    <div class="second-block-main">\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        '                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '                            Sed ut perspiciatis unde omnis iste natus error\n' +
        '                        </p>\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
        '                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n' +
        '                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\n' +
        '                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                            aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur\n' +
        '                            adipisicing elit, sed do eiusmod tem.\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="third-block-main">\n' +
        '                        <div class="img-third-block-main"></div>\n' +
        '                        <div class="text-third-block-main">\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt  ommodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque\n' +
        '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo. aut fugit, sed quia\n' +
        '                                consequuntur magni dol\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">ores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectee magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sed do eiusmod tem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                       </div>\n' +
        '                    </div>');

    let template4 = _.template('<div class="changeable-item" id="template-4">\n' +
        '                       <div class="first-block-main">\n' +
        '                        <div class="text-first-block-main">\n' +
        '                            <h2 class="title-four-main">Новости недвижимости</h2>\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n' +
        '                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n' +
        '                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n' +
        '                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
        '                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tem</p>\n' +
        '                            <p class="paragraph-four-main">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n' +
        '                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n' +
        '                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
        '                                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
        '                                sunt explicabo. Nemo enim ipsam\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">oluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n' +
        '                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, equat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n' +
        '                                occaecat cupidatat non proident, sunt in culpa e ab illo inventore veritatis et\n' +
        '                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamconsectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n' +
        '                                dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="img-first-block-main"></div>\n' +
        '                    </div>\n' +
        '                    <div class="second-block-main">\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        '                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '                            Sed ut perspiciatis unde omnis iste natus error\n' +
        '                        </p>\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
        '                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n' +
        '                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\n' +
        '                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                            aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur\n' +
        '                            adipisicing elit, sed do eiusmod tem.\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="third-block-main">\n' +
        '                        <div class="img-third-block-main"></div>\n' +
        '                        <div class="text-third-block-main">\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt  ommodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque\n' +
        '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo. aut fugit, sed quia\n' +
        '                                consequuntur magni dol\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">ores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectee magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sed do eiusmod tem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                       </div>\n' +
        '                    </div>');

    let template5 = _.template('<div class="changeable-item" id="template-5">\n' +
        '                       <div class="first-block-main">\n' +
        '                        <div class="text-first-block-main">\n' +
        '                            <h2 class="title-four-main">Самое обсуждаемое</h2>\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n' +
        '                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n' +
        '                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n' +
        '                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
        '                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tem</p>\n' +
        '                            <p class="paragraph-four-main">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n' +
        '                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n' +
        '                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
        '                                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
        '                                sunt explicabo. Nemo enim ipsam\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">oluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n' +
        '                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, equat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n' +
        '                                occaecat cupidatat non proident, sunt in culpa e ab illo inventore veritatis et\n' +
        '                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamconsectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n' +
        '                                dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="img-first-block-main"></div>\n' +
        '                    </div>\n' +
        '                    <div class="second-block-main">\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        '                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '                            Sed ut perspiciatis unde omnis iste natus error\n' +
        '                        </p>\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
        '                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n' +
        '                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\n' +
        '                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                            aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur\n' +
        '                            adipisicing elit, sed do eiusmod tem.\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="third-block-main">\n' +
        '                        <div class="img-third-block-main"></div>\n' +
        '                        <div class="text-third-block-main">\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt  ommodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque\n' +
        '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo. aut fugit, sed quia\n' +
        '                                consequuntur magni dol\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">ores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectee magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sed do eiusmod tem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                       </div>\n' +
        '                    </div>');

    let template6 = _.template('<div class="changeable-item" id="template-6">\n' +
        '                       <div class="first-block-main">\n' +
        '                        <div class="text-first-block-main">\n' +
        '                            <h2 class="title-four-main">Экспертное мнение</h2>\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        '                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n' +
        '                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n' +
        '                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n' +
        '                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
        '                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n' +
        '                                ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit\n' +
        '                                amet, consectetur adipisicing elit, sed do eiusmod tem</p>\n' +
        '                            <p class="paragraph-four-main">por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n' +
        '                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n' +
        '                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
        '                                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste\n' +
        '                                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
        '                                sunt explicabo. Nemo enim ipsam\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">oluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n' +
        '                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n' +
        '                                qui dolorem ipsum quia dolor sit amet, equat. Duis aute irure dolor in reprehenderit\n' +
        '                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n' +
        '                                occaecat cupidatat non proident, sunt in culpa e ab illo inventore veritatis et\n' +
        '                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamconsectetur,\n' +
        '                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n' +
        '                                dolore magnam aliquam quaerat voluptatem.</p>\n' +
        '                        </div>\n' +
        '                        <div class="img-first-block-main"></div>\n' +
        '                    </div>\n' +
        '                    <div class="second-block-main">\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
        '                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        '                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
        '                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '                            Sed ut perspiciatis unde omnis iste natus error\n' +
        '                        </p>\n' +
        '                        <p class="info-paragraph paragraph-four-main">\n' +
        '                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n' +
        '                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
        '                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n' +
        '                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n' +
        '                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\n' +
        '                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\n' +
        '                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n' +
        '                            aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur\n' +
        '                            adipisicing elit, sed do eiusmod tem.\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="third-block-main">\n' +
        '                        <div class="img-third-block-main"></div>\n' +
        '                        <div class="text-third-block-main">\n' +
        '                            <p class="paragraph-four-main">Lorem ipsum dolor sit amet, consectetur\n' +
        '                                adipisicing elit, sed do eiusmod tempor incididunt  ommodo consequat. Duis aute irure\n' +
        '                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">sit voluptatem accusantium doloremque\n' +
        '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n' +
        '                                et quasi architecto beatae vitae dicta sunt explicabo. aut fugit, sed quia\n' +
        '                                consequuntur magni dol\n' +
        '                            </p>\n' +
        '                            <p class="paragraph-four-main">ores eos qui ratione voluptatem sequi\n' +
        '                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n' +
        '                                consectee magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet,\n' +
        '                                consectetur adipisicing elit, sed do eiusmod tem.\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    </div>');

    let root = document.getElementById("changeable-container");

    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let radio3 = document.getElementById("radio3");
    let radio4 = document.getElementById("radio4");
    let radio5 = document.getElementById("radio5");
    let radio6 = document.getElementById("radio6");
    let currentNode = root.childNodes[0];


    if(radio1.checked){
        if(currentNode.id ==="template-1"){
            return;
        } else{
            currentNode.classList.add("up-animate");
            setTimeout(() => {
                root.innerHTML = template1();
                addAnimateClass(1);
            },300);
        }

    }
    else if(radio2.checked && !variable){
        if(currentNode.id ==="template-2"){
            return;
        } else{
            variable = true;
            debugger;
            setTimeout(() => {
                root.innerHTML = template2();
                addAnimateClass(2);
            },300);
        }
    }
    else if(radio2.checked && variable){
        if(currentNode.id ==="template-2"){
            return;
        } else{
            debugger;
            currentNode.classList.add("up-animate");
            setTimeout(() => {
                root.innerHTML = template2();
                addAnimateClass(2);
            },300);
        }
    }
    else if(radio3.checked){
        if(currentNode.id ==="template-3"){
            return;
        } else{
            currentNode.classList.add("up-animate");
            setTimeout(() => {
                root.innerHTML = template3();
                addAnimateClass(3);
            },300)
        }
    }
    else if(radio4.checked){
        if(currentNode.id ==="template-4"){
            return;
        } else{
            currentNode.classList.add("up-animate");
            setTimeout(() => {
                root.innerHTML = template4();
                addAnimateClass(4);
            },300);
        }
    }
    else if(radio5.checked){
        if(currentNode.id ==="template-5"){
            return;
        } else{
            currentNode.classList.add("up-animate");
            setTimeout(() => {
                root.innerHTML = template5();
                addAnimateClass(5);
            },300);
        }
    }
    else if(radio6.checked){
        if(currentNode.id ==="template-6"){
            return;
        } else{
            currentNode.classList.add("up-animate");
            setTimeout(() => {
                root.innerHTML = template6();
                addAnimateClass(6);
            },300);
        }
    }

}

renderFourPage();

function addAnimateClass(number){
    let node = document.getElementById(`template-${number}`);
    node.classList.add("down-animate");
}

