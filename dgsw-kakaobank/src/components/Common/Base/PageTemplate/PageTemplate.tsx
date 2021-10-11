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
  isHeader: boolean;
}

const PageTemplate = ({
  isHeader,
  children,
  isLogout,
  isFooter,
}: IPageTemplateProps) => {
  return (
    <StyledPageTemplate>
      {isHeader && <Header isLogout={isLogout} />}
      <StyledPageTemplateContent>{children}</StyledPageTemplateContent>
      {isFooter && <Footer />}
    </StyledPageTemplate>
  );
};

export default PageTemplate;
