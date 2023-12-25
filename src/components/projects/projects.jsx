import classes from "../../style/projects/projects.module.scss"
import techstore from "../../images/techstore.jpg"
import wu from "../../images/wu.jpg"
import time from "../../images/time.jpg"


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Project = ({photo, name, description}) =>{
    return(
        <div className={classes.slide}>
            <img src={photo} alt="" />
            <div className={classes.txt}>
                <h1>
                    {name}
                </h1>
                <h2>
                    {description}
                </h2>
            </div>
        </div>
    )
}

export const Projects = () =>{
    return(
        <div className={classes.content}>
            <header>
                <Link to="/"><button>Главная</button></Link>
                <h1>Наши прошлые проекты</h1>
                <Link to="/team"><button>Наша команда</button></Link>
            </header>
            
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Project photo={techstore} name="TechStore" description="Интренет-магазин электроники. Реализована админка с возможностью оттуда
                                                                                 напрямую добавлять категории товаров, товары, характеристики товаров."/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project photo={wu} name="WorldUniversities" description="Веб-сервис, который показывает 
                                                                                  рейтинг лучших университетов. Данные представляют собой таблицу 
                                                                                  со следующими столбцами: индекс, имя, местонахождение, рейтинг, 
                                                                                  стоимость обучения, стоимость обучения для студентов своего штата, 
                                                                                  число зачисленных в бакалавриат. Файл с данными будет собираться на компьютере с помощью 
                                                                                  программы, написанной на Rust. В той же программе данные будут 
                                                                                  обрабатываться. Результатом обработки данных является таблица. 
                                                                                  Возможные функции: Сортировки: по имени, по индексу и  по 
                                                                                  стоимости обучения. Эти таблицы вносятся в базу данных, 
                                                                                  просматривать их можно через веб-сервер.  "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project photo={time} name="Расписание занятий УУНИТ" description=" Отображение расписания учебных занятий для студентов и 
                                                                                            сотрудников высших или средних учебных заведений. При 
                                                                                            этом расписание может редактироваться на основании данных 
                                                                                            из бюро расписания. Предусмотрен вывод расписания 
                                                                                            преподавателей, групп, аудиторий.
                                                                                            "/>
                    </SwiperSlide>
            </Swiper>
        </div>
        
    )
}