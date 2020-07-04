import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';

import Sidebar from './sidebar';
import SEO from './seo';
import { SiteWrapper, Main, lightTheme } from './styled';
import '../style/globals.scss';
import '../style/highlight.scss';

export default function Layout({ children, title, description, breadcrumbs }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <SiteWrapper>
        <SEO title={title} description={description} />
        <Sidebar />
        <Main>
          {breadcrumbs && <LinkToParent {...breadcrumbs} />}
          {children}
        </Main>
      </SiteWrapper>
    </ThemeProvider>
  );
}

const LinkToParent = ({path, sub}) => (
  <Breadcrumbs>
    <Link to={`/${path}`}>{path}</Link> / {sub}
  </Breadcrumbs>
);

const Breadcrumbs = styled.div`
  position: absolute !important;
  top: -30px;
  font-size: 13px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 4px;
  opacity: .6;

  a {
    padding: 0 !important;

    &::after {
      display: none !important;
    }
  }
`;

Layout.defaultProps = {
  title: 'Down the rabbithole – World of a frontend dev',
  description: null,
  parent: null,
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  parent: PropTypes.object,
};
