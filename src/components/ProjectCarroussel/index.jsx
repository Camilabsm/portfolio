import "./ProjectCarroussel.css"
import ProjectItem from "./ProjectItem"
import data from "./projects.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let projects = data.projects

const ProjectCarroussel = () => {
   return(
    <div className="carousel-text">
      <p className="sup-text">Portfólio</p>
      <h2 className="main-text">Meus projetos</h2>
      <p className="sec-text">Aqui você encontra meus projetos mais recentes:</p>
    
    <Swiper id="portfolio"
      style={{width: "80vw", 
        margin: "2rem auto 3rem auto",
        "--swiper-pagination-color": "var(--secondary)",
      }}
      modules={[Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={20}
      
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }}
    >
      {projects.map((project) => {
        return(
        <SwiperSlide key={project.id}>
          <ProjectItem 
             techs = {project.techs}
             capa = {project.cover}
             nome = {project.name}
             descricao = {project.description}
             linkGithub = {project.linkGithub}
             linkDeploy = {project.linkDeploy}
          />
        </SwiperSlide>
        );
      }
      )}
    </Swiper>
     
    </div>
   );
}

export default ProjectCarroussel