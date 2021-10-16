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
  isLoadInfo?: boolean;
  path?: string;
}

const PageTemplate = ({
  isHeader,
  children,
  isLogout,
  isFooter,
  path = '/main',
  isLoadInfo = true,
}: IPageTemplateProps) => {
  return (
    <StyledPageTemplate>
      {isHeader && (
        <Header path={path} isLoadInfo={isLoadInfo} isLogout={isLogout} />
      )}
      <StyledPageTemplateContent>{children}</StyledPageTemplateContent>
      {isFooter && <Footer />}
    </StyledPageTemplate>
  );
};

export default PageTemplate;
