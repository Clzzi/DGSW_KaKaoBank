import React from 'react';
import PageTemplate from 'components/Common/Base/PageTemplate';
import Login from 'components/Login';
import Card from 'components/Login/Card';

const LoginPage = () => {
  return (
    <>
      <PageTemplate
        isLoadInfo={false}
        isHeader
        path="/"
        isFooter={false}
        isLogout={false}
      >
        <Login />
      </PageTemplate>
      <Card />
    </>
  );
};

export default LoginPage;
