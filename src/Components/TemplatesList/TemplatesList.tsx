import React, { FC } from 'react'
import { homeTemplates, shopTemplates, innerPagesTemplates, brands } from './data'
import { Link } from 'react-router-dom';
import "./TemplatesList.scss"

interface Props {
  showTemplates: boolean,
  hideMobileMenu: () => void,
}

const TemplatesList:FC<Props> = ({showTemplates, hideMobileMenu}) => {
  return (
    <div className={showTemplates? 'templates-list show' : 'templates-list hide'}>
        <div className='container'>
          <div className='content'>
            <div className='templates'>
              <ul className='home-templates'>
                <li className='title'><b>Home</b></li>
                {
                  homeTemplates.map(template=> {
                    const{id, name, path} = template;
                    return (
                      <li key={id}>
                        <Link className='link' onClick={hideMobileMenu} to={path}>{name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <ul className='shop-templates'>
                <li className='title'><b>shop</b></li>
                {
                  shopTemplates.map(template=> {
                    const{id, name, path} = template;
                    return (
                      <li key={id}>
                        <Link className='link' onClick={hideMobileMenu} to={path}>{name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <ul className='innerPages-templates'>
                <li className='title'><b>innerPages</b></li>
                {
                  innerPagesTemplates.map(template=> {
                    const{id, name, path} = template;
                    return (
                      <li key={id}>
                        <Link className='link' onClick={hideMobileMenu} to={path}>{name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          <ul className='brands hide-mobile'>
            {
              brands.map(template=> {
                const{id, name, img, path} = template;
                return (
                  <li key={id}>
                    <Link className='link' to={path}>
                      <img src={img} alt={name} />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          </div>
        </div>
    </div>
  )
}

export default TemplatesList;