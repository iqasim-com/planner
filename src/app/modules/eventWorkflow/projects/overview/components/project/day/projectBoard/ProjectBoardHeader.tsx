/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
}

interface ProjectBoardHeaderProps {
  navItems: NavItem[];
}

const ProjectBoardHeader: React.FC<ProjectBoardHeaderProps> = ({ navItems }) => {
  const location = useLocation()
  const getActiveClass = (path: string) =>
    location.pathname === path ? 'active' : '';

  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body px-6 p-0'>
          <div className='d-flex align-items-center overflow-auto h-55px justify-content-between'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              {navItems.map((item) => (
                <li className='nav-item' key={item.path}>
                  <Link
                    className={`nav-link text-active-primary me-5 ${getActiveClass(
                      item.path
                    )}`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProjectBoardHeader };
