import './index.scss';
import { projects } from '../../assets/projects';
import { useState } from 'react';

export default function Projects() {
  const [page, setPage] = useState(1);

  return (
    <div className="col-12 mt-2">
      <div className="d-flex gap-5 align-items-end">
        <div className="sobre-mim">
          <h1>projetos</h1>
          <div className="d-flex borda">
            <div className="grossa"></div>
            <div className="fina align-self-end"></div>

          </div>
        </div>
        <div className="row pages gap-1">
          <div className={`item-page ${page == 1 && 'page-selected'}`} onClick={() => setPage(1)}>I</div>
          <div className={`item-page ${page == 2 && 'page-selected'}`} onClick={() => setPage(2)}>II</div>
          <div className={`item-page ${page == 3 && 'page-selected'}`} onClick={() => setPage(3)}>III</div>
          <div className={`item-page ${page == 4 && 'page-selected'}`} onClick={() => setPage(4)}>IIII</div>
        </div>
      </div>

      <div className="d-flex container-projects justify-content-between mt-3 gap-3">
        {projects.filter(item => item.page == page).map(item => (
          <div className="item-project">
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}