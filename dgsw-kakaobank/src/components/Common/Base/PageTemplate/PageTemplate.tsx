import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import {
  StyledPageTemplateContent,
  StyledPageTemplate,
} from './PageTemplate.style';

interface IPageTemplateProps {
  children: ReactNode;
  isLogout: boolean;
  isFooter: boolean;
}

const PageTemplate = ({ children, isLogout, isFooter }: IPageTemplateProps) => {
  return (
    <StyledPageTemplate>
      <Header isLogout={isLogout} />
      <StyledPageTemplateContent>{children}</StyledPageTemplateContent>
      {isFooter && <Footer />}
    </StyledPageTemplate>
  );
};

export default PageTemplate;
